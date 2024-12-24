import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function SEOHead({
  title = 'الشيخ سيد عبد المنعم - الموقع الرسمي',
  description = 'الموقع الرسمي للشيخ سيد عبد المنعم - دروس، محاضرات، فتاوى، واستشارات شرعية',
  keywords = 'فتاوى إسلامية, دروس دينية, محاضرات إسلامية, استشارات شرعية, الشيخ سيد عبد المنعم',
  image = 'https://example.com/sheikh-profile.jpg',
  url = 'https://example.com',
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Arabic language support */}
      <meta property="og:locale" content="ar_SA" />
      <link rel="alternate" href={url} hrefLang="ar" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'الشيخ سيد عبد المنعم',
          url: url,
          image: image,
          description: description,
          jobTitle: 'عالم ديني وداعية إسلامي',
          sameAs: [
            'https://facebook.com/SheikhSayed',
            'https://twitter.com/SheikhSayed',
            'https://youtube.com/SheikhSayed'
          ]
        })}
      </script>
    </Helmet>
  );
}