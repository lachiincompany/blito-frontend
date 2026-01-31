'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
// ایمپورت آیکون‌ها
import { 
  ArrowRight, MapPin, Clock, Calendar, Bus, 
  User, CheckCircle2, Armchair, CarFront, AlertCircle, Loader2 
} from 'lucide-react';

// فرض بر این است که کامپوننت‌های UI شما در این مسیر هستند
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Gauge } from "lucide-react";

// --- تعریف تایپ‌ها (Interface) ---
interface Seat {
  id: number;
  seat_number: number;
  is_reserved: boolean;
  reserved_by?: { first_name: string; last_name: string };
}

interface TripDetails {
  id: number;
  route: {
    origin: string;
    destination: string;
    company: string;
    distance_km: number;
    estimated_duration: string;
  };
  fleet: {
    license_plate: string;
    model: string;
    brand: string;
    capacity: number;
    bus_type: "standard" | "vip" | "luxury";
    facilities: string[];
  };
  departure_datetime: string;
  arrival_datetime: string;
  current_price: string;
  status: string;
  driver_name: number;
  driver_phone: string;
}

export default function BookingPage() {
  // --- هوک‌ها و متغیرها ---
  const params = useParams();
  const router = useRouter();
  const tripId = params.tripId as string;

  // --- استیت‌ها (State) ---
  const [seats, setSeats] = useState<Seat[]>([]);
  const [tripDetails, setTripDetails] = useState<TripDetails | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [reserving, setReserving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // --- توابع کمکی (Helpers) ---
  const formatPrice = (price: string | number) => Number(price).toLocaleString('fa-IR');
  
  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return {
      time: date.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit', hour12: false }),
      date: date.toLocaleDateString('fa-IR', { month: 'long', day: 'numeric' })
    };
  };

  // --- دریافت اطلاعات از سرور ---
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // 1. دریافت جزئیات سفر
        const tripRes = await fetch(`/trips/api/v1/trips/${tripId}/`);
        if (!tripRes.ok) throw new Error('خطا در دریافت اطلاعات سفر');
        const tripData = await tripRes.json();
        setTripDetails(tripData);

        // 2. دریافت لیست صندلی‌ها
        const token = localStorage.getItem('accessToken');
        const seatRes = await fetch(`/seat/api/v1/api/seats/trip/${tripId}/`, {
          headers: token ? { 'Authorization': `Bearer ${token}` } : {}
        });
        if (!seatRes.ok) throw new Error('خطا در دریافت لیست صندلی‌ها');
        console.log("Seat API status:", seatRes.status);

        const seatData = await seatRes.json();
        console.log("Seat API response (parsed):", seatData);

        // چون API شما لیست نمی‌دهد، تک مورد برمی‌گرداند
        console.log("RAW seatData:", seatData);
        console.log("seatData.seats:", seatData?.seats);
        console.log("Array.isArray(seatData.seats):", Array.isArray(seatData?.seats));
        console.log("seatRes.status:", seatRes.status)
        setSeats(seatData.seats); 
        
      } catch (err) {
        console.error(err);
        setError('مشکلی در ارتباط با سرور پیش آمده است. لطفاً مجدداً تلاش کنید.');
      } finally {
        setLoading(false);
      }
    };

    if (tripId) fetchData();
  }, [tripId]);

  // --- مدیریت انتخاب صندلی ---
  const toggleSeat = (seatId: number, isReserved: boolean) => {
    if (isReserved) return;

    setSelectedSeats(prev => {
      if (prev.includes(seatId)) {
        // حذف انتخاب
        return prev.filter(id => id !== seatId);
      } else {
        // افزودن انتخاب جدید (با محدودیت ۴ صندلی)
        if (prev.length >= 4) {
          alert("شما حداکثر می‌توانید ۴ صندلی انتخاب کنید.");
          return prev;
        }
        return [...prev, seatId];
      }
    });
  };

