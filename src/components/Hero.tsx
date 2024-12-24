import React from 'react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl font-arabic">
            <span className="block">مرحباً بكم في الموقع الرسمي</span>
            <span className="block text-emerald-600 dark:text-emerald-500">للشيخ سيد عبد المنعم</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl font-arabic">
            منارة للعلم الشرعي والفقه الإسلامي، نقدم دروساً وفتاوى ومحاضرات في مختلف العلوم الإسلامية
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#schedule"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10 font-arabic"
              >
                احجز موعداً للاستشارة
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:mr-3">
              <a
                href="#lessons"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 font-arabic"
              >
                تصفح الدروس
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}