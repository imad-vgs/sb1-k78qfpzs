import React from 'react';
import { Play } from 'lucide-react';
import type { Lesson } from '../../../types';

interface LessonCardProps {
  lesson: Lesson;
}

export function LessonCard({ lesson }: LessonCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
      <div className="relative">
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <Play className="h-12 w-12 text-emerald-600 dark:text-emerald-500" />
        </div>
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
          {lesson.duration}
        </span>
      </div>
      <div className="p-6">
        <div className="text-sm text-emerald-600 dark:text-emerald-500 mb-2 font-arabic">
          {lesson.category}
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-arabic">
          {lesson.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 font-arabic">
          {lesson.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 font-arabic">
            {new Date(lesson.date).toLocaleDateString('ar-SA')}
          </span>
          <a
            href={lesson.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 dark:text-emerald-500 hover:underline font-arabic"
          >
            مشاهدة الدرس
          </a>
        </div>
      </div>
    </div>
  );
}