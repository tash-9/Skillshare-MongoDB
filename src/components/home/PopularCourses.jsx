import Link from 'next/link';
import { getTop3Courses } from '@/lib/data';
import CourseCard from '@/components/ui/CourseCard';
import { FiArrowRight } from 'react-icons/fi';

export default async function PopularCourses() {
  const courses = await getTop3Courses();

  return (
    <section className="py-24 bg-[#080b14] relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-[#1e2a45] to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#6366f1] mb-3">
              🔥 Top Rated
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
              Popular <span className="gradient-text">Courses</span>
            </h2>
            <p className="text-[#64748b] mt-2 max-w-md">
              Hand-picked by our community — start with the best.
            </p>
          </div>
          <Link
            href="/allcourses"
            className="self-start md:self-auto inline-flex items-center gap-2 text-sm font-semibold text-[#818cf8] hover:text-white border border-[#6366f1]/30 hover:border-[#6366f1] px-5 py-2.5 rounded-xl transition-all"
          >
            View All <FiArrowRight />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
