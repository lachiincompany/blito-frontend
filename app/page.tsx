'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Testimonials from '@/components/ui/Testimonials';
import Header from '@/components/home/Header';
import SearchSection from '@/components/home/SearchSection';
import TripsSection from '@/components/trips/TripsSection';
import FeaturesSection from '@/components/home/FeaturesSection';

/* ---- type ها داخل همین فایل (نه types/trip.ts) ---- */

type City = {
  id: number;
  name: string;
};

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

type TripResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: TripType[];
};

export default function HomePage() {
  const router = useRouter();

  const [cities, setCities] = useState<City[]>([]);
  const [trips, setTrips] = useState<TripType[]>([]);
  const [fromCity, setFromCity] = useState<string>('');
  const [toCity, setToCity] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [ordering, setOrdering] = useState<string>('departure_datetime');

  useEffect(() => {
    const token =
      typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
    setIsLoggedIn(!!token);

    // تاریخ پیش‌فرض: امروز
    setSelectedDate(new Date());
  }, []);

  useEffect(() => {
    if (searched) {
      searchTrips();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ordering]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res = await fetch('http://localhost:8000/city/api/v1/cities/');
        const data = await res.json();
        const results: City[] = Array.isArray(data) ? data : data?.results ?? [];
        setCities(results);
      } catch (error) {
        console.error('خطا در گرفتن شهرها:', error);
      }
    };
    fetchCities();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsLoggedIn(false);
  };

  const swapCities = () => {
    setFromCity(toCity);
    setToCity(fromCity);
  };

  const handleBookTrip = (id: number) => {
    router.push(`/booking/${id}`);
  };

  const searchTrips = async () => {
    if (!fromCity || !toCity) return;

    setLoading(true);
    try {
      const url = new URL('http://localhost:8000/trips/api/v1/trips/');
      url.searchParams.append('route__origin', fromCity);
      url.searchParams.append('route__destination', toCity);
      url.searchParams.append('ordering', ordering);

      // تبدیل تاریخ انتخاب شده به فرمت مناسب API
      if (selectedDate) {
        let gregorianDate: string | null = null;

        if (selectedDate?.toDate) {
          gregorianDate = selectedDate.toDate().toISOString().slice(0, 10);
        } else if (selectedDate instanceof Date) {
          gregorianDate = selectedDate.toISOString().slice(0, 10);
        } else if (typeof selectedDate === 'string') {
          gregorianDate = selectedDate;
        }

        if (gregorianDate) {
          url.searchParams.append('departure_datetime__date', gregorianDate);
        }
      }

      const res = await fetch(url.toString());
      if (!res.ok) {
        throw new Error(`Failed to fetch trips: ${res.status}`);
      }

      const rawData: TripResponse | TripType[] = await res.json();
      const results: TripType[] = Array.isArray(rawData)
        ? rawData
        : rawData?.results ?? [];

      const tripsWithRouteInfo = await Promise.all(
        results.map(async (trip) => {
          try {
            const routeRes = await fetch(
              `http://localhost:8000/routes/api/v1/routes/${trip.route}/`,
            );
            const routeData = await routeRes.json();
            return {
              ...trip,
              route_info: {
                origin: routeData.origin,
                destination: routeData.destination,
                company: routeData.company,
                bus_type: routeData.bus_type,
                distance_km: routeData.distance_km,
              },
            };
          } catch (error) {
            console.error('خطا در گرفتن اطلاعات مسیر:', error);
            return trip;
          }
        }),
      );

      setTrips(tripsWithRouteInfo);
      setSearched(true);
    } catch (error) {
      console.error('خطا در جستجوی سفرها:', error);
      setTrips([]);
      setSearched(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      <Header
        isLoggedIn={isLoggedIn}
        onLogin={() => router.push('/login')}
        onRegister={() => router.push('/register')}
        onDashboard={() => router.push('/dashboard')}
        onLogout={handleLogout}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            سفر آسان با
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}
              بلیتو
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            بهترین قیمت‌ها و راحت‌ترین روش برای رزرو بلیت اتوبوس
          </p>
        </div>

        <SearchSection
          cities={cities}
          fromCity={fromCity}
          toCity={toCity}
          selectedDate={selectedDate}
          loading={loading}
          onFromCityChange={setFromCity}
          onToCityChange={setToCity}
          onDateChange={setSelectedDate}
          onSwapCities={swapCities}
          onSearch={searchTrips}
          isSearchDisabled={!fromCity || !toCity}
        />

        <TripsSection
          trips={trips}
          searched={searched}
          ordering={ordering}
          onOrderingChange={setOrdering}
          onBook={handleBookTrip}
        />

        {!searched && <FeaturesSection />}

        <div className="mt-14">
          <Testimonials />
        </div>
      </div>
    </div>
  );
}
