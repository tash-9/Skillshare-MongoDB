import Link from 'next/link';
import Image from 'next/image';
import { FiTwitter, FiGithub, FiLinkedin, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-[#1e2a45] bg-[#080b14] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 relative">
                <Image src="/assets/logo.svg" alt="SkillSphere" fill />
              </div>
              <span className="font-bold text-lg" style={{ fontFamily: 'Syne, sans-serif' }}>
                Skill<span className="text-[#6366f1]">Sphere</span>
              </span>
            </Link>
            <p className="text-sm text-[#64748b] leading-relaxed mb-5">
              Empowering professionals with world-class courses in development, design, data science, and more.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: FiTwitter, href: '#' },
                { icon: FiGithub, href: '#' },
                { icon: FiLinkedin, href: '#' },
                { icon: FiYoutube, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#0f1628] border border-[#1e2a45] text-[#64748b] hover:text-[#6366f1] hover:border-[#6366f1] transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">Platform</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'All Courses', href: '/allcourses' },
                { label: 'My Profile', href: '/my-profile' },
                { label: 'Login', href: '/login' },
                { label: 'Register', href: '/register' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#64748b] hover:text-[#818cf8] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">Categories</h4>
            <ul className="space-y-2.5">
              {['Development', 'Design', 'Data Science', 'Marketing', 'Security', 'Cloud'].map((cat) => (
                <li key={cat}>
                  <Link href="/allcourses" className="text-sm text-[#64748b] hover:text-[#818cf8] transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-[#64748b]">
                <FiMail className="w-4 h-4 text-[#6366f1] shrink-0" />
                support@skillsphere.dev
              </li>
              <li className="flex items-center gap-3 text-sm text-[#64748b]">
                <FiPhone className="w-4 h-4 text-[#6366f1] shrink-0" />
                +1 (555) 234-5678
              </li>
              <li className="flex items-start gap-3 text-sm text-[#64748b]">
                <FiMapPin className="w-4 h-4 text-[#6366f1] shrink-0 mt-0.5" />
                SkilShare Innovatives, Road 6, Dhanmondi, Dhaka 1209, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1e2a45] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#64748b]">
            © {new Date().getFullYear()} SkillSphere. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="text-xs text-[#64748b] hover:text-[#818cf8] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-[#64748b] hover:text-[#818cf8] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
