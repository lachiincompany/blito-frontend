'use client';

import React from 'react';
import { BusFront } from 'lucide-react';

type PaymentStatus = 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED';

type TripInfo = {
  origin: string;
  destination: string;
  departure_datetime: string;
  company: string;
  bus_type: string;
  seat_number: string;
  bus_number?: string;
};

export type ReservationItem = {
  id: number;
  reservation_code: string;
  totalPrice: string;
  payment_status: PaymentStatus;
  created_at: string;
  trip_info?: TripInfo | null;
};

function formatMoneyIRRDecimal(n: string) {
  const num = Number(n);
  if (Number.isNaN(num)) return `${n} تومان`;
  try {
    return new Intl.NumberFormat('fa-IR').format(num) + ' تومان';
  } catch {
    return `${num} تومان`;
  }
}

function formatFaTime(d: Date) {
  try {
    return new Intl.DateTimeFormat('fa-IR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(d);
  } catch {
    return '—';
  }
}

function formatFaDate(d: Date) {
  try {
    return new Intl.DateTimeFormat('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(d);
  } catch {
    return '—';
  }
}

export default function BusTicketCard({ ticket }: { ticket: ReservationItem }) {
  const trip = ticket.trip_info ?? null;

  const departureDate = trip?.departure_datetime ? new Date(trip.departure_datetime) : null;
  const time = departureDate ? formatFaTime(departureDate) : '—';
  const date = departureDate ? formatFaDate(departureDate) : '—';

  const barcodeBg =
    'repeating-linear-gradient(90deg,#111 0 2px,transparent 2px 4px,#111 4px 5px,transparent 5px 8px)';

  return (
    <div className="w-full" dir="rtl">
      <div className="w-full max-w-5xl mx-auto rounded-[24px] overflow-hidden bg-white shadow-[0_16px_42px_rgba(0,0,0,0.12)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_22px_260px]">
          {/* MAIN */}
          <section className="p-5 sm:p-6 relative">
            {/* Header (Blue) */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[20px] p-4 sm:p-5 flex items-center justify-between gap-4">
              {/* Title box */}
              <div className="bg-white rounded-[22px] border-[3px] border-black px-5 py-2.5 sm:px-7 sm:py-3 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-[28px] sm:text-[38px] font-black tracking-tight leading-none text-black">
                    بلیط اتوبوس
                  </div>
                </div>
              </div>

              {/* Icon */}
              <div className="shrink-0">
                <div className="w-[78px] h-[78px] sm:w-[90px] sm:h-[90px] rounded-[16px] bg-black relative grid place-items-center">
                  <BusFront className="text-blue-500" size={50} />
                  <div className="absolute bottom-3 left-4 w-3 h-3 rounded-full bg-white" />
                  <div className="absolute bottom-3 right-4 w-3 h-3 rounded-full bg-white" />
                </div>
              </div>
            </div>

            <div className="mt-5 relative">
              {/* subtle background */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none">
                <div className="w-full h-full bg-[radial-gradient(circle_at_20%_60%,#000_0,transparent_45%),radial-gradient(circle_at_60%_40%,#000_0,transparent_50%),radial-gradient(circle_at_85%_70%,#000_0,transparent_50%)]" />
              </div>

              {/* Top fields */}
              <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-7">
                <div>
                  <div className="text-[16px] text-black/65">مبدأ</div>
                  <div className="text-[34px] font-black leading-none">{trip?.origin ?? '—'}</div>
                </div>

                <div>
                  <div className="text-[16px] text-black/65">مقصد</div>
                  <div className="text-[34px] font-black leading-none">{trip?.destination ?? '—'}</div>
                </div>

                <div>
                  <div className="text-[16px] text-black/65">نوع سرویس</div>
                  <div className="text-[34px] font-black leading-none">{trip?.bus_type ?? '—'}</div>
                </div>
              </div>

              {/* Second line */}
              <div className="relative mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-7 items-center">
                <div className="flex items-end gap-2.5">
                  <div className="text-[18px] text-black/75">شماره صندلی</div>
                  <div className="text-[18px] font-black">{trip?.seat_number ?? '—'}</div>
                </div>

                <div className="flex items-end gap-2.5">
                  <div className="text-[18px] text-black/75">شماره اتوبوس</div>
                  <div className="text-[18px] font-black">
                    {trip?.bus_number ?? ticket.reservation_code ?? '—'}
                  </div>
                </div>

                <div className="flex items-end gap-2.5">
                  <div className="text-[18px] text-black/75">قیمت بلیط</div>
                  <div className="text-[18px] font-black">{formatMoneyIRRDecimal(ticket.totalPrice)}</div>
                </div>
              </div>

              {/* Company pill + Blito */}
              <div className="relative mt-4 flex items-center gap-3 flex-wrap">
                <span className="inline-flex items-center bg-blue-600 text-white font-bold text-[16px] px-5 py-2 rounded-full">
                  {trip?.company ?? '—'}
                </span>
              </div>

              {/* Barcode */}
              <div className="relative mt-5">
                <div
                  className="h-[54px] w-[340px] max-w-full rounded-[6px]"
                  style={{ backgroundImage: barcodeBg }}
                />
              </div>

              {/* Bottom meta */}
              <div className="relative mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-baseline gap-2.5">
                  <div className="text-[18px] text-black/75">زمان حرکت</div>
                  <div className="text-[18px] font-black">{time}</div>
                </div>

                <div className="flex items-baseline gap-2.5 sm:justify-end">
                  <div className="text-[18px] text-black/75">تاریخ</div>
                  <div className="text-[18px] font-black">{date}</div>
                </div>
              </div>
            </div>
          </section>

          {/* PERFORATION */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[3px] bg-[repeating-linear-gradient(to_bottom,#111_0_12px,transparent_12px_24px)] opacity-60" />
          </div>

          {/* STUB */}
          <aside className="relative bg-white lg:bg-transparent p-5 sm:p-6 lg:p-0">
            <div className="lg:h-full lg:bg-gradient-to-b lg:from-blue-600 lg:to-indigo-700 lg:rounded-r-[24px] overflow-hidden relative">
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-b from-blue-600 to-indigo-700" />


              {/* corner cuts */}
              <div className="hidden lg:block absolute -top-10 -right-10 w-28 h-28 rounded-full bg-white" />
              <div className="hidden lg:block absolute top-[42px] -right-10 w-28 h-28 rounded-full bg-white" />

              <div className="relative lg:p-6">
                <div className="hidden lg:flex items-center justify-between gap-3">
                  {/* حذف عددها ✅ */}

                  <div className="h-[210px] w-[50px] rounded-[10px] bg-[repeating-linear-gradient(to_bottom,#fff_0_3px,transparent_3px_6px)] opacity-95" />


                </div>

                {/* mobile */}
                <div className="lg:hidden rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-slate-700">شماره بلیط</div>
                    <div className="font-mono font-black text-slate-900">{ticket.reservation_code}</div>
                  </div>
                </div>

                <div className="hidden lg:block mt-5 text-white text-center font-mono font-black text-[18px]">
                  {ticket.reservation_code}
                </div>

                <div className="hidden lg:block mt-3 text-white/90 text-center font-extrabold text-[20px]">
                  بلیتو
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
