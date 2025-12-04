'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import Image from 'next/image';


import {
  LogOut,
  Home,
  Ticket,
  Calendar,
  CreditCard,
  RefreshCw,
  Search,
  CheckCircle2,
  Clock3,
  XCircle,
  CornerUpLeft,
  ArrowUpLeft,
} from 'lucide-react';

type PaymentStatus = 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED';

type PassengerInfo = {
  name: string;
  phone: string;
  national_id?: string;
  full_name: string;
};

type TripInfo = {
  origin: string;
  destination: string;
  departure_datetime: string;
  company: string;
  bus_type: string;
  seat_number: string;
};

type ReservationItem = {
  id: number;
  reservation_code: string;
  // ⚠️ طبق API: totalPrice (camelCase) نه total_price
  totalPrice: string;
  payment_status: PaymentStatus;
  payment_status_display?: string;
  created_at: string;
  passenger_info?: PassengerInfo | null;
  trip_info?: TripInfo | null;
};

const API_BASE = 'http://localhost:9000';
const RESERVATIONS_LIST_URL = `${API_BASE}/reservations/api/v1/api/reservations/`; // لیست رزروهای کاربر جاری (با فیلتر/سرچ/ordering بک‌اند)

function formatMoneyIRRDecimal(n: string) {
  const num = Number(n);
  if (Number.isNaN(num)) return `${n} تومان`;
  try {
    return new Intl.NumberFormat('fa-IR').format(num) + ' تومان';
  } catch {
    return `${num} تومان`;
  }
}

function safeDate(s?: string) {
  if (!s) return '—';
  const d = new Date(s);
  if (Number.isNaN(d.getTime())) return s;
  try {
    return new Intl.DateTimeFormat('fa-IR', { dateStyle: 'medium', timeStyle: 'short' }).format(d);
  } catch {
    return d.toLocaleString();
  }
}

function statusMeta(status: PaymentStatus, display?: string) {
  switch (status) {
    case 'PAID':
      return {
        label: display || 'پرداخت‌شده',
        badge: 'bg-emerald-100 text-emerald-700 border-emerald-200',
        icon: <CheckCircle2 className="w-5 h-5 ml-2 text-emerald-600" />,
      };
    case 'PENDING':
      return {
        label: display || 'در انتظار پرداخت',
        badge: 'bg-amber-100 text-amber-700 border-amber-200',
        icon: <Clock3 className="w-5 h-5 ml-2 text-amber-600" />,
      };
    case 'FAILED':
      return {
        label: display || 'ناموفق',
        badge: 'bg-rose-100 text-rose-700 border-rose-200',
        icon: <XCircle className="w-5 h-5 ml-2 text-rose-600" />,
      };
    case 'REFUNDED':
      return {
        label: display || 'عودت داده‌شده',
        badge: 'bg-slate-100 text-slate-700 border-slate-200',
        icon: <CornerUpLeft className="w-5 h-5 ml-2 text-slate-600" />,
      };
  }
}

