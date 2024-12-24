import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { SEOHead } from '../../components/SEOHead';
import { FatwaCard } from './components/FatwaCard';
import { useFatwas } from './hooks/useFatwas';

export function Fatwa() {
  const fatwas = useFatwas();

  return (
    <Layout>
      <SEOHead
        title="الفتاوى - الشيخ سيد عبد المنعم"
        description="فتاوى وأحكام شرعية في مختلف المجالات"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 font-arabic">
          الفتاوى
        </h1>
        
        <div className="space-y-8">
          {fatwas.map((fatwa) => (
            <FatwaCard key={fatwa.id} fatwa={fatwa} />
          ))}
        </div>
      </div>
    </Layout>
  );
}