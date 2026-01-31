'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function LoginPage() {
  const router = useRouter()

  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (token) router.push('/dashboard')
  }, [router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await axios.post(
        'accounts/api/v1/auth/login/',
        { phone, password },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      )

      const { access, refresh } = response.data
      if (!access || !refresh) throw new Error('توکن‌های دسترسی بازگشتی ناقص‌اند.')

      localStorage.setItem('accessToken', access)
      localStorage.setItem('refreshToken', refresh)

      router.push('/dashboard')
    } catch (err: any) {
      if (err.response) {
        if (err.response.status === 400) setError('شماره موبایل یا رمز عبور نادرست است.')
        else if (err.response.status === 401) setError('احراز هویت انجام نشد. دوباره تلاش کنید.')
        else setError(`خطا ${err.response.status}: ${err.response.data?.detail || 'مشکلی پیش آمده.'}`)
      } else if (err.request) {
        setError('ارتباط با سرور برقرار نشد. اینترنت/سرور را بررسی کنید.')
      } else {
        setError(`خطای برنامه: ${err.message}`)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        // ✅ تصویر تم (همین اسکرین‌شات رو بذار داخل: /public/images/login-theme.png)
        backgroundImage: "url('/images/login-theme.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      dir="rtl"
    >
      {/* لایه نرم برای خوانایی (رنگ‌ها حفظ می‌شن) */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200/40 via-sky-100/25 to-white/60" />

      {/* هاله‌های لطیف مثل طرح عکس */}
      <div className="pointer-events-none absolute -left-40 top-24 h-[520px] w-[520px] rounded-full border border-white/30 bg-white/10 blur-lg" />
      <div className="pointer-events-none absolute -right-44 top-10 h-[560px] w-[560px] rounded-full border border-white/30 bg-white/10 blur-lg" />

      <div className="relative flex min-h-screen items-center justify-center px-4 py-10">
        <Card className="w-full max-w-md border-white/40 bg-white/20 shadow-[0_20px_60px_rgba(15,23,42,0.25)] backdrop-blur-xl">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-center gap-3">
              {/* ✅ آیکون سایت: /public/logo.svg یا /public/logo.png */}

              <div className="text-center">
                <CardTitle className="text-2xl font-semibold tracking-tight text-slate-900">
                  ورود به پنل مدیریت
                </CardTitle>
                <p className="mt-1 text-sm text-slate-700/90">
                  با شماره موبایل و رمز عبور وارد شوید
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-2">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-slate-800">
                  شماره موبایل
                </label>
                <Input
                  id="phone"
                  inputMode="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="مثلاً 09123456789"
                  className="h-11 bg-white/55 ring-1 ring-white/40 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-sky-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-slate-800">
                  رمز عبور
                </label>
                <Input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="رمز عبور خود را وارد کنید"
                  className="h-11 bg-white/55 ring-1 ring-white/40 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-sky-400"
                  required
                />
              </div>

              <div className="flex items-center justify-between pt-1 text-sm">
                <button
                  type="button"
                  className="text-slate-700 hover:text-slate-900 underline underline-offset-4 decoration-slate-300"
                  onClick={() => router.push('/forgot-password')}
                >
                  رمز عبور را فراموش کرده‌اید؟
                </button>

                <span className="text-slate-600/90">ورود امن</span>
              </div>

              {error && (
                <div className="rounded-2xl border border-red-200/60 bg-red-50/70 px-3 py-2 text-sm text-red-700">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="h-11 w-full rounded-2xl bg-slate-900 text-white shadow-sm hover:bg-slate-800 disabled:opacity-70"
              >
                {loading ? 'در حال ورود...' : 'ورود'}
              </Button>

              <p className="pt-2 text-center text-xs text-slate-700/80">
                با ورود، قوانین و شرایط استفاده را می‌پذیرید.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
