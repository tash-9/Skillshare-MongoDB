import Link from 'next/link';
import Image from 'next/image';
import { FiClock, FiUsers, FiArrowRight } from 'react-icons/fi';
import { HiStar } from 'react-icons/hi';

const categoryColors = {
  Development: { bg: 'bg-indigo-500/20', text: 'text-indigo-300', border: 'border-indigo-500/30' },
  Design: { bg: 'bg-pink-500/20', text: 'text-pink-300', border: 'border-pink-500/30' },
  'Data Science': { bg: 'bg-cyan-500/20', text: 'text-cyan-300', border: 'border-cyan-500/30' },
  Marketing: { bg: 'bg-amber-500/20', text: 'text-amber-300', border: 'border-amber-500/30' },
  Security: { bg: 'bg-red-500/20', text: 'text-red-300', border: 'border-red-500/30' },
  Cloud: { bg: 'bg-sky-500/20', text: 'text-sky-300', border: 'border-sky-500/30' },
};

export default function CourseCard({ course }) {
  const { id, image, title, category, instructor, duration, enrolledStudents, rating, level } = course;
  const colors = categoryColors[category] || categoryColors.Development;

  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden bg-[#0f1628] border border-[#1e2a45] hover:border-[#6366f1]/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-[#161d35]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1628]/60 to-transparent" />
        <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full border ${colors.bg} ${colors.text} ${colors.border}`}>
          {category}
        </span>
        <span className="absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full bg-black/50 text-[#94a3b8] backdrop-blur-sm">
          {level}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-semibold text-[#e2e8f0] leading-snug mb-2 line-clamp-2 group-hover:text-white transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>
          {title}
        </h3>

        <div className="flex items-center gap-2 mb-4">
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(instructor)}&background=6366f1&color=fff&size=32`}
            alt={instructor}
            className="w-6 h-6 rounded-full"
          />
          <span className="text-xs text-[#64748b]">{instructor}</span>
        </div>

        <div className="flex items-center justify-between text-xs text-[#64748b] py-3 border-y border-[#1e2a45] mb-4">
          <div className="flex items-center gap-1.5">
            <FiClock className="text-[#6366f1]" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FiUsers className="text-[#6366f1]" />
            <span>{enrolledStudents?.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1.5 font-semibold text-[#fbbf24]">
            <HiStar />
            <span>{rating}</span>
          </div>
        </div>

        <div className="mt-auto">
          <Link
            href={`/courses/${id}`}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-[#818cf8] border border-[#6366f1]/30 hover:bg-[#6366f1] hover:text-white hover:border-[#6366f1] transition-all duration-200"
          >
            View Details <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
