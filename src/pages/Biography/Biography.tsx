import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { SEOHead } from '../../components/SEOHead';
import { QualificationsList } from './components/QualificationsList';
import { ExperienceList } from './components/ExperienceList';
import { PublicationsList } from './components/PublicationsList';

export function Biography() {
  return (
    <Layout>
      <SEOHead
        title="السيرة الذاتية - الشيخ سيد عبد المنعم"
        description="تعرف على السيرة الذاتية للشيخ سيد عبد المنعم وإنجازاته العلمية والدعوية"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 font-arabic">
          السيرة الذاتية
        </h1>
        
        <div className="prose dark:prose-invert max-w-none font-arabic">
          <QualificationsList />
          <ExperienceList />
          <PublicationsList />
        </div>
      </div>
    </Layout>
  );
}