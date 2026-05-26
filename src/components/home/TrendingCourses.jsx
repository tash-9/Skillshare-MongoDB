import Link from 'next/link';
import Image from 'next/image';
import { getTrendingCourses } from '@/lib/data';
import { FiUsers, FiArrowRight } from 'react-icons/fi';
import { HiStar, HiFire } from 'react-icons/hi';

export default async function TrendingCourses() {
  const courses = await getTrendingCourses();

  return (
    <section className="py-24 bg-[#0a0d18] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/6 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-amber-400 mb-3">
              <HiFire className="text-base" /> Trending Now
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
              🔥 Most <span className="gradient-text-gold">Enrolled</span> Courses
            </h2>
            <p className="text-[#64748b] mt-2 max-w-md">What thousands of students are diving into right now.</p>
          </div>
          <Link
            href="/allcourses"
            className="self-start inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-white border border-amber-500/30 hover:border-amber-400 px-5 py-2.5 rounded-xl transition-all"
          >
            Browse All <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.map((course, i) => (
            <Link
              href={`/courses/${course.id}`}
              key={course.id}
              className="group flex flex-col rounded-2xl overflow-hidden bg-[#0f1628] border border-[#1e2a45] hover:border-amber-500/40 transition-all hover:shadow-lg hover:shadow-amber-500/10"
            >
              <div className="relative h-36 overflow-hidden">
                <Image src={course.image} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1628]/80 to-transparent" />
                <div className="absolute top-2 left-2 w-7 h-7 rounded-lg bg-amber-500/90 flex items-center justify-center text-white text-xs font-bold">
                  #{i + 1}
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-sm font-semibold text-white line-clamp-2 mb-2 group-hover:text-amber-300 transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {course.title}
                </h3>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#1e2a45] text-xs text-[#64748b]">
                  <div className="flex items-center gap-1">
                    <FiUsers className="text-amber-400" />
                    <span>{(course.enrolledStudents / 1000).toFixed(1)}K</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#fbbf24]">
                    <HiStar />
                    <span className="text-white font-semibold">{course.rating}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
