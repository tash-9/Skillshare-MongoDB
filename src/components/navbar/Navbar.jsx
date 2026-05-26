'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useSession, signOut } from '@/lib/auth-client';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { RiGraduationCapFill } from 'react-icons/ri';
import toast from 'react-hot-toast';

export default function Navbar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await signOut();
    toast.success('Logged out successfully');
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/allcourses', label: 'Courses' },
    ...(session ? [{ href: '/my-profile', label: 'My Profile' }] : []),
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1e2a45] bg-[#080b14]/90 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 relative">
              <Image src="/assets/logo.svg" alt="SkillSphere logo" fill />
            </div>
            <span className="font-bold text-lg tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Skill<span className="text-[#6366f1]">Sphere</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-[#94a3b8] hover:text-white hover:bg-[#1e2a45] rounded-lg transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            {session ? (
              <div className="flex items-center gap-3">
                <Link href="/my-profile" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  {session.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user.name || 'User'}
                      width={32}
                      height={32}
                      className="rounded-full ring-2 ring-[#6366f1]"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-[#6366f1] flex items-center justify-center text-sm font-bold text-white">
                      {(session.user?.name || 'U')[0].toUpperCase()}
                    </div>
                  )}
                  <span className="text-sm font-medium text-[#e2e8f0]">{session.user?.name?.split(' ')[0]}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-1.5 text-sm font-medium border border-[#1e2a45] text-[#94a3b8] hover:text-[#f87171] hover:border-[#f87171] rounded-lg transition-all"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-1.5 text-sm font-medium text-[#94a3b8] hover:text-white border border-[#1e2a45] hover:border-[#6366f1] rounded-lg transition-all"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-1.5 text-sm font-medium text-white bg-[#6366f1] hover:bg-[#818cf8] rounded-lg transition-all shadow-lg shadow-indigo-500/20"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-[#94a3b8] hover:text-white hover:bg-[#1e2a45] transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#1e2a45] bg-[#080b14] px-4 pb-4 pt-2">
          <ul className="space-y-1 mb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-[#94a3b8] hover:text-white hover:bg-[#1e2a45] rounded-lg transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {session ? (
            <div className="flex items-center gap-3">
              <img src={session?.user?.image || "/default-avatar.png"} alt="User" 
              className="w-9 h-9 rounded-full"
              />

              <Link href="/auth/signout" className="btn btn-sm btn-error"> Logout </Link>
              </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link href="/login" className="btn btn-sm btn-ghost"> Login </Link>
                  <Link href="/register" className="btn btn-sm btn-primary"> Register </Link>
              </div>
              )
            }
          </div>
        )
      }
    </nav>
  );
}
