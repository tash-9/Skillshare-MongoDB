import { getCourseById, getAllCourses } from '@/lib/data';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiClock, FiUsers, FiCheckCircle } from 'react-icons/fi';
import { HiStar, HiLockClosed } from 'react-icons/hi';

export async function generateStaticParams() {
  const courses = await getAllCourses();
  return courses.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const course = await getCourseById(id);
  return {
    title: course ? `${course.title} – SkillSphere` : 'Course Not Found',
  };
}

export default async function CourseDetailsPage({ params }) {
  const { id } = await params;

  // Auth check — redirect to login if not authenticated
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    redirect(`/login?redirect=/courses/${id}`);
  }

  const course = await getCourseById(id);
  if (!course) redirect('/not-found');

  const levelColors = {
    Beginner: 'bg-green-500/20 text-green-300 border-green-500/30',
    Intermediate: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    Advanced: 'bg-red-500/20 text-red-300 border-red-500/30',
  };

  return (
    <div className="min-h-screen bg-[#080b14] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/allcourses"
          className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#818cf8] font-medium mb-8 transition-colors"
        >
          <FiArrowLeft /> Back to All Courses
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left: Image + Instructor */}
          <div className="lg:col-span-2 space-y-5">
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#0f1628]">
              <Image src={course.image} alt={course.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Instructor card */}
            <div className="p-5 rounded-2xl bg-[#0f1628] border border-[#1e2a45] flex items-center gap-4">
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(course.instructor)}&background=6366f1&color=fff&size=64`}
                alt={course.instructor}
                className="w-14 h-14 rounded-xl"
              />
              <div>
                <p className="text-xs text-[#64748b] uppercase tracking-wider mb-0.5">Instructor</p>
                <h3 className="font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>{course.instructor}</h3>
                <p className="text-xs text-[#6366f1]">{course.category} Expert</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: HiStar, label: 'Rating', value: `${course.rating} ★`, color: 'text-amber-400' },
                { icon: FiClock, label: 'Duration', value: course.duration, color: 'text-cyan-400' },
                { icon: FiUsers, label: 'Students', value: `${(course.enrolledStudents / 1000).toFixed(1)}K`, color: 'text-indigo-400' },
              ].map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="p-3 rounded-xl bg-[#0f1628] border border-[#1e2a45] text-center">
                  <Icon className={`w-4 h-4 mx-auto mb-1 ${color}`} />
                  <div className="text-sm font-bold text-white">{value}</div>
                  <div className="text-[10px] text-[#64748b]">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  {course.category}
                </span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${levelColors[course.level] || levelColors.Beginner}`}>
                  {course.level}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                {course.title}
              </h1>
              <p className="text-[#94a3b8] leading-relaxed">{course.description}</p>
            </div>

            {/* Curriculum */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                Course Curriculum
              </h2>
              <div className="space-y-2">
                {course.lessons?.map((lesson, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0f1628] border border-[#1e2a45] hover:border-[#6366f1]/30 transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-[#818cf8]">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <span className="text-sm text-[#94a3b8] group-hover:text-white transition-colors">{lesson}</span>
                    <FiCheckCircle className="w-4 h-4 text-[#1e2a45] group-hover:text-[#6366f1] ml-auto shrink-0 transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* Enroll button */}
            <button className="w-full py-4 rounded-xl font-bold text-white btn-glow text-base transition-all">
              Enroll Now — Free Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
