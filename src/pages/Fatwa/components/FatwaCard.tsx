import React from 'react';
import type { FatwaQuestion } from '../../../types';

interface FatwaCardProps {
  fatwa: FatwaQuestion;
}

export function FatwaCard({ fatwa }: FatwaCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <div className="text-sm text-emerald-600 dark:text-emerald-500 mb-2 font-arabic">
        {fatwa.category}
      </div>
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-arabic">
        {fatwa.question}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 font-arabic">
        {fatwa.answer}
      </p>
      <div className="text-sm text-gray-500 dark:text-gray-400 font-arabic">
        {new Date(fatwa.date).toLocaleDateString('ar-SA')}
      </div>
    </div>
  );
}