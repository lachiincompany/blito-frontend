'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Bus, Route } from 'lucide-react';

import TripCard from './TripCard';

type TripStatus = 'SCHEDULED' | 'DEPARTED' | 'ARRIVED' | 'CANCELLED';

type RouteType = {
  id: number;
  origin: string;
  destination: string;
  company: string;
  bus_type: 'standard' | 'luxury' | 'vip';
  distance_km: number;
};

type FleetType = {
  id: number;
  model: string;
  brand: string;
  capacity: number;
};

type TripType = {
  id: number;
  route: RouteType;
  fleet: FleetType;
  departure_datetime: string;
  arrival_datetime: string;
  current_price: string;
  status: TripStatus;
  driver_name: number;
  created_at: string;
};

type TripsSectionProps = {
  trips: TripType[];
  searched: boolean;
  ordering: string;
  onOrderingChange: (value: string) => void;
  onBook: (id: number) => void;
};

export default function TripsSection({
  trips,
  searched,
  ordering,
  onOrderingChange,
  onBook,
}: TripsSectionProps) {
  if (!searched) return null;

  const scheduledTrips = trips.filter((trip) => trip.status === 'SCHEDULED');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center">
          <Route className="w-6 h-6 ml-2 text-blue-600" />
          سفرهای موجود
        </h3>

        {trips.length > 0 && (
          <Badge className="bg-blue-100 text-blue-700 border-blue-200 px-4 py-1 rounded-full">
            {trips.length} سفر یافت شد
          </Badge>
        )}
      </div>

      {trips.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium text-slate-700">
              مرتب‌سازی بر اساس
            </label>
            <Select value={ordering} onValueChange={onOrderingChange}>
              <SelectTrigger className="h-12 bg-white border-2 hover:border-blue-300 focus:border-blue-500">
                <SelectValue placeholder="مرتب‌سازی را انتخاب کنید" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="departure_datetime">زودترین حرکت</SelectItem>
                <SelectItem value="-departure_datetime">دیرترین حرکت</SelectItem>
                <SelectItem value="current_price">ارزان‌ترین</SelectItem>
                <SelectItem value="-current_price">گران‌ترین</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {trips.length === 0 ? (
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="py-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bus className="w-8 h-8 text-gray-400" />
            </div>
            <h4 className="text-lg font-medium text-slate-600 mb-2">سفری یافت نشد</h4>
            <p className="text-slate-500">
              برای این مسیر و تاریخ در حال حاضر سفری موجود نیست
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {scheduledTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} onBook={onBook} />
          ))}
        </div>
      )}
    </div>
  );
}
