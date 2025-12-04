'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { LogOut, Home, User, Calendar, MapPin, CreditCard, Pencil, Ticket } from 'lucide-react';

type ProfileType = {
  first_name: string;
  last_name: string;
  national_id: string;
  birth_date: string;
  address: string;
  profile_picture: string;
};

const API_BASE = 'http://localhost:9000';

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
        const res = await axios.get(`${API_BASE}/accounts/api/v1/auth/profile/`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
      } catch (err: any) {
        if (err.response?.status === 401) {
          setError('دسترسی غیرمجاز! لطفاً دوباره وارد شوید.');
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          router.push('/login');
        } else {
          setError('مشکلی در دریافت اطلاعات رخ داد.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

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
          <p className="text-slate-600 font-medium">در حال بارگذاری...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <Card className="w-full max-w-md mx-4 bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl">
          <CardContent className="pt-8 pb-8">
            <div className="text-center text-rose-600">
              <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-rose-600" />
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
      <div className="bg-white/75 backdrop-blur-md border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">داشبورد</h1>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => router.push('/dashboard/tickets')}
                className="rounded-2xl bg-blue-600 text-white hover:bg-blue-700"
              >
                <Ticket className="w-4 h-4 ml-2" />
                بلیط‌های من
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push('/')}
                className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-2xl"
              >
                <Home className="w-4 h-4 ml-2" />
                صفحه اصلی
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-2xl"
              >
                <LogOut className="w-4 h-4 ml-2" />
                خروج
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <Card className="lg:col-span-1 bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-lg rounded-3xl">
            <CardContent className="pt-8 pb-7">
              <div className="flex flex-col items-center">
                <Avatar className="w-28 h-28 mb-4 ring-4 ring-blue-100">
                  <AvatarImage src={profile?.profile_picture} alt={`${profile?.first_name} ${profile?.last_name}`} />
                  <AvatarFallback className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl font-bold">
                    {profile?.first_name?.charAt(0)}
                    {profile?.last_name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
                  {profile?.first_name} {profile?.last_name}
                </h2>

                <Badge className="bg-blue-100 text-blue-700 border-blue-200 rounded-xl px-3 py-1">
                  کاربر تایید شده
                </Badge>

                <div className="w-full mt-6 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">وضعیت حساب</span>
                    <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 rounded-xl px-3 py-1">
                      فعال
                    </Badge>
                  </div>

                  <Button
                    onClick={() => router.push('/dashboard/tickets')}
                    className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white h-11 text-base"
                  >
                    <Ticket className="w-5 h-5 ml-2" />
                    رفتن به بلیط‌های من
                  </Button>

                  <Button
                    variant="ghost"
                    onClick={() => router.push('/dashboard/edit')}
                    className="w-full rounded-2xl h-11 text-base text-slate-700 hover:text-blue-700 hover:bg-blue-50"
                  >
                    <Pencil className="w-5 h-5 ml-2" />
                    ویرایش پروفایل
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile Details */}
          <Card className="lg:col-span-2 bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-lg rounded-3xl">
            <CardHeader className="pb-2">
              <h3 className="text-lg font-semibold text-slate-900 flex items-center">
                <User className="w-5 h-5 ml-2 text-blue-600" />
                اطلاعات شخصی
              </h3>
            </CardHeader>

            <CardContent className="space-y-7 pt-4 pb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-5">
                  <div>
                    <label className="text-sm font-medium text-slate-500 mb-2 block">نام</label>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200/60">
                      <User className="w-5 h-5 text-slate-400" />
                      <span className="text-slate-900 font-semibold text-base">{profile?.first_name}</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-500 mb-2 block">کد ملی</label>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200/60">
                      <CreditCard className="w-5 h-5 text-slate-400" />
                      <span className="text-slate-900 font-semibold font-mono text-base">{profile?.national_id}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="text-sm font-medium text-slate-500 mb-2 block">نام خانوادگی</label>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200/60">
                      <User className="w-5 h-5 text-slate-400" />
                      <span className="text-slate-900 font-semibold text-base">{profile?.last_name}</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-500 mb-2 block">تاریخ تولد</label>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200/60">
                      <Calendar className="w-5 h-5 text-slate-400" />
                      <span className="text-slate-900 font-semibold text-base">{profile?.birth_date}</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <label className="text-sm font-medium text-slate-500 mb-2 block">آدرس</label>
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200/60">
                  <MapPin className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-900 font-semibold leading-relaxed text-base">{profile?.address}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
