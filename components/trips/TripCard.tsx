'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import {
  MapPin,
  ArrowRightLeft,
  Bus,
  Clock,
  Route,
  DollarSign,
  Calendar,
} from 'lucide-react';

type TripStatus = 'SCHEDULED' | 'DEPARTED' | 'ARRIVED' | 'CANCELLED';

type TripType = {
  id: number;
  route: number;
  bus: number;
  departure_datetime: string;
  arrival_datetime: string;
  current_price: string;
  status: TripStatus;
  driver_name: number;
  driver_phone: string;
  created_at: string;
  route_info?: {
    origin: string;
    destination: string;
    company: string;
    bus_type: 'standard' | 'luxury' | 'vip';
    distance_km: number;
  };
};

/* --- توابع کمکی فقط مخصوص همین کامپوننت --- */

const getBusTypeLabel = (type: string) => {
  switch (type) {
    case 'standard':
      return 'معمولی';
    case 'luxury':
      return 'لوکس';
    case 'vip':
      return 'وی آی پی';
    default:
      return type;
  }
};

const getBusTypeColor = (type: string) => {
  switch (type) {
    case 'standard':
      return 'bg-gray-100 text-gray-700 border-gray-200';
    case 'luxury':
      return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'vip':
      return 'bg-purple-100 text-purple-700 border-purple-200';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const getStatusLabel = (status: TripStatus | string) => {
  switch (status) {
    case 'SCHEDULED':
      return 'برنامه‌ریزی شده';
    case 'DEPARTED':
      return 'حرکت کرده';
    case 'ARRIVED':
      return 'رسیده';
    case 'CANCELLED':
      return 'لغو شده';
    default:
      return status;
  }
};

const getStatusColor = (status: TripStatus | string) => {
  switch (status) {
    case 'SCHEDULED':
      return 'bg-green-100 text-green-700 border-green-200';
    case 'DEPARTED':
      return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'ARRIVED':
      return 'bg-gray-100 text-gray-700 border-gray-200';
    case 'CANCELLED':
      return 'bg-red-100 text-red-700 border-red-200';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const formatDateTime = (dateTimeString: string) => {
  const date = new Date(dateTimeString);
  return {
    date: date.toLocaleDateString('fa-IR'),
    time: date.toLocaleTimeString('fa-IR', {
      hour: '2-digit',
      minute: '2-digit',
    }),
  };
};

const calculateDuration = (departure: string, arrival: string) => {
  const dep = new Date(departure);
  const arr = new Date(arrival);
  const diffMs = arr.getTime() - dep.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  return `${diffHours}:${diffMins.toString().padStart(2, '0')}`;
};

type TripCardProps = {
  trip: TripType;
  onBook: (id: number) => void;
};

export default function TripCard({ trip, onBook }: TripCardProps) {
  const departureDateTime = formatDateTime(trip.departure_datetime);
  const arrivalDateTime = formatDateTime(trip.arrival_datetime);
  const duration = calculateDuration(trip.departure_datetime, trip.arrival_datetime);

  return (
    <Card className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group rounded-2xl">
      <CardContent className="p-5 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex-1 space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-600" />
                <span className="font-medium text-slate-800">
                  {trip.route_info?.origin || 'نامشخص'}
                </span>
              </div>
              <ArrowRightLeft className="w-4 h-4 text-slate-400" />
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-600" />
                <span className="font-medium text-slate-800">
                  {trip.route_info?.destination || 'نامشخص'}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-1">
                <Bus className="w-4 h-4" />
                <span>{trip.route_info?.company || 'نامشخص'}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{duration} ساعت</span>
              </div>
              {trip.route_info?.distance_km && (
                <div className="flex items-center gap-1">
                  <Route className="w-4 h-4" />
                  <span>{trip.route_info.distance_km} کیلومتر</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm">
              <div className="bg-green-50 px-3 py-1 rounded-lg">
                <span className="text-green-700 font-medium">حرکت: </span>
                <span className="text-slate-700">{departureDateTime.time}</span>
              </div>
              <div className="bg-blue-50 px-3 py-1 rounded-lg">
                <span className="text-blue-700 font-medium">رسیدن: </span>
                <span className="text-slate-700">{arrivalDateTime.time}</span>
              </div>
            </div>
          </div>

          <Separator orientation="vertical" className="hidden lg:block h-20 mx-4" />

          <div className="flex items-center justify-between lg:justify-end gap-4 lg:min-w-[280px]">
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                {trip.route_info?.bus_type && (
                  <Badge
                    className={`${getBusTypeColor(
                      trip.route_info.bus_type,
                    )} border`}
                  >
                    {getBusTypeLabel(trip.route_info.bus_type)}
                  </Badge>
                )}
                <Badge className={`${getStatusColor(trip.status)} border`}>
                  {getStatusLabel(trip.status)}
                </Badge>
              </div>

              <div className="text-left mt-1">
                <div className="flex items-baseline gap-1 text-2xl font-bold text-slate-800">
                  <DollarSign className="w-5 h-5" />
                  <span>
                    {parseFloat(trip.current_price).toLocaleString('fa-IR')}
                  </span>
                  <span className="text-xs font-normal text-slate-500">تومان</span>
                </div>
              </div>
            </div>

            <Button
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-2xl px-5"
              onClick={() => onBook(trip.id)}
            >
              <Calendar className="w-4 h-4 ml-2" />
              رزرو
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
