import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { SEOHead } from '../../components/SEOHead';
import { LessonCard } from './components/LessonCard';
import { useLessons } from './hooks/useLessons';

export function Lessons() {
  const lessons = useLessons();

  return (
    <Layout>
      <SEOHead
        title="الدروس والمحاضرات - الشيخ سيد عبد المنعم"
        description="دروس ومحاضرات متنوعة في العلوم الشرعية"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 font-arabic">
          الدروس والمحاضرات
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </div>
    </Layout>
  );
}