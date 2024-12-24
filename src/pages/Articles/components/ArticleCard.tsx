import React from 'react';
import type { Article } from '../../../types';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
      {article.imageUrl && (
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="text-sm text-emerald-600 dark:text-emerald-500 mb-2 font-arabic">
          {article.category}
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-arabic">
          {article.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 font-arabic">
          {article.excerpt}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 font-arabic">
            {new Date(article.date).toLocaleDateString('ar-SA')}
          </span>
          <a
            href={`#article/${article.id}`}
            className="text-emerald-600 dark:text-emerald-500 hover:underline font-arabic"
          >
            اقرأ المزيد
          </a>
        </div>
      </div>
    </article>
  );
}