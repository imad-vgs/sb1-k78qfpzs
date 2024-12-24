import { Lesson } from '../../../types';

export function useLessons(): Lesson[] {
  return [
    {
      id: '1',
      title: 'شرح كتاب رياض الصالحين',
      description: 'درس أسبوعي في شرح كتاب رياض الصالحين للإمام النووي',
      videoUrl: 'https://youtube.com/watch?v=example',
      duration: '45:00',
      category: 'الحديث',
      date: '2024-03-15'
    }
  ];
}