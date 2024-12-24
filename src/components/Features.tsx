import React from 'react';
import { BookOpen, Video, MessageCircle, Calendar } from 'lucide-react';

const features = [
  {
    name: 'دروس ومحاضرات',
    description: 'مجموعة متنوعة من الدروس والمحاضرات في مختلف العلوم الشرعية',
    icon: BookOpen,
  },
  {
    name: 'محتوى مرئي',
    description: 'خطب ومحاضرات مسجلة يمكن مشاهدتها في أي وقت',
    icon: Video,
  },
  {
    name: 'فتاوى وإجابات',
    description: 'إجابات على الأسئلة الشرعية والفتاوى المختلفة',
    icon: MessageCircle,
  },
  {
    name: 'حجز المواعيد',
    description: 'إمكانية حجز موعد للاستشارات الشرعية الخاصة',
    icon: Calendar,
  },
];

export function Features() {
  return (
    <div className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-arabic">خدماتنا</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 font-arabic">
            نقدم مجموعة متكاملة من الخدمات التعليمية والشرعية
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 dark:bg-gray-800 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-emerald-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight font-arabic">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-400 font-arabic">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}