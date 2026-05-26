'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

const slides = [
  {
    badge: 'New Courses Available',
    heading: 'Upgrade Your Skills',
    highlight: 'Today 🚀',
    sub: 'Join 50,000+ learners mastering in-demand skills with expert-led courses.',
  },
  {
    badge: 'Industry Expert Instructors',
    heading: 'Learn from the',
    highlight: 'Best in Class',
    sub: 'World-class instructors guide you from fundamentals to advanced mastery.',
  },
  {
    badge: 'Certified Learning Paths',
    heading: 'Build Your',
    highlight: 'Dream Career',
    sub: 'Earn industry-recognized certificates and land your dream job faster.',
  },
];

const stats = [
  { value: '50K+', label: 'Students' },
  { value: '80+', label: 'Courses' },
  { value: '4.9★', label: 'Avg Rating' },
  { value: '95%', label: 'Job Rate' },
];

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#080b14]">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Slider text */}
          <div>
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              effect="fade"
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true, el: '.hero-pagination' }}
              loop
              className="hero-swiper"
            >
              {slides.map((slide, i) => (
                <SwiperSlide key={i}>
                  <div className="space-y-5 pb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                      <HiSparkles className="text-[#818cf8] text-sm" />
                      <span className="text-xs font-semibold text-[#818cf8]">{slide.badge}</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                      <span className="text-white">{slide.heading}</span>
                      <br />
                      <span className="gradient-text">{slide.highlight}</span>
                    </h1>
                    <p className="text-[#94a3b8] text-lg max-w-md leading-relaxed">{slide.sub}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination dots */}
            <div className="hero-pagination flex gap-2 mb-6" />

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/allcourses"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white btn-glow"
              >
                Start Learning <FiArrowRight />
              </Link>
              <button className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-[#94a3b8] hover:text-white border border-[#1e2a45] hover:border-[#6366f1] transition-all">
                <div className="w-8 h-8 rounded-full bg-[#6366f1]/20 flex items-center justify-center">
                  <FiPlay className="text-[#818cf8] text-xs ml-0.5" />
                </div>
                Watch Preview
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mt-10 pt-8 border-t border-[#1e2a45]">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>{stat.value}</div>
                  <div className="text-xs text-[#64748b] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="relative hidden lg:block">
            <div className="animate-float-slow">
              <Image
                src="/assets/hero-illustration.svg"
                alt="Learning illustration"
                width={600}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hero-swiper .swiper-wrapper { align-items: flex-start; }
        .hero-pagination .swiper-pagination-bullet {
          width: 8px; height: 8px;
          background: #1e2a45; opacity: 1;
          border-radius: 4px; transition: all 0.3s;
        }
        .hero-pagination .swiper-pagination-bullet-active {
          width: 24px; background: #6366f1;
        }
      `}</style>
    </section>
  );
}
