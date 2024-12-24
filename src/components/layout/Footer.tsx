import React from 'react';
import { Facebook, Twitter, Youtube, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white font-arabic">روابط سريعة</h3>
            <ul className="space-y-2">
              {['السيرة الذاتية', 'المقالات', 'الدروس', 'الفتاوى'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 font-arabic">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white font-arabic">تواصل معنا</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-emerald-600" />
                <span className="text-gray-600 dark:text-gray-300 font-arabic">info@example.com</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white font-arabic">تابعونا</h3>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Youtube, href: '#' }
              ].map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-500"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white font-arabic">النشرة البريدية</h3>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 font-arabic"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 font-arabic"
              >
                اشتراك
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400 font-arabic">
            جميع الحقوق محفوظة © {new Date().getFullYear()} الشيخ سيد عبد المنعم
          </p>
        </div>
      </div>
    </footer>
  );
}