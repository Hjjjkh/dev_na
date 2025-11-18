// dev-nav/src/app/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { categories, sites, Site } from '@/data/sites';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSites, setFilteredSites] = useState<Site[]>(sites);

  useEffect(() => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const results = sites.filter(
      (site) =>
        site.name.toLowerCase().includes(lowercasedTerm) ||
        site.description.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredSites(results);
  }, [searchTerm]);

  const fallbackIcon = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>')}`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <main className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
            学习导航
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            一个为开发者和学习者精心打造的资源中心。
          </p>
        </header>

        <div className="mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="搜索网站名称或描述..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 pl-12 text-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="space-y-12">
          {categories.map((category) => {
            const sitesInCategory = filteredSites.filter((site) => site.category === category.id);
            if (sitesInCategory.length === 0) {
              return null; // 如果该分类下没有匹配的站点，则不渲染该分类
            }
            return (
              <section key={category.id}>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  {category.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sitesInCategory.map((site) => (
                    <a
                      key={site.id}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src={`https://api.iowen.cn/favicon/${new URL(site.url).hostname}.ico`}
                          alt={`${site.name} icon`}
                          className="w-10 h-10 rounded-full object-cover bg-gray-100 dark:bg-gray-700"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null; // prevent infinite loop
                            target.src = fallbackIcon;
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                            {site.name}
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 line-clamp-2">
                            {site.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <footer className="text-center py-8 mt-12 border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} 李国强的技术博客. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
