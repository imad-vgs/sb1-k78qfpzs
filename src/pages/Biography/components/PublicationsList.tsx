import React from 'react';

export function PublicationsList() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-500 mb-4">
        المؤلفات والإصدارات
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
        <li>كتاب "أحكام الصيام في ضوء الكتاب والسنة"</li>
        <li>كتاب "فقه المعاملات المعاصرة"</li>
        <li>سلسلة "دروس في العقيدة"</li>
      </ul>
    </div>
  );
}