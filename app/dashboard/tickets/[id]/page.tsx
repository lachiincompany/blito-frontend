'use client';

import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import BusTicketCard from '@/components/tickets/BusTicketCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  RefreshCw,
  ArrowUpLeft,
  Ticket,
  Copy,
  Printer,
  User,
  Phone,
  CreditCard,
  BusFront,
  MapPin,
  CalendarClock,
  Building2,
  BadgeCheck,
  BadgeX,
} from 'lucide-react';

const API_BASE = 'http://localhost:9000';

// ---- TYPES (جزئیات API) ----
type PaymentStatus = 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED';

type PassengerInfo = {
  name?: string;
  phone?: string;
  national_id?: string;
  full_name?: string;
};

type TripInfo = {
  origin: string;
  destination: string;
  departure_datetime: string;
  company: string;
  bus_type: string;
  seat_number: string;
  bus_number?: string;
};

type RouteDetails = {
  origin?: string;
  destination?: string;
  company?: string;
  bus_type?: string;
  base_price?: string;
  distance_km?: number;
  estimated_duration?: string;
};

type FleetDetails = {
  company_name?: string;
  bus_number?: string;
  license_plate?: string;
  model?: string;
  brand?: string;
  year?: number;
  capacity?: number;
  bus_type?: string;
  facilities?: string;
  image?: string;
  interior_image?: string;
};

type TripDetails = {
  departure_datetime?: string;
  arrival_datetime?: string;
  status?: string;
  route?: RouteDetails;
  fleet?: FleetDetails;
};

type SeatDetails = {
  seat_number?: number | string;
  is_reserved?: boolean;
  can_cancel?: string | boolean;
  trip_details?: TripDetails;
};

export type ReservationDetail = {
  id: number;
  reservation_code: string;
  total_price?: string;     // detail serializer
  totalPrice?: string;      // اگر جایی متفاوت برگشت
  payment_status: PaymentStatus;
  payment_status_display?: string;
  created_at: string;
  passenger_info?: PassengerInfo | null;
  trip_info?: TripInfo | null;
  seat_details?: SeatDetails | null;
};

function safeMoney(n?: string) {
  if (!n) return '—';
  const num = Number(n);
  if (Number.isNaN(num)) return `${n} تومان`;
  try {
    return new Intl.NumberFormat('fa-IR').format(num) + ' تومان';
  } catch {
    return `${num} تومان`;
  }
}

