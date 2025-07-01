'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  MapPin, 
  ArrowRightLeft, 
  Bus, 
  Clock, 
  DollarSign, 
  Route,
  User,
  LogOut,
  Search,
  Star,
  Calendar
} from 'lucide-react';

type City = {
  id: number;
  name: string;
};

type TripType = {
  id: number;
  route: number;
  bus: number;
  departure_datetime: string;
  arrival_datetime: string;
  current_price: string;
  status: 'SCHEDULED' | 'DEPARTED' | 'ARRIVED' | 'CANCELLED';
  driver_name: number;
  driver_phone: string;
  created_at: string;
  // These will be populated from the API based on relations
  route_info?: {
    origin: string;
    destination: string;
    company: string;
    bus_type: 'standard' | 'luxury' | 'vip';
    distance_km: number;
  };
};

type TripResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: TripType[];
};

export default function HomePage() {
  const router = useRouter();

  const [cities, setCities] = useState<City[]>([]);
  const [trips, setTrips] = useState<TripType[]>([]);
  const [fromCity, setFromCity] = useState<string>('');
  const [toCity, setToCity] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token);
    
    // Set default date to today
    const today = new Date().toISOString().split('T')[0];
    setSelectedDate(today);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res = await fetch('http://localhost:12000/city/api/v1/cities/');
        const data = await res.json();
        setCities(data.results);
      } catch (error) {
        console.error('خطا در گرفتن شهرها:', error);
      }
    };
    fetchCities();
  }, []);

  const searchTrips = async () => {
    if (!fromCity || !toCity) return;
    
    setLoading(true);
    try {
      const url = new URL('http://localhost:12000/trips/api/v1/trips/');
      url.searchParams.append('route__origin', fromCity);
      url.searchParams.append('route__destination', toCity);
      if (selectedDate) {
        url.searchParams.append('departure_datetime__date', selectedDate);
      }
      url.searchParams.append('ordering', 'departure_datetime');

      const res = await fetch(url.toString());
      const data: TripResponse = await res.json();
      
      // Fetch additional route details for each trip
      const tripsWithRouteInfo = await Promise.all(
        data.results.map(async (trip) => {
          try {
            const routeRes = await fetch(`http://localhost:12000/routes/api/v1/routes/${trip.route}/`);
            const routeData = await routeRes.json();
            return {
              ...trip,
              route_info: {
                origin: routeData.origin,
                destination: routeData.destination,
                company: routeData.company,
                bus_type: routeData.bus_type,
                distance_km: routeData.distance_km,
              }
            };
          } catch (error) {
            console.error('خطا در گرفتن اطلاعات مسیر:', error);
            return trip;
          }
        })
      );
      
      setTrips(tripsWithRouteInfo);
      setSearched(true);
    } catch (error) {
      console.error('خطا در جستجوی سفرها:', error);
    } finally {
      setLoading(false);
    }
  };

  const swapCities = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  const getBusTypeLabel = (type: string) => {
    switch (type) {
      case 'standard': return 'معمولی';
      case 'luxury': return 'لوکس';
      case 'vip': return 'وی آی پی';
      default: return type;
    }
  };

  const getBusTypeColor = (type: string) => {
    switch (type) {
      case 'standard': return 'bg-gray-100 text-gray-700 border-gray-200';
      case 'luxury': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'vip': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'SCHEDULED': return 'برنامه‌ریزی شده';
      case 'DEPARTED': return 'حرکت کرده';
      case 'ARRIVED': return 'رسیده';
      case 'CANCELLED': return 'لغو شده';
      default: return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'SCHEDULED': return 'bg-green-100 text-green-700 border-green-200';
      case 'DEPARTED': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'ARRIVED': return 'bg-gray-100 text-gray-700 border-gray-200';
      case 'CANCELLED': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const formatDateTime = (dateTimeString: string) => {
    const date = new Date(dateTimeString);
    return {
      date: date.toLocaleDateString('fa-IR'),
      time: date.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' })
    };
  };

  const calculateDuration = (departure: string, arrival: string) => {
    const dep = new Date(departure);
    const arr = new Date(arrival);
    const diffMs = arr.getTime() - dep.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${diffHours}:${diffMins.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Bus className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  بلیتو
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 space-x-reverse">
              {!isLoggedIn ? (
                  <div className="flex gap-2">
                    <Button 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      onClick={() => router.push('/login')}
                    >
                      <User className="w-4 h-4 ml-2" />
                      ورود
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50"
                      onClick={() => router.push('/register')}
                    >
                      ثبت‌نام
                    </Button>
                  </div>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => router.push('/dashboard')}
                    className="text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                  >
                    <User className="w-4 h-4 ml-2" />
                    داشبورد
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLogout}
                    className="text-slate-600 hover:text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="w-4 h-4 ml-2" />
                    خروج
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            سفر آسان با 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> بلیتو</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            بهترین قیمت‌ها و راحت‌ترین روش برای رزرو بلیت اتوبوس
          </p>
        </div>

        {/* Search Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl mb-8">
          <CardHeader>
            <h3 className="text-xl font-semibold text-slate-800 flex items-center">
              <Search className="w-5 h-5 ml-2 text-blue-600" />
              جستجوی سفر
            </h3>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
              {/* Origin City */}
              <div className="md:col-span-2">
                <label className="block mb-2 font-medium text-slate-700 flex items-center">
                  <MapPin className="w-4 h-4 ml-1 text-green-600" />
                  مبدا
                </label>
                <Select value={fromCity} onValueChange={setFromCity}>
                  <SelectTrigger className="h-12 bg-white border-2 hover:border-blue-300 focus:border-blue-500">
                    <SelectValue placeholder="انتخاب شهر مبدا" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city.id} value={city.id.toString()}>
                        {city.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={swapCities}
                  className="h-12 w-12 rounded-full border-2 hover:bg-blue-50 hover:border-blue-300"
                >
                  <ArrowRightLeft className="w-5 h-5 text-blue-600" />
                </Button>
              </div>

              {/* Destination City */}
              <div className="md:col-span-2">
                <label className="block mb-2 font-medium text-slate-700 flex items-center">
                  <MapPin className="w-4 h-4 ml-1 text-red-600" />
                  مقصد
                </label>
                <Select value={toCity} onValueChange={setToCity}>
                  <SelectTrigger className="h-12 bg-white border-2 hover:border-blue-300 focus:border-blue-500">
                    <SelectValue placeholder="انتخاب شهر مقصد" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city.id} value={city.id.toString()}>
                        {city.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date */}
              <div>
                <label className="block mb-2 font-medium text-slate-700 flex items-center">
                  <Calendar className="w-4 h-4 ml-1 text-blue-600" />
                  تاریخ سفر
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="h-12 w-full px-3 bg-white border-2 rounded-md hover:border-blue-300 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={searchTrips}
                disabled={!fromCity || !toCity || loading}
                className="h-12 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium"
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white ml-2"></div>
                    در حال جستجو...
                  </div>
                ) : (
                  <>
                    <Search className="w-5 h-5 ml-2" />
                    جستجو
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Trips Results */}
        {searched && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center">
                <Route className="w-6 h-6 ml-2 text-blue-600" />
                سفرهای موجود
              </h3>
              {trips.length > 0 && (
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                  {trips.length} سفر یافت شد
                </Badge>
              )}
            </div>

            {trips.length === 0 ? (
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="py-12 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bus className="w-8 h-8 text-gray-400" />
                  </div>
                  <h4 className="text-lg font-medium text-slate-600 mb-2">سفری یافت نشد</h4>
                  <p className="text-slate-500">برای این مسیر و تاریخ در حال حاضر سفری موجود نیست</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {trips.filter(trip => trip.status === 'SCHEDULED').map((trip) => {
                  const departureDateTime = formatDateTime(trip.departure_datetime);
                  const arrivalDateTime = formatDateTime(trip.arrival_datetime);
                  const duration = calculateDuration(trip.departure_datetime, trip.arrival_datetime);
                  
                  return (
                    <Card key={trip.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                          <div className="flex-1 space-y-3">
                            <div className="flex items-center space-x-4 space-x-reverse">
                              <div className="flex items-center space-x-2 space-x-reverse">
                                <MapPin className="w-4 h-4 text-green-600" />
                                <span className="font-medium text-slate-800">
                                  {trip.route_info?.origin || 'نامشخص'}
                                </span>
                              </div>
                              <ArrowRightLeft className="w-4 h-4 text-slate-400" />
                              <div className="flex items-center space-x-2 space-x-reverse">
                                <MapPin className="w-4 h-4 text-red-600" />
                                <span className="font-medium text-slate-800">
                                  {trip.route_info?.destination || 'نامشخص'}
                                </span>
                              </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                              <div className="flex items-center space-x-1 space-x-reverse">
                                <Bus className="w-4 h-4" />
                                <span>{trip.route_info?.company || 'نامشخص'}</span>
                              </div>
                              <div className="flex items-center space-x-1 space-x-reverse">
                                <Clock className="w-4 h-4" />
                                <span>{duration} ساعت</span>
                              </div>
                              {trip.route_info?.distance_km && (
                                <div className="flex items-center space-x-1 space-x-reverse">
                                  <Route className="w-4 h-4" />
                                  <span>{trip.route_info.distance_km} کیلومتر</span>
                                </div>
                              )}
                            </div>

                            <div className="flex items-center space-x-4 space-x-reverse text-sm">
                              <div className="bg-green-50 px-3 py-1 rounded-lg">
                                <span className="text-green-700 font-medium">حرکت: </span>
                                <span className="text-slate-700">{departureDateTime.time}</span>
                              </div>
                              <div className="bg-blue-50 px-3 py-1 rounded-lg">
                                <span className="text-blue-700 font-medium">رسیدن: </span>
                                <span className="text-slate-700">{arrivalDateTime.time}</span>
                              </div>
                            </div>
                          </div>

                          <Separator orientation="vertical" className="hidden lg:block h-20" />

                          <div className="flex items-center justify-between lg:justify-end space-x-4 space-x-reverse lg:min-w-[300px]">
                            <div className="flex gap-2">
                              {trip.route_info?.bus_type && (
                                <Badge className={getBusTypeColor(trip.route_info.bus_type)}>
                                  {getBusTypeLabel(trip.route_info.bus_type)}
                                </Badge>
                              )}
                              <Badge className={getStatusColor(trip.status)}>
                                {getStatusLabel(trip.status)}
                              </Badge>
                            </div>
                            
                            <div className="text-left">
                              <div className="flex items-center space-x-1 space-x-reverse text-2xl font-bold text-slate-800">
                                <DollarSign className="w-5 h-5" />
                                <span>{parseFloat(trip.current_price).toLocaleString('fa-IR')}</span>
                                <span className="text-sm font-normal text-slate-500">تومان</span>
                              </div>
                            </div>

                            <Button 
                              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                              onClick={() => router.push(`/booking/${trip.id}`)}
                            >
                              <Calendar className="w-4 h-4 ml-2" />
                              رزرو
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Features Section */}
        {!searched && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">جستجوی آسان</h3>
                <p className="text-slate-600">با چند کلیک ساده، بهترین سفرها را پیدا کنید</p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">بهترین قیمت</h3>
                <p className="text-slate-600">مقایسه قیمت‌ها و انتخاب مناسب‌ترین گزینه</p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">کیفیت برتر</h3>
                <p className="text-slate-600">همکاری با معتبرترین شرکت‌های حمل و نقل</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}