'use client';

import { Button } from '@/components/ui/button';
import { User, LogOut } from 'lucide-react';

type HeaderProps = {
  isLoggedIn: boolean;
  onLogin: () => void;
  onRegister: () => void;
  onDashboard: () => void;
  onLogout: () => void;
};

export default function Header({
  isLoggedIn,
  onLogin,
  onRegister,
  onDashboard,
  onLogout,
}: HeaderProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/logo.svg" alt="بلیتو" className="w-28 object-contain" />
          </div>

          <div className="flex items-center gap-3">
            {!isLoggedIn ? (
              <>
                <Button
                  className="
                    bg-gradient-to-r from-blue-600 to-blue-500 
                    hover:from-blue-700 hover:to-blue-600
                    text-white shadow-md hover:shadow-lg
                    transition-all duration-200
                    px-5 py-2 rounded-xl
                    flex items-center gap-2
                  "
                  onClick={onLogin}
                >
                  <User className="w-4 h-4 ml-2" />
                  ورود
                </Button>

                <Button
                  variant="outline"
                  className="
                    border-2 border-blue-600 
                    text-blue-600 
                    hover:bg-blue-50 
                    hover:text-blue-700
                    transition-all duration-200
                    px-5 py-2 rounded-xl
                  "
                  onClick={onRegister}
                >
                  ثبت‌نام
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onDashboard}
                  className="text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                >
                  <User className="w-4 h-4 ml-2" />
                  داشبورد
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onLogout}
                  className="text-slate-600 hover:text-red-600 hover:bg-red-50"
                >
                  <LogOut className="w-4 h-4 ml-2" />
                  خروج
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
