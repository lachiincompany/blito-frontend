'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { LogOut, Home, User, Calendar, MapPin, CreditCard } from 'lucide-react';

type ProfileType = {
  first_name: string;
  last_name: string;
  national_id: string;
  birth_date: string;
  address: string;
  profile_picture: string;
};

export default function DashboardPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      router.push('/login');
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await axios.get('http://localhost:12000/accounts/api/v1/auth/profile/', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
      } catch (err: any) {
        if (err.response?.status === 401) {
          setError('دسترسی غیرمجاز! لطفاً دوباره وارد شوید.');
          localStorage.removeItem('accessToken');
          router.push('/login');
        } else {
          setError('مشکلی در دریافت اطلاعات رخ داد.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    router.push('/login');
  };

  const handleHome = () => {
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="text-slate-600 font-medium">در حال بارگذاری...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6">
            <div className="text-center text-red-500">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-red-500" />
              </div>
              <p className="font-medium">{error}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  داشبورد کاربری
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 space-x-reverse">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleHome}
                className="text-slate-600 hover:text-blue-600 hover:bg-blue-50"
              >
                <Home className="w-4 h-4 ml-2" />
                صفحه اصلی
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
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <Avatar className="w-24 h-24 mb-4 ring-4 ring-blue-100">
                    <AvatarImage 
                      src={profile?.profile_picture} 
                      alt={`${profile?.first_name} ${profile?.last_name}`}
                    />
                    <AvatarFallback className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-bold">
                      {profile?.first_name?.charAt(0)}{profile?.last_name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h2 className="text-xl font-bold text-slate-800 mb-1">
                    {profile?.first_name} {profile?.last_name}
                  </h2>
                  
                  <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                    کاربر تایید شده
                  </Badge>

                  <div className="w-full space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">وضعیت حساب</span>
                      <Badge className="bg-green-100 text-green-700 border-green-200">فعال</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <h3 className="text-lg font-semibold text-slate-800 flex items-center">
                  <User className="w-5 h-5 ml-2 text-blue-600" />
                  اطلاعات شخصی
                </h3>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="group">
                      <label className="text-sm font-medium text-slate-500 mb-1 block">نام</label>
                      <div className="flex items-center space-x-3 space-x-reverse p-3 bg-slate-50 rounded-lg group-hover:bg-slate-100 transition-colors">
                        <User className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-800 font-medium">{profile?.first_name}</span>
                      </div>
                    </div>

                    <div className="group">
                      <label className="text-sm font-medium text-slate-500 mb-1 block">کد ملی</label>
                      <div className="flex items-center space-x-3 space-x-reverse p-3 bg-slate-50 rounded-lg group-hover:bg-slate-100 transition-colors">
                        <CreditCard className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-800 font-medium font-mono">{profile?.national_id}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="group">
                      <label className="text-sm font-medium text-slate-500 mb-1 block">نام خانوادگی</label>
                      <div className="flex items-center space-x-3 space-x-reverse p-3 bg-slate-50 rounded-lg group-hover:bg-slate-100 transition-colors">
                        <User className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-800 font-medium">{profile?.last_name}</span>
                      </div>
                    </div>

                    <div className="group">
                      <label className="text-sm font-medium text-slate-500 mb-1 block">تاریخ تولد</label>
                      <div className="flex items-center space-x-3 space-x-reverse p-3 bg-slate-50 rounded-lg group-hover:bg-slate-100 transition-colors">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-800 font-medium">{profile?.birth_date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="group">
                  <label className="text-sm font-medium text-slate-500 mb-1 block">آدرس</label>
                  <div className="flex items-start space-x-3 space-x-reverse p-3 bg-slate-50 rounded-lg group-hover:bg-slate-100 transition-colors">
                    <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-800 font-medium leading-relaxed">{profile?.address}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}