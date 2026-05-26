import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { FiEdit2, FiBook, FiAward, FiMail } from 'react-icons/fi';

export const metadata = {
  title: 'My Profile – SkillSphere',
};

export default async function MyProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect('/login?redirect=/my-profile');

  const { user } = session;

  return (
    <div className="min-h-screen bg-[#080b14] pt-24 pb-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8">
          <span className="text-xs font-bold tracking-widest uppercase text-[#6366f1]">Account</span>
          <h1 className="text-3xl font-bold text-white mt-2" style={{ fontFamily: 'Syne, sans-serif' }}>
            My Profile
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="md:col-span-1">
            <div className="p-6 rounded-2xl bg-[#0f1628] border border-[#1e2a45] text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                {user.image ? (
                  <img src={user.image} alt={user.name} className="w-24 h-24 rounded-2xl object-cover ring-4 ring-[#6366f1]/30" />
                ) : (
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#818cf8] flex items-center justify-center text-3xl font-bold text-white ring-4 ring-[#6366f1]/30">
                    {(user.name || 'U')[0].toUpperCase()}
                  </div>
                )}
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-[#0f1628]" />
              </div>

              <h2 className="font-bold text-xl text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>{user.name}</h2>
              <p className="text-sm text-[#64748b] mb-1 flex items-center justify-center gap-1.5">
                <FiMail className="w-3.5 h-3.5" /> {user.email}
              </p>
              <span className="inline-block mt-2 text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                Active Learner
              </span>

              <Link
                href="/my-profile/update"
                className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold border border-[#6366f1]/30 text-[#818cf8] hover:bg-[#6366f1] hover:text-white hover:border-[#6366f1] transition-all"
              >
                <FiEdit2 className="w-4 h-4" /> Update Profile
              </Link>
            </div>
          </div>

          {/* Stats & Info */}
          <div className="md:col-span-2 space-y-5">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: FiBook, label: 'Enrolled', value: '0', color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
                { icon: FiAward, label: 'Completed', value: '0', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
                { icon: FiAward, label: 'Certificates', value: '0', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
              ].map(({ icon: Icon, label, value, color, bg, border }) => (
                <div key={label} className={`p-4 rounded-xl ${bg} border ${border} text-center`}>
                  <Icon className={`w-5 h-5 mx-auto mb-2 ${color}`} />
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>{value}</div>
                  <div className="text-xs text-[#64748b]">{label}</div>
                </div>
              ))}
            </div>

            {/* Account Info */}
            <div className="p-6 rounded-2xl bg-[#0f1628] border border-[#1e2a45]">
              <h3 className="font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Account Information</h3>
              <div className="space-y-3">
                {[
                  { label: 'Full Name', value: user.name },
                  { label: 'Email Address', value: user.email },
                  { label: 'Account Status', value: 'Active' },
                  { label: 'Member Since', value: new Date(user.createdAt || Date.now()).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center py-2.5 border-b border-[#1e2a45] last:border-0">
                    <span className="text-xs text-[#64748b] uppercase tracking-wider font-semibold">{label}</span>
                    <span className="text-sm text-[#e2e8f0] font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6 rounded-2xl bg-[#0f1628] border border-[#1e2a45]">
              <h3 className="font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Quick Actions</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/allcourses" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-sm font-medium hover:bg-indigo-500/20 transition-colors">
                  <FiBook className="w-4 h-4" /> Browse Courses
                </Link>
                <Link href="/my-profile/update" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#161d35] text-[#94a3b8] border border-[#1e2a45] text-sm font-medium hover:text-white transition-colors">
                  <FiEdit2 className="w-4 h-4" /> Edit Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
