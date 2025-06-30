'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
    const router = useRouter()

    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    // 👇 اگر کاربر قبلاً لاگین کرده، دیگه نیازی نیست دوباره لاگین کنه
    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        if (token) {
            router.push('/dashboard') // هدایت به داشبورد
        }
    }, [])

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('') // پاک‌سازی ارورهای قبلی

        try {
            // 📡 ارسال درخواست لاگین به API
            const response = await axios.post('http://localhost:12000/accounts/api/v1/auth/login/', {
                phone,
                password,
            })

            const { access, refresh } = response.data

            // ⛔ بررسی اینکه آیا توکن‌ها برگشت داده شدن یا نه
            if (!access || !refresh) {
                throw new Error('توکن‌های دسترسی بازگشتی ناقص‌اند.')
            }

            // ✅ ذخیره توکن‌ها در localStorage
            localStorage.setItem('accessToken', access)
            localStorage.setItem('refreshToken', refresh)

            // 🎯 هدایت به صفحه داشبورد پس از لاگین موفق
            router.push('/dashboard')
        } catch (err: any) {
            // ❌ مدیریت انواع خطاها

            // اگر سرور پاسخ داده ولی وضعیت خطاست:
            if (err.response) {
                if (err.response.status === 400) {
                    setError('شماره تلفن یا رمز عبور اشتباه است.')
                } else if (err.response.status === 401) {
                    setError('احراز هویت انجام نشد. لطفاً دوباره تلاش کنید.')
                } else {
                    // سایر خطاهای سرور
                    setError(`خطا ${err.response.status}: ${err.response.data?.detail || 'مشکلی پیش آمده.'}`)
                }
            }
            // اگر سرور اصلاً پاسخ نداد (مثلاً قطع بودن سرور یا اینترنت):
            else if (err.request) {
                setError('اتصال به سرور برقرار نشد. لطفاً اینترنت خود را بررسی کنید.')
            }
            // خطاهای دیگر مثل خطای کدنویسی یا مشکلات axios
            else {
                setError(`خطا در برنامه: ${err.message}`)
            }
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-full max-w-sm shadow-md border border-gray-200">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-purple-700">
                        لاگین کن عزیز دل 💕
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        {/* فیلد شماره تلفن */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                شماره تلفن
                            </label>
                            <Input
                                type="text"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="شماره تلفن خود را وارد کنید"
                                required
                            />
                        </div>

                        {/* فیلد رمز عبور */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                رمز عبور
                            </label>
                            <Input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="رمز عبور خود را وارد کنید"
                                required
                            />
                        </div>

                        {/* نمایش پیام خطا در صورت نیاز */}
                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                        {/* دکمه ورود */}
                        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                            ورود
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
