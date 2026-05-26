'use client';

import { useState, useMemo } from 'react';
import CourseCard from '@/components/ui/CourseCard';
import { FiSearch, FiX } from 'react-icons/fi';

const CATEGORIES = ['All', 'Development', 'Design', 'Data Science', 'Marketing', 'Security', 'Cloud'];

export default function AllCoursesClient({ courses }) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.instructor.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'All' || c.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [courses, search, activeCategory]);

  return (
    <div className="min-h-screen bg-[#080b14] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-[#6366f1]">Explore</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2" style={{ fontFamily: 'Syne, sans-serif' }}>
            All <span className="gradient-text">Courses</span>
          </h1>
          <p className="text-[#64748b] mt-2">{courses.length} courses available</p>
        </div>

        {/* Search & Filters */}
        <div className="mb-8 space-y-4">
          {/* Search bar */}
          <div className="relative max-w-xl">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748b] w-5 h-5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses by title or instructor..."
              className="w-full pl-12 pr-10 py-3 rounded-xl bg-[#0f1628] border border-[#1e2a45] text-[#e2e8f0] placeholder-[#64748b] focus:outline-none focus:border-[#6366f1] transition-colors"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b] hover:text-white transition-colors"
              >
                <FiX />
              </button>
            )}
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                  activeCategory === cat
                    ? 'bg-[#6366f1] text-white border-[#6366f1]'
                    : 'bg-transparent text-[#64748b] border-[#1e2a45] hover:border-[#6366f1] hover:text-[#818cf8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>No courses found</h3>
            <p className="text-[#64748b]">Try adjusting your search or filter.</p>
          </div>
        ) : (
          <>
            <p className="text-sm text-[#64748b] mb-6">
              Showing <span className="text-white font-semibold">{filtered.length}</span> course{filtered.length !== 1 ? 's' : ''}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
