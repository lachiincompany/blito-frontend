'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Testimonials from '@/components/ui/Testimonials';
import Header from '@/components/home/Header';
import SearchSection from '@/components/home/SearchSection';
import TripsSection from '@/components/trips/TripsSection';
import FeaturesSection from '@/components/home/FeaturesSection';

/* ------------ Types مطابق API جدید ------------ */

type City = {
  id: number;
  name: string;
};

type TripStatus = 'SCHEDULED' | 'DEPARTED' | 'ARRIVED' | 'CANCELLED';

type RouteType = {
  id: number;
  origin: string;
  destination: string;
  company: string;
  bus_type: 'standard' | 'luxury' | 'vip';
  base_price: string;
  distance_km: number;
  estimated_duration: string;
  is_active: boolean;
  created_at: string;
};

type FleetType = {
  id: number;
  company_name: string;
  bus_number: string;
  license_plate: string;
  model: string;
  brand: string;
  year: number;
  capacity: number;
  bus_type: 'standard' | 'luxury' | 'vip';
  facilities: string;
  image: string;
  interior_image: string;
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

type TripResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: TripType[];
};

/* ------------------ Component ------------------ */

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
    const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
    setIsLoggedIn(!!token);

    setSelectedDate(new Date());
  }, []);

  useEffect(() => {
    if (searched) searchTrips();
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

  /* ----------- جستجوی سفر مطابق API جدید ----------- */

  const searchTrips = async () => {
    if (!fromCity || !toCity) return;

    setLoading(true);

    try {
      const url = new URL('http://localhost:8000/trips/api/v1/trips/');

      url.searchParams.append('route__origin', fromCity);
      url.searchParams.append('route__destination', toCity);
      url.searchParams.append('ordering', ordering);

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
      if (!res.ok) throw new Error(`Failed: ${res.status}`);

      const rawData: TripResponse | TripType[] = await res.json();
      const results = Array.isArray(rawData) ? rawData : rawData.results ?? [];

      setTrips(results);
      setSearched(true);

    } catch (error) {
      console.error('خطا در جستجوی سفرها:', error);
      setTrips([]);
      setSearched(true);
    } finally {
      setLoading(false);
    }
  };

  /* ------------------ UI ------------------ */

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
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            سفر آسان با
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}بلیتو
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