function TicketCardBlue({
  t,
  onView,
}: {
  t: ReservationItem;
  onView: (id: number) => void;
}) {
  const meta = statusMeta(t.payment_status, t.payment_status_display);

  const passenger = t.passenger_info || null;
  const trip = t.trip_info || null;

  const passengerName =
    passenger?.full_name || passenger?.name || '—';
  const passengerPhone = passenger?.phone || '';

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* هاله‌ی گرادیانی بزرگ‌تر */}
      <div className="absolute -inset-1.5 rounded-[32px] bg-gradient-to-r from-blue-600/25 via-indigo-600/15 to-sky-500/25 blur-xl" />

      <Card className="relative overflow-hidden rounded-[32px] border border-slate-200/70 shadow-xl bg-white/80 backdrop-blur-md">
        {/* نوار بالا کمی کلفت‌تر */}
        <div className="h-3 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500" />

        <CardContent className="p-7 sm:p-9">
          {/* سوراخ‌های کناری و خط پرفراژ */}
          <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-slate-50 rounded-full -translate-x-1/2 shadow-inner" />
          <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-slate-50 rounded-full translate-x-1/2 shadow-inner" />
          <div className="pointer-events-none absolute left-12 right-12 top-1/2 border-t border-dashed border-slate-200" />

          <div className="flex items-start justify-between gap-6">
            <div className="flex items-start gap-4">
              {/* آیکون بلیط با PNG مخصوص خودت */}
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-600/10 to-indigo-600/10 flex items-center justify-center shadow-sm border border-slate-200/60">
                <Image
                  src="/ticket-icon.png" // <-- این رو می‌تونی عوض کنی اگر اسم فایل متفاوته
                  alt="Ticket icon"
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain"
                />
              </div>

              <div>
                <div className="flex items-center flex-wrap gap-3">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    بلیط شماره{' '}
                    <span className="font-mono text-blue-700">
                      {t.reservation_code}
                    </span>
                  </h3>

                  <Badge className={`border ${meta.badge} px-3.5 py-1.5 rounded-2xl text-sm`}>
                    <span className="flex items-center font-semibold">
                      {meta.icon}
                      {meta.label}
                    </span>
                  </Badge>
                </div>

                <p className="text-sm sm:text-base text-slate-500 mt-2">
                  ثبت: {safeDate(t.created_at)} • کد داخلی:{' '}
                  <span className="font-mono">{t.id}</span>
                </p>
              </div>
            </div>

            <div className="text-left min-w-[140px]">
              <p className="text-xs text-slate-500 mb-1">مبلغ</p>
              <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                {formatMoneyIRRDecimal(t.totalPrice)}
              </p>
            </div>
          </div>

          {/* بلوک‌های اطلاعات بزرگ‌تر */}
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-3xl bg-slate-50 p-5 border border-slate-200/70">
              <div className="flex items-center text-xs text-slate-500 mb-1.5">
                <Calendar className="w-4 h-4 ml-2 text-slate-400" />
                زمان ثبت
              </div>
              <div className="text-sm sm:text-base font-semibold text-slate-900">
                {safeDate(t.created_at)}
              </div>
            </div>

            <div className="rounded-3xl bg-slate-50 p-5 border border-slate-200/70">
              <div className="flex items-center text-xs text-slate-500 mb-1.5">
                <CreditCard className="w-4 h-4 ml-2 text-slate-400" />
                مسیر و صندلی
              </div>
              <div className="text-sm sm:text-base font-semibold text-slate-900">
                {trip ? (
                  <>
                    {trip.origin} ← {trip.destination}
                    <span className="block text-xs text-slate-500 mt-1.5">
                      صندلی:{' '}
                      <span className="font-mono">
                        {trip.seat_number}
                      </span>
                    </span>
                  </>
                ) : (
                  '—'
                )}
              </div>
            </div>

            <div className="rounded-3xl bg-slate-50 p-5 border border-slate-200/70">
              <div className="flex items-center text-xs text-slate-500 mb-1.5">
                <Ticket className="w-4 h-4 ml-2 text-slate-400" />
                اطلاعات مسافر
              </div>
              <div className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">
                {passengerName}
                {passengerPhone && (
                  <span className="text-xs text-slate-500 mr-1">
                    {' '}
                    • {passengerPhone}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-slate-500">
              {t.payment_status === 'PENDING'
                ? 'این رزرو هنوز پرداخت نشده است.'
                : 'رزرو شما ثبت شده است.'}
            </div>

            <Button
              variant="ghost"
              className="hover:bg-blue-50 text-slate-800 hover:text-blue-700 rounded-2xl px-5 py-2 text-sm sm:text-base"
              onClick={() => onView(t.id)}
            >
              مشاهده جزئیات
              <ArrowUpLeft className="w-4 h-4 mr-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


export default function TicketsPage() {
  const router = useRouter();

  const [tickets, setTickets] = useState<ReservationItem[]>([]);
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [q, setQ] = useState('');
  const [status, setStatus] = useState<'ALL' | PaymentStatus>('ALL');
  const [sort, setSort] = useState<'newest' | 'price_desc' | 'price_asc'>('newest');

  const fetchTickets = useCallback(async () => {
    setLoading(true);
    setError('');

    const token = localStorage.getItem('accessToken');
    if (!token) {
      setLoading(false);
      router.push('/login');
      return;
    }

    // نگاشت فیلترها به پارامترهای بک‌اند
    const params: Record<string, any> = {};
    if (status !== 'ALL') params.payment_status = status;
    if (q.trim()) params.search = q.trim();

    if (sort === 'newest') {
      params.ordering = '-created_at';
    } else if (sort === 'price_desc') {
      params.ordering = '-total_price';
    } else {
      params.ordering = 'total_price';
    }

    try {
      const res = await axios.get(RESERVATIONS_LIST_URL, {
        headers: { Authorization: `Bearer ${token}` },
        params,
      });

      // هم paginated و هم non-paginated را هندل می‌کنیم
      if (Array.isArray(res.data)) {
        setTickets(res.data as ReservationItem[]);
        setTotalCount(res.data.length);
      } else {
        const results = res.data?.results ?? [];
        setTickets(results as ReservationItem[]);
        setTotalCount(typeof res.data?.count === 'number' ? res.data.count : results.length);
      }
    } catch (err: any) {
      if (err?.response?.status === 401) {
        setError('دسترسی غیرمجاز! لطفاً دوباره وارد شوید.');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        router.push('/login');
      } else {
        setError('مشکلی در دریافت بلیط‌ها رخ داد.');
      }
    } finally {
      setLoading(false);
    }
  }, [router, q, status, sort]);

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
          <p className="text-slate-600 font-medium">در حال دریافت بلیط‌ها...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <Card className="w-full max-w-md mx-4 bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl">
          <CardContent className="pt-8 pb-8 text-center">
            <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Ticket className="w-8 h-8 text-rose-600" />
            </div>
            <p className="text-rose-600 font-medium">{error}</p>
            <Button className="mt-4 rounded-2xl" onClick={fetchTickets}>
              تلاش مجدد
              <RefreshCw className="w-4 h-4 mr-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" dir="rtl">
      {/* Header */}
      <div className="bg-white/75 backdrop-blur-md border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="بلیتو"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                بلیط‌های من
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push('/dashboard')}
                className="rounded-2xl text-slate-600 hover:text-blue-700 hover:bg-blue-50"
              >
                بازگشت
                <ArrowUpLeft className="w-4 h-4 mr-2" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push('/')}
                className="rounded-2xl text-slate-600 hover:text-blue-700 hover:bg-blue-50"
              >
                <Home className="w-4 h-4 ml-2" />
                صفحه اصلی
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="rounded-2xl text-slate-600 hover:text-rose-700 hover:bg-rose-50"
              >
                <LogOut className="w-4 h-4 ml-2" />
                خروج
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <Card className="bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-lg rounded-3xl">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h2 className="text-lg font-bold text-slate-900">مدیریت بلیط‌ها</h2>
                <p className="text-sm text-slate-500 mt-1">میتونید مرتب و فیلتر کنید بلیط هاتون رو </p>
              </div>
              <Button onClick={fetchTickets} variant="ghost" className="rounded-2xl hover:bg-blue-50">
                به‌روزرسانی
                <RefreshCw className="w-4 h-4 mr-2" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                <Input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="جستجو: کد رزرو، مسافر، مسیر..."
                  className="pr-9 rounded-2xl bg-white"
                />
              </div>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as any)}
                className="h-10 rounded-2xl bg-white px-3 text-sm text-slate-700 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <option value="ALL">همه وضعیت‌ها</option>
                <option value="PAID">پرداخت‌شده</option>
                <option value="PENDING">در انتظار پرداخت</option>
                <option value="FAILED">ناموفق</option>
                <option value="REFUNDED">عودت داده‌شده</option>
              </select>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as any)}
                className="h-10 rounded-2xl bg-white px-3 text-sm text-slate-700 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <option value="newest">جدیدترین (زمان ثبت)</option>
                <option value="price_desc">گران‌ترین (قیمت)</option>
                <option value="price_asc">ارزان‌ترین (قیمت)</option>
              </select>
            </div>

            <Separator className="my-5" />

            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>
                تعداد:{' '}
                <span className="font-semibold text-slate-900">
                  {totalCount ?? tickets.length}
                </span>
              </span>
              <span className="text-xs text-slate-500">
                لیست رزروهای کاربر جاری (با فیلتر سمت سرور)
              </span>
            </div>
          </CardContent>
        </Card>

        {tickets.length === 0 ? (
          <Card className="bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-lg rounded-3xl">
            <CardContent className="py-14 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Ticket className="w-8 h-8 text-blue-700" />
              </div>
              <p className="text-slate-900 font-semibold">بلیطی پیدا نشد</p>
              <p className="text-slate-500 text-sm mt-2">
                فیلترها را تغییر دهید یا دوباره تلاش کنید.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-5">
            {tickets.map((t) => (
              <TicketCardBlue
                key={t.id}
                t={t}
                onView={(id) => router.push(`/dashboard/tickets/${id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
