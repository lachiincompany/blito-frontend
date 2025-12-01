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
  route: {
    origin: string;
    destination: string;
    company: string;
    bus_type: 'standard' | 'luxury' | 'vip';
    distance_km: number;
  };
  fleet: {
    model: string;
    brand: string;
    capacity: number;
  };
  departure_datetime: string;
  arrival_datetime: string;
  current_price: string;
  status: TripStatus;
  driver_name: number;
  created_at: string;
};

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

const getStatusLabel = (status: TripStatus) => {
  switch (status) {
    case 'SCHEDULED':
      return 'برنامه‌ریزی شده';
    case 'DEPARTED':
      return 'حرکت کرده';
    case 'ARRIVED':
      return 'رسیده';
    case 'CANCELLED':
      return 'لغو شده';
  }
};

const getStatusColor = (status: TripStatus) => {
  switch (status) {
    case 'SCHEDULED':
      return 'bg-green-100 text-green-700 border-green-200';
    case 'DEPARTED':
      return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'ARRIVED':
      return 'bg-gray-100 text-gray-700 border-gray-200';
    case 'CANCELLED':
      return 'bg-red-100 text-red-700 border-red-200';
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
  const diff = arr.getTime() - dep.getTime();
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  return `${h}:${m.toString().padStart(2, '0')}`;
};

export default function TripCard({ trip, onBook }: { trip: TripType; onBook: (id: number) => void }) {
  const dep = formatDateTime(trip.departure_datetime);
  const arr = formatDateTime(trip.arrival_datetime);
  const duration = calculateDuration(trip.departure_datetime, trip.arrival_datetime);

  return (
    <Card className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-md hover:shadow-xl rounded-2xl">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row justify-between gap-4">

          {/* مسیر */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <MapPin className="text-green-600 w-4 h-4" />
              <span>{trip.route.origin}</span>

              <ArrowRightLeft className="text-gray-400 w-4 h-4 mx-2" />

              <MapPin className="text-red-600 w-4 h-4" />
              <span>{trip.route.destination}</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-600 flex-wrap">
              <span className="flex items-center gap-1">
                <Bus className="w-4 h-4" />
                {trip.route.company}
              </span>

              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {duration} ساعت
              </span>

              <span className="flex items-center gap-1">
                <Route className="w-4 h-4" />
                {trip.route.distance_km} کیلومتر
              </span>
            </div>

            <div className="flex gap-3 text-sm">
              <div className="bg-green-50 px-3 py-1 rounded-lg">
                حرکت: {dep.time}
              </div>
              <div className="bg-blue-50 px-3 py-1 rounded-lg">
                رسیدن: {arr.time}
              </div>
            </div>
          </div>

          <Separator orientation="vertical" className="hidden lg:block h-20" />

          {/* قیمت و رزرو */}
          <div className="flex items-center justify-between lg:flex-col lg:items-end lg:gap-3">

            <div>
              <div className="flex gap-2">
                <Badge className={getBusTypeColor(trip.route.bus_type)}>
                  {getBusTypeLabel(trip.route.bus_type)}
                </Badge>

                <Badge className={getStatusColor(trip.status)}>
                  {getStatusLabel(trip.status)}
                </Badge>
              </div>

              <div className="text-2xl font-bold mt-2">
                {parseFloat(trip.current_price).toLocaleString('fa-IR')} تومان
              </div>
            </div>

            <Button
              className="bg-green-600 hover:bg-green-700 rounded-2xl px-6 text-white"
              onClick={() => onBook(trip.id)}
            >
              <Calendar className="ml-2 w-4 h-4" /> رزرو
            </Button>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
