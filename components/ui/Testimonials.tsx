"use client";

import Slider from "react-slick";

const testimonials = [
  {
    name: "علی رضایی",
    role: "کاربر بلیتو",
    image: "/users/user1.jpg",
    comment:
      "خیلی سریع بلیت پیدا کردم. قیمت‌ها دقیق و به‌روز بود. واقعاً تجربه خوبی داشتم.",
  },
  {
    name: "سمیه مهدوی",
    role: "کاربر بلیتو",
    image: "/users/user2.jpg",
    comment: "پشتیبانی عالی! بدون دردسر بلیت رزرو کردم.",
  },
  {
    name: "مهدی صادقی",
    role: "کاربر ویژه",
    image: "/users/user3.jpg",
    comment: "امکان مقایسه قیمت‌ها خیلی کمکم کرد.",
  },
  {
    name: "زهرا کریمی",
    role: "کاربر بلیتو",
    image: "/users/user4.jpg",
    comment: "رابط کاربری خیلی ساده و شیک بود.",
  },
  {
    name: "حسین مرادی",
    role: "کاربر بلیتو",
    image: "/users/user5.jpg",
    comment: "بهترین تجربه خرید بلیت من تا الان!",
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 400,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-center text-slate-800 mb-3">
        نظرات کاربران درباره بلیتو
      </h2>
      <p className="text-center text-slate-500 mb-10 text-sm">
        بخشی از تجربه کاربرانی که برای رزرو سفر، بلیتو را انتخاب کرده‌اند
      </p>

      <div className="max-w-xl mx-auto">
        <Slider {...settings}>

          {testimonials.map((item, index) => (
            <div key={index}>
              <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl shadow-md p-8 text-center min-h-[270px]">

                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden shadow">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                    alt={item.name}
                  />
                </div>

                <p className="text-slate-700 mb-4 leading-relaxed">
                  “{item.comment}”
                </p>

                <h4 className="font-semibold text-slate-800">{item.name}</h4>
                <span className="text-xs text-slate-500">{item.role}</span>
              </div>
            </div>
          ))}

        </Slider>
      </div>
    </section>
  );
}
