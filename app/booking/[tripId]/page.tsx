'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Bus,
  CheckCircle,
  AlertCircle,
  Loader,
  ArrowLeft,
  CreditCard,
  Users,
  Phone,
  User,
  Settings
} from 'lucide-react';

interface Seat {
  id: number;
  seat_number: number;
  is_reserved: boolean;
  reserved_by?: {
    first_name: string;
    last_name: string;
  };
  reserved_at?: string;
}

interface TripInfo {
  id: number;
  total_seats: number;
  reserved_seats: number;
  available_seats: number;
}

interface TripDetails {
  id: number;
  route: {
    id: number;
    origin: string;
    destination: string;
    company: string;
    bus_type: "standard" | "vip" | "luxury";
    base_price: string;
    distance_km: number;
    estimated_duration: string;
    is_active: boolean;
    created_at: string;
  };
  fleet: {
    id: number;
    company_name: string;
    bus_number: string;
    license_plate: string;
    model: string;
    brand: string;
    year: number;
    capacity: number;
    bus_type: "standard" | "vip" | "luxury";
    facilities: string;
    image: string;
    interior_image: string;
  };
  departure_datetime: string;
  arrival_datetime: string;
  current_price: string;
  status: "SCHEDULED" | "BOARDING" | "DEPARTED" | "ARRIVED" | "CANCELLED";
  driver_name: number;
  driver_phone: string;
  created_at: string;
}

