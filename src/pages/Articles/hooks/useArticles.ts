import { Article } from '../../../types';

export function useArticles(): Article[] {
  // This would typically fetch from an API
  return [
    {
      id: '1',
      title: 'أهمية الصلاة في حياة المسلم',
      excerpt: 'تعرف على الحكمة من فرض الصلاة وأثرها في حياة المسلم...',
      content: '',
      date: '2024-03-15',
      category: 'العبادات',
      imageUrl: 'https://images.unsplash.com/photo-1597935258735-e254e5f562b8'
    },
    // Add more articles as needed
  ];
}