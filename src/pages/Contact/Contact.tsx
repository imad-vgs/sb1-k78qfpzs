import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { SEOHead } from '../../components/SEOHead';
import { ContactInfo } from './components/ContactInfo';
import { ContactForm } from './components/ContactForm';

export function Contact() {
  return (
    <Layout>
      <SEOHead
        title="تواصل معنا - الشيخ سيد عبد المنعم"
        description="تواصل مع الشيخ سيد عبد المنعم للاستشارات الشرعية وحجز المواعيد"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 font-arabic">
          تواصل معنا
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
}