export default function BookingPage() {
  const params = useParams();
  const router = useRouter();
  const tripId = params.tripId as string;
  
  const [seats, setSeats] = useState<Seat[]>([]);
  const [tripInfo, setTripInfo] = useState<TripInfo | null>(null);
  const [tripDetails, setTripDetails] = useState<TripDetails | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [reserving, setReserving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // بارگذاری اطلاعات صندلی‌ها
  const fetchSeats = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await fetch(`http://localhost:12000/seat/api/v1/api/seats/trip/${tripId}/`, {
        headers: {
          'Authorization': token ? `Bearer ${token}` : '',
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        setTripInfo(data.trip_info);
        setSeats(data.seats);
        setError(null);
      } else if (response.status === 401) {
        setError('لطفاً وارد حساب کاربری خود شوید');
      } else {
        throw new Error('خطا در بارگذاری اطلاعات');
      }
    } catch (error) {
      setError('خطا در ارتباط با سرور');
    }
  };

  // بارگذاری جزئیات سفر
  const fetchTripDetails = async () => {
    try {
      const response = await fetch(`http://localhost:12000/trips/api/v1/trips/${tripId}/`);
      if (response.ok) {
        const data = await response.json();
        setTripDetails(data);
      }
    } catch (error) {
      console.error('Error fetching trip details:', error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([fetchSeats(), fetchTripDetails()]);
      setLoading(false);
    };

    loadData();
  }, [tripId]);

  // انتخاب صندلی
  const toggleSeatSelection = (seatId: number, isReserved: boolean) => {
    if (isReserved) return;

    setSelectedSeats(prev => {
      if (prev.includes(seatId)) {
        return prev.filter(id => id !== seatId);
      } else {
        if (prev.length >= 4) { // محدودیت انتخاب حداکثر 4 صندلی
          setError('حداکثر 4 صندلی می‌توانید انتخاب کنید');
          setTimeout(() => setError(null), 3000);
          return prev;
        }
        return [...prev, seatId];
      }
    });
  };

  // رزرو صندلی‌ها
  const handleReservation = async () => {
    if (selectedSeats.length === 0) {
      setError('لطفاً حداقل یک صندلی انتخاب کنید');
      setTimeout(() => setError(null), 3000);
      return;
    }

    setReserving(true);
    setError(null);
    
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        setError('لطفاً ابتدا وارد حساب کاربری خود شوید');
        return;
      }

      const response = await fetch('/seat/api/v1/api/seats/reserve/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          seat_ids: selectedSeats
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(data.message || 'صندلی‌ها با موفقیت رزرو شدند');
        
        // بروزرسانی لیست صندلی‌ها
        await fetchSeats();
        setSelectedSeats([]);
        
        // حذف پیام موفقیت بعد از 5 ثانیه
        setTimeout(() => setSuccessMessage(null), 5000);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'خطا در رزرو صندلی');
      }
    } catch (error) {
      setError('خطا در ارتباط با سرور');
    } finally {
      setReserving(false);
    }
  };

  // محاسبه قیمت کل
  const currentPrice = parseFloat(tripDetails?.current_price || '0');
  const totalPrice = selectedSeats.length * currentPrice;

  // فرمت تاریخ و زمان
  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    const timeOptions: Intl.DateTimeFormatOptions = { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false
    };
    const dateOptions: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    
    return {
      time: date.toLocaleTimeString('fa-IR', timeOptions),
      date: date.toLocaleDateString('fa-IR', dateOptions)
    };
  };

  // ترجمه وضعیت سفر
  const getStatusText = (status: string) => {
    const statusMap: { [key: string]: string } = {
      'SCHEDULED': 'برنامه‌ریزی شده',
      'BOARDING': 'در حال سوار شدن',
      'DEPARTED': 'حرکت کرده',
      'ARRIVED': 'رسیده',
      'CANCELLED': 'لغو شده'
    };
    return statusMap[status] || status;
  };

  // ترجمه نوع اتوبوس
  const getBusTypeText = (busType: string) => {
    const busTypeMap: { [key: string]: string } = {
      'standard': 'معمولی',
      'vip': 'VIP',
      'luxury': 'لوکس'
    };
    return busTypeMap[busType] || busType;
  };

  // رندر صندلی
  const renderSeat = (seat: Seat) => {
    const isSelected = selectedSeats.includes(seat.id);
    const isReserved = seat.is_reserved;

    let seatClass = "w-12 h-12 rounded-lg border-2 cursor-pointer transition-all duration-300 flex items-center justify-center text-sm font-medium relative ";

    if (isReserved) {
      seatClass += "bg-red-100 border-red-300 text-red-700 cursor-not-allowed";
    } else if (isSelected) {
      seatClass += "bg-blue-500 border-blue-600 text-white shadow-lg transform scale-105 ring-2 ring-blue-300";
    } else {
      seatClass += "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 hover:shadow-md";
    }

    return (
      <div
        key={seat.id}
        className={seatClass}
        onClick={() => toggleSeatSelection(seat.id, isReserved)}
        title={isReserved ? `رزرو شده توسط ${seat.reserved_by?.first_name} ${seat.reserved_by?.last_name}` : `صندلی ${seat.seat_number}`}
      >
        {seat.seat_number}
        {isSelected && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
            <CheckCircle className="w-3 h-3 text-white" />
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <Loader className="w-8 h-8 animate-spin text-blue-500" />
          <p className="text-gray-600">در حال بارگذاری...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="outline" 
            onClick={() => router.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            بازگشت
          </Button>
          <h1 className="text-2xl font-bold text-gray-800">انتخاب صندلی</h1>
        </div>

        {/* نمایش پیام‌ها */}
        {error && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-500" />
            <AlertDescription className="text-red-700">
              {error}
            </AlertDescription>
          </Alert>
        )}

        {successMessage && (
          <Alert className="mb-6 border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <AlertDescription className="text-green-700">
              {successMessage}
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* اطلاعات سفر و نقشه صندلی‌ها */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* اطلاعات سفر */}
            {tripDetails && (
              <Card className="shadow-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Bus className="w-5 h-5 text-blue-600" />
                      جزئیات سفر
                    </CardTitle>
                    <Badge 
                      variant={tripDetails.status === 'SCHEDULED' ? 'default' : 
                              tripDetails.status === 'CANCELLED' ? 'destructive' : 'secondary'}
                    >
                      {getStatusText(tripDetails.status)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* مسیر سفر */}
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="font-medium text-blue-800">{tripDetails.route.origin}</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600">
                      <ArrowLeft className="w-4 h-4" />
                      <span className="text-xs text-gray-600">{tripDetails.route.distance_km} کیلومتر</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="font-medium text-blue-800">{tripDetails.route.destination}</span>
                    </div>
                  </div>
                  
                  {/* زمان‌های سفر */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-2 text-green-600 mb-2">
                        <Clock className="w-4 h-4" />
                        <span className="font-medium">زمان حرکت</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <div className="font-semibold text-green-700 text-lg">
                          {formatDateTime(tripDetails.departure_datetime).time}
                        </div>
                        <div className="text-xs">
                          {formatDateTime(tripDetails.departure_datetime).date}
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <div className="flex items-center gap-2 text-orange-600 mb-2">
                        <Clock className="w-4 h-4" />
                        <span className="font-medium">زمان رسیدن</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <div className="font-semibold text-orange-700 text-lg">
                          {formatDateTime(tripDetails.arrival_datetime).time}
                        </div>
                        <div className="text-xs">
                          {formatDateTime(tripDetails.arrival_datetime).date}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* مدت زمان سفر */}
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-purple-700 font-medium">
                      مدت زمان سفر: {tripDetails.route.estimated_duration}
                    </span>
                  </div>
                  
                  {/* اطلاعات اتوبوس */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex flex-col gap-1 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Bus className="w-4 h-4" />
                        <span>پلاک</span>
                      </div>
                      <span className="font-medium">{tripDetails.fleet.license_plate}</span>
                    </div>
                    <div className="flex flex-col gap-1 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Settings className="w-4 h-4" />
                        <span>نوع</span>
                      </div>
                      <span className="font-medium">{getBusTypeText(tripDetails.fleet.bus_type)}</span>
                    </div>
                    <div className="flex flex-col gap-1 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>ظرفیت</span>
                      </div>
                      <span className="font-medium">{tripDetails.fleet.capacity} نفر</span>
                    </div>
                    <div className="flex flex-col gap-1 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>راننده</span>
                      </div>
                      <span className="font-medium text-xs">{tripDetails.driver_phone}</span>
                    </div>
                  </div>

                  {/* اطلاعات شرکت */}
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-indigo-600">شرکت حمل و نقل</span>
                        <div className="font-semibold text-indigo-800">{tripDetails.route.company}</div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-indigo-600">مدل اتوبوس</span>
                        <div className="font-semibold text-indigo-800">
                          {tripDetails.fleet.brand} {tripDetails.fleet.model} ({tripDetails.fleet.year})
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* قیمت */}
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <span className="text-lg font-semibold text-green-700">
                      قیمت هر صندلی: {currentPrice.toLocaleString()} تومان
                    </span>
                  </div>
                {/* امکانات */}
                {tripDetails.fleet.facilities?.length > 0 && (
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <div className="text-sm text-yellow-600 mb-3 font-semibold">امکانات</div>
                    <div className="flex flex-wrap gap-2">
                      {tripDetails.fleet.facilities.map((facility, index) => {
                        const icons = {
                          'وای‌فای رایگان': '📶',
                          'کولر': '❄️',
                          'تلویزیون': '📺',
                          'شارژر موبایل': '🔌',
                          'پتو': '🛏️',
                          'سرویس غذا': '🍽️',
                        };
                        return (
                          <span
                            key={index}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full border border-yellow-200"
                          >
                            <span>{icons[facility] || '✨'}</span>
                            {facility}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                </CardContent>
              </Card>
            )}

            {/* نقشه صندلی‌ها */}
            <Card className="shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between">
                  <span className="text-lg">انتخاب صندلی</span>
                  {tripInfo && (
                    <div className="flex items-center gap-3 text-sm">
                      <Badge variant="outline" className="text-green-600 border-green-300">
                        {tripInfo.available_seats} در دسترس
                      </Badge>
                      <Badge variant="secondary" className="text-red-600">
                        {tripInfo.reserved_seats} رزرو شده
                      </Badge>
                    </div>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* راهنمای رنگ‌ها */}
                <div className="flex items-center justify-center gap-6 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-100 border-2 border-green-300 rounded-lg"></div>
                    <span className="text-sm text-gray-700">در دسترس</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-500 border-2 border-blue-600 rounded-lg"></div>
                    <span className="text-sm text-gray-700">انتخاب شده</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-red-100 border-2 border-red-300 rounded-lg"></div>
                    <span className="text-sm text-gray-700">رزرو شده</span>
                  </div>
                </div>

                {/* صندلی‌ها */}
                <div className="relative">
                  <div className="text-center mb-6 p-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg">
                    <span className="text-sm font-medium text-gray-700 flex items-center justify-center gap-2">
                      <Bus className="w-4 h-4" />
                      جلوی اتوبوس
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
                    {seats.map((seat) => renderSeat(seat))}
                  </div>
                  
                  <div className="text-center mt-6 p-3 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">عقب اتوبوس</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* خلاصه رزرو */}
          <div>
            <Card className="sticky top-6 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  خلاصه رزرو
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedSeats.length > 0 ? (
                  <>
                    <div>
                      <h4 className="font-medium mb-3 text-gray-700">صندلی‌های انتخاب شده:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedSeats.map(seatId => {
                          const seat = seats.find(s => s.id === seatId);
                          return (
                            <Badge key={seatId} variant="default" className="justify-center py-1">
                              صندلی {seat?.seat_number}
                            </Badge>
                          );
                        })}
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">تعداد صندلی:</span>
                        <span className="font-medium">{selectedSeats.length}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">قیمت هر صندلی:</span>
                        <span className="font-medium">{currentPrice.toLocaleString()} تومان</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-semibold text-lg">
                        <span>مجموع:</span>
                        <span className="text-blue-600">{totalPrice.toLocaleString()} تومان</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 h-12"
                      onClick={handleReservation}
                      disabled={reserving}
                    >
                      {reserving ? (
                        <div className="flex items-center gap-2">
                          <Loader className="w-4 h-4 animate-spin" />
                          در حال رزرو...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4" />
                          تایید و پرداخت
                        </div>
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      با کلیک بر روی "تایید و پرداخت" قوانین و مقررات را می‌پذیرید
                    </p>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">صندلی انتخاب نشده</p>
                    <p className="text-sm text-gray-500">لطفاً صندلی‌های مورد نظر را انتخاب کنید</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}