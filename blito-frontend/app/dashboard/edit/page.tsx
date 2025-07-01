'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Pencil,
  Save,
  X,
  Upload,
  User,
  Calendar,
  MapPin,
  CreditCard,
  Camera,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export default function EditProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    national_id: '',
    birth_date: '',
    address: '',
    profile_picture: ''
  });
  const [profilePictureFile, setProfilePictureFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

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
        setFormData(res.data);
      } catch (err) {
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
  }, [router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
    setSuccess('');
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfilePictureFile(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      setError('لطفاً دوباره وارد شوید.');
      return;
    }

    setSaving(true);
    setError('');

    try {
      const data = new FormData();
      data.append('first_name', formData.first_name);
      data.append('last_name', formData.last_name);
      data.append('national_id', formData.national_id);
      data.append('birth_date', formData.birth_date);
      data.append('address', formData.address);
      if (profilePictureFile) {
        data.append('profile_picture', profilePictureFile);
      }

      await axios.put('http://localhost:12000/accounts/api/v1/auth/profile/', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      setSuccess('اطلاعات با موفقیت ذخیره شد!');
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    } catch (err) {
      setError('مشکلی در ذخیره تغییرات رخ داد. لطفاً دوباره تلاش کنید.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-cyan-50 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-violet-600"></div>
            <div className="absolute inset-0 rounded-full border-t-4 border-violet-200 animate-pulse"></div>
          </div>
          <div className="text-center">
            <p className="text-slate-700 font-semibold text-lg">در حال بارگذاری اطلاعات</p>
            <p className="text-slate-500 text-sm mt-1">لطفاً صبر کنید...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error && !profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 flex items-center justify-center">
        <Card className="w-full max-w-md mx-4 border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardContent className="pt-8 pb-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <AlertCircle className="w-10 h-10 text-white" />
              </div>
              <p className="font-semibold text-slate-800 text-lg mb-2">خطا در بارگذاری</p>
              <p className="text-red-600 mb-6">{error}</p>
              <Button
                onClick={() => router.push('/login')}
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white shadow-lg"
              >
                بازگشت به صفحه ورود
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-cyan-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-md border-b border-violet-200/50 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Pencil className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-700 via-blue-700 to-cyan-700 bg-clip-text text-transparent">
                  ویرایش پروفایل
                </h1>
                <p className="text-slate-500 text-sm">اطلاعات شخصی خود را بروزرسانی کنید</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push('/dashboard')}
              className="text-slate-600 hover:text-violet-600 hover:bg-violet-50 transition-all duration-200"
            >
              <X className="w-4 h-4 ml-2" />
              بازگشت
            </Button>
          </div>
        </div>
      </div>

      {/* Success/Error Messages */}
      {(success || error) && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          {success && (
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-4 mb-4 shadow-sm animate-in slide-in-from-top-2 duration-300">
              <div className="flex items-center space-x-3 space-x-reverse">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <p className="text-emerald-800 font-medium">{success}</p>
              </div>
            </div>
          )}
          {error && (
            <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-xl p-4 mb-4 shadow-sm animate-in slide-in-from-top-2 duration-300">
              <div className="flex items-center space-x-3 space-x-reverse">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <p className="text-red-800 font-medium">{error}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-violet-600/5 via-blue-600/5 to-cyan-600/5 border-b border-violet-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">اطلاعات شخصی</h2>
                <p className="text-slate-600 mt-1">فرم زیر را با دقت تکمیل کنید</p>
              </div>
              <Badge variant="secondary" className="bg-violet-100 text-violet-700 hover:bg-violet-200">
                پروفایل شما
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="p-8">
            {/* Profile Picture */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative group">
                <Avatar className="w-32 h-32 border-4 border-white shadow-2xl">
                  <AvatarImage
                    src={previewUrl || profile?.profile_picture}
                    alt="عکس پروفایل"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-2xl bg-gradient-to-r from-violet-500 to-blue-500 text-white">
                    <User className="w-12 h-12" />
                  </AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center cursor-pointer">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <label
                  htmlFor="profile_picture"
                  className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200"
                >
                  <Upload className="w-5 h-5 text-white" />
                </label>
              </div>
              <Input
                id="profile_picture"
                name="profile_picture"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <p className="text-slate-500 text-sm mt-3 text-center">
                برای تغییر عکس پروفایل کلیک کنید
                <br />
                <span className="text-xs">فرمت‌های مجاز: JPG, PNG, GIF</span>
              </p>
            </div>

            <Separator className="my-8 bg-gradient-to-r from-transparent via-violet-200 to-transparent" />

            {/* Form Fields */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="first_name" className="flex items-center space-x-2 space-x-reverse text-slate-700 font-medium">
                    <User className="w-4 h-4 text-violet-600" />
                    <span>نام</span>
                  </Label>
                  <Input
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    className="bg-white/80 border-violet-200 focus:border-violet-500 focus:ring-violet-500/20 transition-all duration-200"
                    placeholder="نام خود را وارد کنید"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="last_name" className="flex items-center space-x-2 space-x-reverse text-slate-700 font-medium">
                    <User className="w-4 h-4 text-blue-600" />
                    <span>نام خانوادگی</span>
                  </Label>
                  <Input
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    className="bg-white/80 border-blue-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200"
                    placeholder="نام خانوادگی خود را وارد کنید"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="national_id" className="flex items-center space-x-2 space-x-reverse text-slate-700 font-medium">
                    <CreditCard className="w-4 h-4 text-green-600" />
                    <span>کد ملی</span>
                  </Label>
                  <Input
                    id="national_id"
                    name="national_id"
                    value={formData.national_id}
                    onChange={handleInputChange}
                    className="bg-white/80 border-green-200 focus:border-green-500 focus:ring-green-500/20 transition-all duration-200"
                    placeholder="کد ملی خود را وارد کنید"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="birth_date" className="flex items-center space-x-2 space-x-reverse text-slate-700 font-medium">
                    <Calendar className="w-4 h-4 text-rose-600" />
                    <span>تاریخ تولد</span>
                  </Label>
                  <Input
                    id="birth_date"
                    name="birth_date"
                    type="date"
                    value={formData.birth_date}
                    onChange={handleInputChange}
                    className="bg-white/80 border-rose-200 focus:border-rose-500 focus:ring-rose-500/20 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="address" className="flex items-center space-x-2 space-x-reverse text-slate-700 font-medium">
                  <MapPin className="w-4 h-4 text-cyan-600" />
                  <span>آدرس</span>
                </Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="bg-white/80 border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500/20 transition-all duration-200"
                  placeholder="آدرس محل سکونت خود را وارد کنید"
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="mt-10 flex justify-end">
              <Button
                onClick={handleSubmit}
                disabled={saving}
                className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white font-semibold shadow-lg disabled:opacity-50"
              >
                {saving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-b-transparent rounded-full animate-spin mr-2"></div>
                    در حال ذخیره...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 ml-2" />
                    ذخیره تغییرات
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
