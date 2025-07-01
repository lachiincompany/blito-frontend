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

type RouteType = {
  id: number;
  origin: string;
  destination: string;
  company: string;
  bus_type: 'standard' | 'luxury' | 'vip';
  base_price: string;
  distance_km: number;
  estimated_duration: string;
  is_active: boolean;
  created_at: string;
};

type RouteResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: RouteType[];
};

export default function HomePage() {
  const router = useRouter();

  const [cities, setCities] = useState<City[]>([]);
  const [routes, setRoutes] = useState<RouteType[]>([]);
  const [fromCity, setFromCity] = useState<string>('');
  const [toCity, setToCity] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token);
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

  const searchRoutes = async () => {
    if (!fromCity || !toCity) return;
    
    setLoading(true);
    try {
      const url = new URL('http://localhost:12000/routes/api/v1/routes/');
      url.searchParams.append('origin', fromCity);
      url.searchParams.append('destination', toCity);
      url.searchParams.append('is_active', 'true');

      const res = await fetch(url.toString());
      const data: RouteResponse = await res.json();
      setRoutes(data.results);
      setSearched(true);
    } catch (error) {
      console.error('خطا در جستجوی مسیرها:', error);
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
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  onClick={() => router.push('/login')}
                >
                  <User className="w-4 h-4 ml-2" />
                  ورود
                </Button>
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
              جستجوی مسیر
            </h3>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
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
            </div>

            <div className="flex justify-center">
              <Button
                onClick={searchRoutes}
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

        {/* Routes Results */}
        {searched && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center">
                <Route className="w-6 h-6 ml-2 text-blue-600" />
                مسیرهای موجود
              </h3>
              {routes.length > 0 && (
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                  {routes.length} مسیر یافت شد
                </Badge>
              )}
            </div>

            {routes.length === 0 ? (
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="py-12 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bus className="w-8 h-8 text-gray-400" />
                  </div>
                  <h4 className="text-lg font-medium text-slate-600 mb-2">مسیری یافت نشد</h4>
                  <p className="text-slate-500">برای این مسیر در حال حاضر سرویسی موجود نیست</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {routes.map((route) => (
                  <Card key={route.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center space-x-4 space-x-reverse">
                            <div className="flex items-center space-x-2 space-x-reverse">
                              <MapPin className="w-4 h-4 text-green-600" />
                              <span className="font-medium text-slate-800">{route.origin}</span>
                            </div>
                            <ArrowRightLeft className="w-4 h-4 text-slate-400" />
                            <div className="flex items-center space-x-2 space-x-reverse">
                              <MapPin className="w-4 h-4 text-red-600" />
                              <span className="font-medium text-slate-800">{route.destination}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                            <div className="flex items-center space-x-1 space-x-reverse">
                              <Bus className="w-4 h-4" />
                              <span>{route.company}</span>
                            </div>
                            <div className="flex items-center space-x-1 space-x-reverse">
                              <Clock className="w-4 h-4" />
                              <span>{route.estimated_duration}</span>
                            </div>
                            <div className="flex items-center space-x-1 space-x-reverse">
                              <Route className="w-4 h-4" />
                              <span>{route.distance_km} کیلومتر</span>
                            </div>
                          </div>
                        </div>

                        <Separator orientation="vertical" className="hidden md:block h-16" />

                        <div className="flex items-center justify-between md:justify-end space-x-4 space-x-reverse">
                          <Badge className={getBusTypeColor(route.bus_type)}>
                            {getBusTypeLabel(route.bus_type)}
                          </Badge>
                          
                          <div className="text-left">
                            <div className="flex items-center space-x-1 space-x-reverse text-2xl font-bold text-slate-800">
                              <DollarSign className="w-5 h-5" />
                              <span>{parseFloat(route.base_price).toLocaleString('fa-IR')}</span>
                              <span className="text-sm font-normal text-slate-500">تومان</span>
                            </div>
                          </div>

                          <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
                            <Calendar className="w-4 h-4 ml-2" />
                            رزرو
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
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
                <p className="text-slate-600">با چند کلیک ساده، بهترین مسیرها را پیدا کنید</p>
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