import { FatwaQuestion } from '../../../types';

export function useFatwas(): FatwaQuestion[] {
  return [
    {
      id: '1',
      question: 'ما حكم صلاة الجماعة في المسجد؟',
      answer: 'صلاة الجماعة في المسجد واجبة على الرجال...',
      date: '2024-03-15',
      category: 'العبادات'
    }
  ];
}