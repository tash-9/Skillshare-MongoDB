'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { FiArrowLeft, FiUser, FiImage, FiSave } from 'react-icons/fi';

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [form, setForm] = useState({
    name: session?.user?.name || '',
    image: session?.user?.image || '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error('Name cannot be empty');
      return;
    }
    setLoading(true);
    try {
      await authClient.updateUser({
        name: form.name,
        image: form.image || undefined,
      });
      toast.success('Profile updated successfully!');
      router.push('/my-profile');
    } catch (err) {
      toast.error('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080b14] pt-24 pb-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-indigo-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-lg mx-auto px-4 sm:px-6 relative z-10">
        <Link
          href="/my-profile"
          className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#818cf8] font-medium mb-8 transition-colors"
        >
          <FiArrowLeft /> Back to Profile
        </Link>

        <div className="mb-6">
          <span className="text-xs font-bold tracking-widest uppercase text-[#6366f1]">Settings</span>
          <h1 className="text-2xl font-bold text-white mt-1" style={{ fontFamily: 'Syne, sans-serif' }}>
            Update Information
          </h1>
          <p className="text-sm text-[#64748b] mt-1">Change your display name and avatar URL.</p>
        </div>

        <div className="bg-[#0f1628] border border-[#1e2a45] rounded-2xl p-8 shadow-xl">
          {/* Avatar preview */}
          <div className="flex items-center gap-4 mb-7 p-4 rounded-xl bg-[#161d35] border border-[#1e2a45]">
            {form.image ? (
              <img src={form.image} alt="Preview" className="w-14 h-14 rounded-xl object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
            ) : (
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#818cf8] flex items-center justify-center text-xl font-bold text-white">
                {(form.name || 'U')[0].toUpperCase()}
              </div>
            )}
            <div>
              <p className="text-sm font-semibold text-white">{form.name || 'Your Name'}</p>
              <p className="text-xs text-[#64748b]">Profile preview</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748b] w-4 h-4" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#161d35] border border-[#1e2a45] text-[#e2e8f0] placeholder-[#64748b] focus:outline-none focus:border-[#6366f1] transition-colors text-sm"
                />
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-1.5">
                Photo URL
              </label>
              <div className="relative">
                <FiImage className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748b] w-4 h-4" />
                <input
                  type="url"
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  placeholder="https://example.com/photo.jpg"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#161d35] border border-[#1e2a45] text-[#e2e8f0] placeholder-[#64748b] focus:outline-none focus:border-[#6366f1] transition-colors text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white btn-glow disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Updating...
                </>
              ) : (
                <>
                  <FiSave className="w-4 h-4" />
                  Update Information
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
