'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, Check, X } from 'lucide-react'

export default function RegisterPage() {
    const router = useRouter()

    const [phone, setPhone] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [error, setError] = useState('')
    const [showPassword1, setShowPassword1] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)
    const [passwordStrength, setPasswordStrength] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        special: false
    })

    // 👇 اگر کاربر قبلاً لاگین کرده، دیگه نیازی نیست ثبت نام کنه
    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        if (token) {
            router.push('/dashboard') // هدایت به داشبورد
        }
    }, [])

    // 🔐 بررسی قدرت رمز عبور
    useEffect(() => {
        setPasswordStrength({
            length: password1.length >= 8,
            uppercase: /[A-Z]/.test(password1),
            lowercase: /[a-z]/.test(password1),
            number: /\d/.test(password1),
            special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password1)
        })
    }, [password1])

    // 📱 اعتبارسنجی شماره تلفن ایرانی
    const isValidPhoneNumber = (phone: string) => {
        const iranPhoneRegex = /^09\d{9}$/
        return iranPhoneRegex.test(phone)
    }

    // 📧 اعتبارسنجی ایمیل
    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    // 💪 محاسبه درصد قدرت رمز عبور
    const getPasswordStrengthPercentage = () => {
        const criteria = Object.values(passwordStrength)
        const metCriteria = criteria.filter(Boolean).length
        return (metCriteria / criteria.length) * 100
    }

    // 🎨 تعیین رنگ نوار پیشرفت بر اساس قدرت رمز
    const getPasswordStrengthColor = () => {
        const percentage = getPasswordStrengthPercentage()
        if (percentage < 40) return 'bg-red-500'
        if (percentage < 70) return 'bg-yellow-500'
        return 'bg-green-500'
    }

    // 📝 متن نمایش قدرت رمز
    const getPasswordStrengthText = () => {
        const percentage = getPasswordStrengthPercentage()
        if (percentage < 40) return 'ضعیف'
        if (percentage < 70) return 'متوسط'
        return 'قوی'
    }

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('') // پاک‌سازی ارورهای قبلی

        // 🔍 اعتبارسنجی فیلدها
        if (!isValidPhoneNumber(phone)) {
            setError('شماره تلفن باید با 09 شروع شده و 11 رقم باشد.')
            return
        }

        if (fullName.trim().length < 2) {
            setError('نام و نام خانوادگی باید حداقل 2 کاراکتر باشد.')
            return
        }

        if (!isValidEmail(email)) {
            setError('لطفاً ایمیل معتبری وارد کنید.')
            return
        }

        if (getPasswordStrengthPercentage() < 60) {
            setError('رمز عبور باید قوی‌تر باشد.')
            return
        }

        if (password1 !== password2) {
            setError('رمز عبور و تکرار آن باید یکسان باشند.')
            return
        }

        try {
            // 📡 ارسال درخواست ثبت نام به API
            const response = await axios.post('http://localhost:12000/accounts/api/v1/auth/register/', {
                phone,
                full_name: fullName,
                email,
                password1,
                password2,
            })

            // ✅ ثبت نام موفق
            alert('ثبت نام با موفقیت انجام شد! لطفاً وارد شوید.')
            router.push('/login') // هدایت به صفحه لاگین

        } catch (err: any) {
            // ❌ مدیریت انواع خطاها

            if (err.response) {
                if (err.response.status === 400) {
                    // خطاهای اعتبارسنجی از سمت سرور
                    const errorData = err.response.data
                    if (errorData.phone) {
                        setError('این شماره تلفن قبلاً ثبت شده است.')
                    } else if (errorData.email) {
                        setError('این ایمیل قبلاً ثبت شده است.')
                    } else if (errorData.password1) {
                        setError('رمز عبور انتخابی مناسب نیست.')
                    } else {
                        setError('اطلاعات وارد شده نامعتبر است.')
                    }
                } else {
                    setError(`خطا ${err.response.status}: ${err.response.data?.detail || 'مشکلی پیش آمده.'}`)
                }
            } else if (err.request) {
                setError('اتصال به سرور برقرار نشد. لطفاً اینترنت خود را بررسی کنید.')
            } else {
                setError(`خطا در برنامه: ${err.message}`)
            }
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <Card className="w-full max-w-md shadow-md border border-gray-200">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-purple-700">
                        عضو خانواده ما شو عزیز 💜
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleRegister} className="space-y-4">
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
                                placeholder="09123456789"
                                maxLength={11}
                                required
                            />
                        </div>

                        {/* فیلد نام و نام خانوادگی */}
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                نام و نام خانوادگی
                            </label>
                            <Input
                                type="text"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="نام و نام خانوادگی خود را وارد کنید"
                                required
                            />
                        </div>

                        {/* فیلد ایمیل */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                ایمیل
                            </label>
                            <Input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="example@email.com"
                                required
                            />
                        </div>

                        {/* فیلد رمز عبور */}
                        <div>
                            <label htmlFor="password1" className="block text-sm font-medium text-gray-700">
                                رمز عبور
                            </label>
                            <div className="relative">
                                <Input
                                    type={showPassword1 ? "text" : "password"}
                                    id="password1"
                                    value={password1}
                                    onChange={(e) => setPassword1(e.target.value)}
                                    placeholder="رمز عبور قوی انتخاب کنید"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword1(!showPassword1)}
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                >
                                    {showPassword1 ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            
                            {/* نوار قدرت رمز عبور */}
                            {password1 && (
                                <div className="mt-2">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-xs text-gray-600">قدرت رمز عبور:</span>
                                        <span className={`text-xs font-medium ${getPasswordStrengthPercentage() < 40 ? 'text-red-500' : getPasswordStrengthPercentage() < 70 ? 'text-yellow-500' : 'text-green-500'}`}>
                                            {getPasswordStrengthText()}
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div 
                                            className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                                            style={{ width: `${getPasswordStrengthPercentage()}%` }}
                                        ></div>
                                    </div>
                                    
                                    {/* معیارهای رمز عبور */}
                                    <div className="mt-2 grid grid-cols-1 gap-1 text-xs">
                                        <div className={`flex items-center gap-1 ${passwordStrength.length ? 'text-green-600' : 'text-red-500'}`}>
                                            {passwordStrength.length ? <Check size={12} /> : <X size={12} />}
                                            حداقل 8 کاراکتر
                                        </div>
                                        <div className={`flex items-center gap-1 ${passwordStrength.lowercase ? 'text-green-600' : 'text-red-500'}`}>
                                            {passwordStrength.lowercase ? <Check size={12} /> : <X size={12} />}
                                            حروف کوچک انگلیسی
                                        </div>
                                        <div className={`flex items-center gap-1 ${passwordStrength.number ? 'text-green-600' : 'text-red-500'}`}>
                                            {passwordStrength.number ? <Check size={12} /> : <X size={12} />}
                                            عدد
                                        </div>

                                    </div>
                                </div>
                            )}
                        </div>

                        {/* فیلد تکرار رمز عبور */}
                        <div>
                            <label htmlFor="password2" className="block text-sm font-medium text-gray-700">
                                تکرار رمز عبور
                            </label>
                            <div className="relative">
                                <Input
                                    type={showPassword2 ? "text" : "password"}
                                    id="password2"
                                    value={password2}
                                    onChange={(e) => setPassword2(e.target.value)}
                                    placeholder="رمز عبور را دوباره وارد کنید"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword2(!showPassword2)}
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                >
                                    {showPassword2 ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            {/* نمایش تطابق رمز عبور */}
                            {password2 && (
                                <div className={`flex items-center gap-1 mt-1 text-xs ${password1 === password2 ? 'text-green-600' : 'text-red-500'}`}>
                                    {password1 === password2 ? <Check size={12} /> : <X size={12} />}
                                    {password1 === password2 ? 'رمز عبور مطابقت دارد' : 'رمز عبور مطابقت ندارد'}
                                </div>
                            )}
                        </div>

                        {/* نمایش پیام خطا در صورت نیاز */}
                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                        {/* دکمه ثبت نام */}
                        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                            ثبت نام
                        </Button>

                        {/* لینک به صفحه لاگین */}
                        <div className="text-center text-sm text-gray-600">
                            قبلاً حساب کاربری داری؟{' '}
                            <button
                                type="button"
                                onClick={() => router.push('/login')}
                                className="text-purple-600 hover:text-purple-700 font-medium"
                            >
                                وارد شو
                            </button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}