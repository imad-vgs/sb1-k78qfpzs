import React from 'react';

export function QualificationsList() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-500 mb-4">
        المؤهلات العلمية
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
        <li>دكتوراه في الفقه المقارن</li>
        <li>ماجستير في أصول الفقه</li>
        <li>بكالوريوس الشريعة الإسلامية</li>
      </ul>
    </div>
  );
}