import React from 'react';
import { Menu, Search, Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function Header() {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-arabic font-bold text-emerald-700 dark:text-emerald-500">
              الشيخ سيد عبد المنعم
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8 ml-10">
            {['الرئيسية', 'السيرة الذاتية', 'المقالات', 'الدروس', 'الفتاوى', 'تواصل معنا'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 px-3 py-2 text-lg font-arabic"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-500"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="p-2 text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-500">
              <Search size={20} />
            </button>
            <button className="md:hidden p-2 text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-500">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}