const handleReservation = async () => {
  if (selectedSeats.length === 0) return;

  const token = localStorage.getItem("accessToken");

  // 1) ایجاد رزرو
  const createRes = await fetch("/reservations/api/v1/api/reservations/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({ seat: selectedSeats[0] }),
  });

  const reservation = await createRes.json();

  if (!createRes.ok) {
    console.log("خطا:", reservation);
    setError(reservation.detail || reservation.error || "خطا در ایجاد رزرو");
    return;
  }

  console.log("Reservation created:", reservation);

  const reservationId = reservation.id;

  // 2) تایید پرداخت آفلاین
  const payRes = await fetch(
    `/reservations/api/v1/api/reservations/${reservationId}/confirm_payment/`,
    {
      method: "POST",
      headers: { "Authorization": `Bearer ${token}` },
    }
  );

  const payData = await payRes.json();

  if (!payRes.ok) {
    console.log("Error confirming:", payData);
    setError(payData.detail || payData.error || "خطا در تایید پرداخت");
    return;
  }

  alert("پرداخت با موفقیت تایید شد!");
  router.push("/dashboard/tickets");
};


  // --- بخش رندرینگ: حالت لودینگ ---
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-4">
        <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
        <p className="text-gray-500 font-medium">در حال بارگذاری اطلاعات سفر...</p>
      </div>
    );
  }

  // --- بخش رندرینگ: UI اصلی ---
  return (
    <div className="min-h-screen bg-gray-50/50 pb-10 font-sans" dir="rtl">
      
      {/* 1. هدر صفحه */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => router.back()}>
              <ArrowRight className="w-5 h-5" />
            </Button>
            <h1 className="font-bold text-lg text-gray-800">انتخاب صندلی</h1>
          </div>
          <div className="text-sm text-gray-500 hidden sm:block">
            شناسه سفر: {tripId}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-6xl space-y-6">
        
        {/* نمایش خطاها */}
        {error && (
          <Alert variant="destructive" className="bg-red-50 border-red-200 text-red-800">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* 2. کارت اطلاعات کلی سفر */}
        {tripDetails && (
          <Card className="shadow-sm border-0 bg-white overflow-hidden">
            <div className="bg-slate-900 text-white p-4 flex justify-between items-center text-sm">
              <span className="font-bold text-lg">{tripDetails.route.company}</span>
              <Badge variant="secondary" className="bg-white/10 text-white hover:bg-white/20 border-0">
                {tripDetails.fleet.bus_type === 'vip' ? 'VIP تخت‌شو' : 'معمولی'}
              </Badge>
            </div>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                
                {/* مبدا */}
                <div className="text-center md:text-right">
                  <span className="text-2xl font-bold text-gray-900">
                    {formatDateTime(tripDetails.departure_datetime).time}
                  </span>
                  <div className="flex items-center justify-center md:justify-start gap-1 text-gray-500 mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>{tripDetails.route.origin}</span>
                  </div>
                </div>

                {/* ویژوال مسیر */}
                <div className="flex-1 w-full flex flex-col items-center px-4">
                  <div className="text-xs text-gray-400 mb-2 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {tripDetails.route.estimated_duration}
                  </div>
                  <div className="w-full h-[2px] bg-gray-200 relative flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full absolute right-0 ring-4 ring-blue-50"></div>
                    <Bus className="w-5 h-5 text-gray-400 absolute left-1/2 -translate-x-1/2 bg-white px-1" />
                    <div className="w-2 h-2 bg-gray-300 rounded-full absolute left-0"></div>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    {tripDetails.route.distance_km} کیلومتر
                  </div>
                </div>

                {/* مقصد */}
                <div className="text-center md:text-left">
                  <span className="text-2xl font-bold text-gray-400">
                    {formatDateTime(tripDetails.arrival_datetime).time}
                  </span>
                  <div className="flex items-center justify-center md:justify-end gap-1 text-gray-500 mt-1">
                    <span>{tripDetails.route.destination}</span>
                    <MapPin className="w-4 h-4" />
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        )}

        {/* 3. چیدمان اصلی: نقشه و فاکتور */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* ستون راست: نقشه صندلی‌ها (8 واحد) */}
          <div className="lg:col-span-8">
            <Card className="border-gray-200 shadow-sm">
              <CardHeader className="border-b bg-gray-50/50 pb-4">
                <CardTitle className="text-base font-medium flex items-center gap-2">
                  <Armchair className="w-5 h-5 text-blue-600" />
                  نقشه اتوبوس
                </CardTitle>
                
                {/* راهنمای رنگ‌ها */}
                <div className="flex gap-4 pt-4 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-white border border-gray-300"></span>
                    <span>قابل خرید</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-blue-600"></span>
                    <span>انتخاب شما</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-gray-100 border border-gray-200"></span>
                    <span className="text-gray-400">رزرو شده</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8 flex justify-center bg-white">
                {/* بدنه گرافیکی اتوبوس */}
                <div className="relative border-2 border-gray-200 rounded-[2.5rem] rounded-b-xl p-6 pt-16 pb-12 w-full max-w-[340px] shadow-lg bg-white">
                  
                  {/* آیکون فرمان (راننده) */}
                  <div className="absolute top-6 right-8 text-gray-300">
                    <Gauge className="w-8 h-8" />
                  </div>
                  
                  <div className="border-b border-dashed w-full mb-8 relative">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-xs text-gray-400">جلوی اتوبوس</span>
                  </div>

                  {/* گرید صندلی‌ها */}
                  <div className="grid grid-cols-4 gap-4" dir="ltr">
                    {seats.map((seat) => {
                      const isSelected = selectedSeats.includes(seat.id);
                      const isReserved = seat.is_reserved;

                      return (
                        <div
                          key={seat.id}
                          onClick={() => toggleSeat(seat.id, isReserved)}
                          className={`
                            relative h-12 rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-200 cursor-pointer border-b-4 select-none
                            ${isReserved 
                              ? "bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed" 
                              : isSelected 
                                ? "bg-blue-600 text-white border-blue-800 shadow-lg transform -translate-y-1" 
                                : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50"
                            }
                          `}
                        >
                          {seat.seat_number}
                          {/* آیکون چک برای صندلی انتخاب شده */}
                          {isSelected && (
                            <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-0.5 border-2 border-white">
                              <CheckCircle2 className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="border-t border-dashed w-full mt-12 relative">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-xs text-gray-400">عقب اتوبوس</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ستون چپ: فاکتور و پرداخت (4 واحد) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <Card className="shadow-lg border-blue-100 ring-1 ring-blue-50">
                <CardHeader className="bg-blue-50/50 pb-4 border-b border-blue-100">
                  <CardTitle className="text-lg text-blue-900">صورتحساب</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  
                  {/* لیست صندلی‌های انتخابی */}
                  {selectedSeats.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {seats
                        .filter(s => selectedSeats.includes(s.id))
                        .map(s => (
                          <Badge key={s.id} className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 px-3 py-1 text-sm">
                            صندلی {s.seat_number}
                          </Badge>
                        ))}
                    </div>
                  ) : (
                    <div className="text-center py-4 text-gray-400 text-sm border-2 border-dashed rounded-lg">
                      هنوز صندلی انتخاب نکرده‌اید
                    </div>
                  )}

                  <Separator />

                  {/* محاسبات قیمت */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>تعداد صندلی</span>
                      <span>{selectedSeats.length} عدد</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>قیمت واحد</span>
                      <span>{tripDetails ? formatPrice(tripDetails.current_price) : 0} تومان</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center mt-4">
                    <span className="font-bold text-gray-800">مبلغ نهایی</span>
                    <div className="text-left">
                      <span className="block font-bold text-xl text-blue-600">
                        {tripDetails ? formatPrice(selectedSeats.length * Number(tripDetails.current_price)) : 0}
                      </span>
                      <span className="text-xs text-gray-400">تومان</span>
                    </div>
                  </div>

                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button 
                    className="w-full h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-200" 
                    onClick={handleReservation}
                    disabled={reserving || selectedSeats.length === 0}
                  >
                    {reserving ? (
                      <>
                        <Loader2 className="w-5 h-5 ml-2 animate-spin" />
                        در حال پردازش...
                      </>
                    ) : (
                      "تایید و پرداخت آنلاین"
                    )}
                  </Button>
                </CardFooter>
              </Card>

              <div className="mt-4 flex items-start gap-2 text-xs text-gray-400 px-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <p>با کلیک بر روی دکمه پرداخت، قوانین و مقررات خرید بلیط را می‌پذیرم.</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}