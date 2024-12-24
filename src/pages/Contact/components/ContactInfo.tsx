import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-arabic">
        معلومات الاتصال
      </h2>
      <div className="space-y-4">
        {[
          { Icon: Mail, text: 'info@example.com' },
          { Icon: Phone, text: '+123456789' },
          { Icon: MapPin, text: 'العنوان، المدينة، البلد' }
        ].map(({ Icon, text }) => (
          <div key={text} className="flex items-center space-x-4">
            <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
            <span className="text-gray-600 dark:text-gray-300 font-arabic">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}