'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Search, DollarSign, Star } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center group hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 rounded-2xl">
        <CardContent className="p-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Search className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2">
            جستجوی آسان
          </h3>
          <p className="text-slate-600 text-sm sm:text-base">
            با چند کلیک ساده، بهترین سفرها را پیدا کنید
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center group_hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 rounded-2xl">
        <CardContent className="p-8">
          <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <DollarSign className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2">
            بهترین قیمت
          </h3>
          <p className="text-slate-600 text-sm sm:text-base">
            مقایسه قیمت‌ها و انتخاب مناسب‌ترین گزینه
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center group hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 rounded-2xl">
        <CardContent className="p-8">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2">
            کیفیت برتر
          </h3>
          <p className="text-slate-600 text-sm sm:text-base">
            همکاری با معتبرترین شرکت‌های حمل و نقل
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
