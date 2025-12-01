"use client";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Calendar } from "lucide-react";

type Props = {
  label?: string;
  value: any;
  onChange: (value: any) => void;
};

export default function PersianDatePicker({ label, value, onChange }: Props) {
  return (
    // ⬅️ اینجا relative و z-50 مهمه
    <div className="w-full relative z-50">
      {label && (
        <label className="block mb-2 font-medium text-slate-700 flex items-center">
          <Calendar className="w-4 h-4 ml-1 text-blue-600" />
          {label}
        </label>
      )}

      <div
        className="
          bg-white border-2 rounded-md px-3 py-2 h-12
          flex items-center gap-2
          hover:border-blue-300 
          focus-within:border-blue-500 
          transition-all
        "
      >
        <Calendar className="w-4 h-4 text-slate-500" />

        <DatePicker
          value={value}
          onChange={onChange}
          calendar={persian}
          locale={persian_fa}
          inputClass="w-full bg-transparent outline-none text-right"
          calendarPosition="bottom-right"
          portal                // ⬅️ این باعث میشه داخل body رندر بشه
          containerClassName="w-full z-50"  // ⬅️ تقویم z بالاتر
        />
      </div>
    </div>
  );
}