function faDateTime(iso?: string) {
  if (!iso) return '—';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '—';
  try {
    const date = new Intl.DateTimeFormat('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(d);
    const time = new Intl.DateTimeFormat('fa-IR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(d);
    return `${date} - ${time}`;
  } catch {
    return '—';
  }
}

function statusBadge(status: PaymentStatus) {
  switch (status) {
    case 'PAID':
      return (
        <Badge className="bg-emerald-600 hover:bg-emerald-600 text-white rounded-full">
          پرداخت‌شده <BadgeCheck className="w-4 h-4 mr-2" />
        </Badge>
      );
    case 'PENDING':
      return (
        <Badge className="bg-amber-500 hover:bg-amber-500 text-white rounded-full">
          در انتظار پرداخت
        </Badge>
      );
    case 'REFUNDED':
      return (
        <Badge className="bg-blue-600 hover:bg-blue-600 text-white rounded-full">
          عودت داده‌شده
        </Badge>
      );
    case 'FAILED':
    default:
      return (
        <Badge className="bg-rose-600 hover:bg-rose-600 text-white rounded-full">
          ناموفق <BadgeX className="w-4 h-4 mr-2" />
        </Badge>
      );
  }
}

export default function TicketDetailsPage() {
  const params = useParams();
  const id = params?.id as string;
  const router = useRouter();

  const [ticket, setTicket] = useState<ReservationDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchTicket = async () => {
    setLoading(true);
    setError('');

    const token = localStorage.getItem('accessToken');
    if (!token) {
      setLoading(false);
      router.push('/login');
      return;
    }

    try {
      const res = await axios.get(
        `${API_BASE}/reservations/api/v1/api/reservations/${id}/`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTicket(res.data as ReservationDetail);
    } catch (e: any) {
      if (e?.response?.status === 404) setError('بلیط پیدا نشد.');
      else if (e?.response?.status === 401) setError('دسترسی غیرمجاز! لطفاً دوباره وارد شوید.');
      else setError('مشکلی در دریافت اطلاعات بلیط رخ داد.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;
    fetchTicket();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const price = useMemo(() => ticket?.totalPrice ?? ticket?.total_price, [ticket]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(ticket?.reservation_code ?? '');
    } catch {}
  };

  const onPrint = () => {
    // اگر خواستی فقط خود بلیط پرینت بشه، می‌تونیم print CSS هم اضافه کنیم
    window.print();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
          <p className="text-slate-600 font-medium">در حال دریافت اطلاعات بلیط...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl">
          <CardContent className="pt-8 pb-8 text-center">
            <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Ticket className="w-8 h-8 text-rose-600" />
            </div>
            <p className="text-rose-600 font-medium">{error}</p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <Button className="rounded-2xl" onClick={fetchTicket}>
                تلاش مجدد <RefreshCw className="w-4 h-4 mr-2" />
              </Button>
              <Button variant="ghost" className="rounded-2xl" onClick={() => router.back()}>
                بازگشت <ArrowUpLeft className="w-4 h-4 mr-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!ticket) return null;

  const passenger = ticket.passenger_info ?? {};
  const trip = ticket.trip_info ?? null;
  const seatDetails = ticket.seat_details ?? null;
  const tripDetails = seatDetails?.trip_details ?? null;
  const route = tripDetails?.route ?? null;
  const fleet = tripDetails?.fleet ?? null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" dir="rtl">
      {/* Header */}
      <header className="bg-white/75 backdrop-blur-md border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">جزئیات بلیط</h1>
                {statusBadge(ticket.payment_status)}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                کد رزرو: <span className="font-mono font-bold text-slate-700">{ticket.reservation_code}</span>
                {price ? (
                  <span className="mr-2 text-slate-400">•</span>
                ) : null}
                {price ? <span className="text-slate-600">مبلغ: {safeMoney(price)}</span> : null}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={fetchTicket}
                className="rounded-2xl text-slate-600 hover:text-blue-700 hover:bg-blue-50"
              >
                بروزرسانی <RefreshCw className="w-4 h-4 mr-2" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={onCopy}
                className="rounded-2xl text-slate-600 hover:text-blue-700 hover:bg-blue-50"
              >
                کپی کد <Copy className="w-4 h-4 mr-2" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={onPrint}
                className="rounded-2xl text-slate-600 hover:text-blue-700 hover:bg-blue-50"
              >
                چاپ <Printer className="w-4 h-4 mr-2" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.back()}
                className="rounded-2xl text-slate-600 hover:text-blue-700 hover:bg-blue-50"
              >
                بازگشت <ArrowUpLeft className="w-4 h-4 mr-2" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Ticket */}
        <BusTicketCard ticket={ticket as any} />

        {/* Details grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Passenger */}
          <Card className="bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-lg rounded-3xl">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold">
                <User className="w-5 h-5 text-blue-700" />
                اطلاعات مسافر
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">نام و نام خانوادگی</span>
                <span className="font-bold text-slate-900">{passenger.full_name ?? '—'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">نام</span>
                <span className="font-bold text-slate-900">{passenger.name ?? '—'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 flex items-center gap-1">
                  <Phone className="w-4 h-4" /> شماره تماس
                </span>
                <span className="font-bold text-slate-900">{passenger.phone ?? '—'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">کد ملی</span>
                <span className="font-mono font-black text-slate-900">{passenger.national_id ?? '—'}</span>
              </div>
            </CardContent>
          </Card>

          {/* Trip */}
          <Card className="bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-lg rounded-3xl">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold">
                <MapPin className="w-5 h-5 text-blue-700" />
                اطلاعات سفر
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">مسیر</span>
                <span className="font-bold text-slate-900">
                  {trip?.origin ?? route?.origin ?? '—'} ← {trip?.destination ?? route?.destination ?? '—'}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500 flex items-center gap-1">
                  <CalendarClock className="w-4 h-4" /> زمان حرکت
                </span>
                <span className="font-bold text-slate-900">
                  {faDateTime(trip?.departure_datetime ?? tripDetails?.departure_datetime)}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500 flex items-center gap-1">
                  <CalendarClock className="w-4 h-4" /> زمان رسیدن
                </span>
                <span className="font-bold text-slate-900">{faDateTime(tripDetails?.arrival_datetime)}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500 flex items-center gap-1">
                  <Building2 className="w-4 h-4" /> شرکت
                </span>
                <span className="font-bold text-slate-900">{trip?.company ?? route?.company ?? '—'}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">نوع سرویس</span>
                <span className="font-bold text-slate-900">{trip?.bus_type ?? route?.bus_type ?? '—'}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">شماره صندلی</span>
                <span className="font-bold text-slate-900">{trip?.seat_number ?? seatDetails?.seat_number ?? '—'}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">وضعیت سفر</span>
                <span className="font-bold text-slate-900">{tripDetails?.status ?? '—'}</span>
              </div>
            </CardContent>
          </Card>

          {/* Fleet / Payment */}
          <Card className="bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-lg rounded-3xl">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold">
                <BusFront className="w-5 h-5 text-blue-700" />
                ناوگان و پرداخت
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 flex items-center gap-1">
                  <CreditCard className="w-4 h-4" /> وضعیت پرداخت
                </span>
                <span className="font-bold text-slate-900">{ticket.payment_status_display ?? ticket.payment_status}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">مبلغ</span>
                <span className="font-black text-slate-900">{safeMoney(price)}</span>
              </div>

              <div className="h-px bg-slate-200/70 my-2" />

              <div className="flex items-center justify-between">
                <span className="text-slate-500">نام شرکت ناوگان</span>
                <span className="font-bold text-slate-900">{fleet?.company_name ?? '—'}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">شماره اتوبوس</span>
                <span className="font-bold text-slate-900">{fleet?.bus_number ?? trip?.bus_number ?? '—'}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">پلاک</span>
                <span className="font-mono font-black text-slate-900">{fleet?.license_plate ?? '—'}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">مدل</span>
                <span className="font-bold text-slate-900">
                  {[fleet?.brand, fleet?.model].filter(Boolean).join(' ') || '—'}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">ظرفیت</span>
                <span className="font-bold text-slate-900">{fleet?.capacity ?? '—'}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">امکانات</span>
                <span className="font-bold text-slate-900 line-clamp-1">{fleet?.facilities ?? '—'}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">قابل کنسلی</span>
                <span className="font-bold text-slate-900">{seatDetails?.can_cancel ?? '—'}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer note */}
        <div className="text-xs text-slate-500 text-center">
          اگر مشکلی در اطلاعات بلیط وجود دارد، از طریق پشتیبانی «بلیتو» پیگیری کنید.
        </div>
      </main>
    </div>
  );
}
