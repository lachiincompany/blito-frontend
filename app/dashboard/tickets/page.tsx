'use client';

import Link from 'next/link';
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
  Bus, // آیکون اتوبوس اضافه شد
} from 'lucide-react';
import BusTicketCard from '@/components/tickets/BusTicketCard';


// --- TYPE DEFINITIONS ---
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
  bus_number?: string; // فیلد جدید برای شماره اتوبوس
};

type ReservationItem = {
  id: number;
  reservation_code: string;
  totalPrice: string;
  payment_status: PaymentStatus;
  payment_status_display?: string;
  created_at: string;
  passenger_info?: PassengerInfo | null;
  trip_info?: TripInfo | null;
};

// --- API & HELPERS ---
const API_BASE = '';
const RESERVATIONS_LIST_URL = `${API_BASE}/reservations/api/v1/api/reservations/`;

function formatMoneyIRRDecimal(n: string) {
  const num = Number(n);
  if (Number.isNaN(num)) return `${n} تومان`;
  try {
    return new Intl.NumberFormat('fa-IR').format(num) + ' تومان';
  } catch {
    return `${num} تومان`;
  }
}

// --- NEW BLUE THEMED TICKET COMPONENT ---



// --- MAIN PAGE COMPONENT ---
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

    const params: Record<string, any> = {};
    if (status !== 'ALL') params.payment_status = status;
    if (q.trim()) params.search = q.trim();
    if (sort === 'newest') params.ordering = '-created_at';
    else if (sort === 'price_desc') params.ordering = '-total_price';
    else params.ordering = 'total_price';

    try {
      const res = await axios.get(RESERVATIONS_LIST_URL, {
        headers: { Authorization: `Bearer ${token}` },
        params,
      });

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
              تلاش مجدد <RefreshCw className="w-4 h-4 mr-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" dir="rtl">
      {/* Header */}
      <header className="bg-white/75 backdrop-blur-md border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" alt="بلیتو" width={40} height={40} className="w-10 h-10" />
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">بلیط‌های من</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => router.push('/dashboard')} className="rounded-2xl text-slate-600 hover:text-blue-700 hover:bg-blue-50">
                بازگشت <ArrowUpLeft className="w-4 h-4 mr-2" />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleLogout} className="rounded-2xl text-slate-600 hover:text-rose-700 hover:bg-rose-50">
                <LogOut className="w-4 h-4 ml-2" /> خروج
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <Card className="bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-lg rounded-3xl">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h2 className="text-lg font-bold text-slate-900">مدیریت بلیط‌ها</h2>
                <p className="text-sm text-slate-500 mt-1">بلیط‌های خود را جستجو، فیلتر و مرتب کنید.</p>
              </div>
              <Button onClick={fetchTickets} variant="ghost" className="rounded-2xl hover:bg-blue-50">
                به‌روزرسانی <RefreshCw className="w-4 h-4 mr-2" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="جستجو: کد رزرو، مسافر، مسیر..." className="pr-9 rounded-2xl bg-white" />
              </div>
              <select value={status} onChange={(e) => setStatus(e.target.value as any)} className="h-10 rounded-2xl bg-white px-3 text-sm text-slate-700 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-200">
                <option value="ALL">همه وضعیت‌ها</option>
                <option value="PAID">پرداخت‌شده</option>
                <option value="PENDING">در انتظار پرداخت</option>
                <option value="FAILED">ناموفق</option>
                <option value="REFUNDED">عودت داده‌شده</option>
              </select>
              <select value={sort} onChange={(e) => setSort(e.target.value as any)} className="h-10 rounded-2xl bg-white px-3 text-sm text-slate-700 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-200">
                <option value="newest">جدیدترین</option>
                <option value="price_desc">گران‌ترین</option>
                <option value="price_asc">ارزان‌ترین</option>
              </select>
              <Link href="/tickets/42">برو به بلیط ۴۲</Link>
            </div>
          </CardContent>
        </Card>

        {tickets.length === 0 ? (
          <Card className="bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-lg rounded-3xl">
            <CardContent className="py-14 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Ticket className="w-8 h-8 text-blue-700" />
              </div>
              <p className="text-slate-900 font-semibold">هیچ بلیطی یافت نشد</p>
              <p className="text-slate-500 text-sm mt-2">فیلترها را تغییر دهید یا دوباره امتحان کنید.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {tickets.map((t) => (
              <Link
                key={t.id}
                href={`/dashboard/tickets/${t.id}`}
                className="block"
              >
                <BusTicketCard ticket={t} />
              </Link>
            ))}
        </div>
        )}
      </main>
    </div>
  );
}

