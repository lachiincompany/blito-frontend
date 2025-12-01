'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PersianDatePicker from '@/components/ui/PersianDatePicker';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { MapPin, ArrowRightLeft, Search, CalendarDays } from 'lucide-react';

type City = {
  id: number;
  name: string;
};

type SearchSectionProps = {
  cities: City[];
  fromCity: string;
  toCity: string;
  selectedDate: any;
  loading: boolean;
  onFromCityChange: (value: string) => void;
  onToCityChange: (value: string) => void;
  onDateChange: (value: any) => void;
  onSwapCities: () => void;
  onSearch: () => void;
  isSearchDisabled: boolean;
};

export default function SearchSection({
  cities,
  fromCity,
  toCity,
  selectedDate,
  loading,
  onFromCityChange,
  onToCityChange,
  onDateChange,
  onSwapCities,
  onSearch,
  isSearchDisabled,
}: SearchSectionProps) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-xl rounded-3xl overflow-visible relative z-10 ring-1 ring-slate-900/5">
        
        <CardHeader className="pb-2 pt-6 px-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-50 rounded-xl">
              <Search className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 tracking-tight">
              جستجوی بلیط سفر
            </h3>
          </div>
        </CardHeader>

        <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
                
                {/* Origin City (4 cols) */}
                <div className="lg:col-span-4 relative group">
                    <label className="text-xs font-semibold text-slate-500 mb-1.5 block pr-1">
                    مبدا حرکت
                    </label>
                    <div className="relative">
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10 pointer-events-none text-slate-400 group-hover:text-blue-500 transition-colors">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <Select value={fromCity} onValueChange={onFromCityChange}>
                        <SelectTrigger className="h-14 pr-10 bg-slate-50/50 border-slate-200 hover:bg-white hover:border-blue-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 rounded-2xl transition-all duration-300 font-medium text-slate-700">
                        <SelectValue placeholder="انتخاب شهر مبدا" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-slate-100 shadow-xl">
                        {cities.map((city) => (
                            <SelectItem key={city.id} value={city.id.toString()}>
                            {city.name}
                            </SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                    </div>
                </div>

                {/* Swap Button (1 col) - FIXED POSITIONING */}
                {/* mb-2 is key here: (Input Height 56px - Button Height 40px) / 2 = 8px (mb-2) */}
                <div className="lg:col-span-1 flex justify-center items-end relative z-20 pb-2 lg:pb-0 lg:mb-2">
                    <Button
                    variant="ghost"
                    size="icon"
                    onClick={onSwapCities}
                    className="h-10 w-10 rounded-full bg-blue-50 text-blue-600 border border-blue-100 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm"
                    title="جابجایی مبدا و مقصد"
                    >
                    <ArrowRightLeft className="w-4 h-4 transition-transform duration-500 group-hover:rotate-180" />
                    </Button>
                </div>

                {/* Destination City (4 cols) */}
                <div className="lg:col-span-4 relative group">
                    <label className="text-xs font-semibold text-slate-500 mb-1.5 block pr-1">
                    مقصد سفر
                    </label>
                    <div className="relative">
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10 pointer-events-none text-slate-400 group-hover:text-red-500 transition-colors">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <Select value={toCity} onValueChange={onToCityChange}>
                        <SelectTrigger className="h-14 pr-10 bg-slate-50/50 border-slate-200 hover:bg-white hover:border-blue-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 rounded-2xl transition-all duration-300 font-medium text-slate-700">
                        <SelectValue placeholder="انتخاب شهر مقصد" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-slate-100 shadow-xl">
                        {cities.map((city) => (
                            <SelectItem key={city.id} value={city.id.toString()}>
                            {city.name}
                            </SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                    </div>
                </div>

                {/* Date Picker (3 cols) */}
                <div className="lg:col-span-3 relative group">
                    <label className="text-xs font-semibold text-slate-500 mb-1.5 block pr-1">
                    تاریخ حرکت
                    </label>
                    <div className="relative">
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10 pointer-events-none text-slate-400 group-hover:text-purple-500 transition-colors">
                        <CalendarDays className="w-5 h-5" />
                    </div>
                    <div className="[&>div>input]:h-14 [&>div>input]:pr-10 [&>div>input]:rounded-2xl [&>div>input]:border-slate-200 [&>div>input]:bg-slate-50/50 [&>div>input]:w-full hover:[&>div>input]:border-blue-300 focus-within:[&>div>input]:border-blue-500 focus-within:[&>div>input]:ring-4 focus-within:[&>div>input]:ring-blue-100 transition-all">
                        <PersianDatePicker
                        value={selectedDate}
                        onChange={onDateChange}
                        />
                    </div>
                    </div>
                </div>

                </div>

          {/* Search Button Area */}
          <div className="mt-8 flex justify-center">
            <Button
              onClick={onSearch}
              disabled={isSearchDisabled || loading}
              className="relative overflow-hidden group h-14 px-12 min-w-[200px] bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg font-bold rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white" />
                    <span className="text-base">در حال جستجو...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    جستجوی بلیط
                  </>
                )}
              </span>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}