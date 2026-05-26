import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080b14] flex items-center justify-center px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="text-center relative z-10">
        <div
          className="text-[120px] md:text-[180px] font-extrabold leading-none mb-4"
          style={{
            fontFamily: 'Syne, sans-serif',
            background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          404
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
          Page Not Found
        </h1>
        <p className="text-[#64748b] max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-7 py-3.5 rounded-xl font-semibold text-white btn-glow inline-block"
          >
            Go Home
          </Link>
          <Link
            href="/allcourses"
            className="px-7 py-3.5 rounded-xl font-semibold text-[#94a3b8] border border-[#1e2a45] hover:border-[#6366f1] hover:text-white transition-all inline-block"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
