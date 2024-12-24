import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { SEOHead } from '../../components/SEOHead';
import { ArticleCard } from './components/ArticleCard';
import { useArticles } from './hooks/useArticles';

export function Articles() {
  const articles = useArticles();

  return (
    <Layout>
      <SEOHead
        title="المقالات - الشيخ سيد عبد المنعم"
        description="مقالات وخواطر دينية متنوعة في العقيدة والفقه والسيرة"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 font-arabic">
          المقالات
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </Layout>
  );
}