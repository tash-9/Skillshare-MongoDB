"use client";

import Link from "next/link";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-[#080b14] min-h-[calc(100vh-72px)] flex items-center">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-sm mb-6"
          >
            ✦ Learn from Industry Experts
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
          >
            Upgrade Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Skills Today 🚀
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-6 text-lg text-slate-400 max-w-xl leading-relaxed"
          >
            Join 50,000+ learners mastering in-demand skills with expert-led
            courses in development, design, marketing, and more.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-wrap gap-4">
            <Link href="/allcourses" className="btn btn-primary">
              Start Learning <FiArrowRight />
            </Link>
            <button className="btn btn-outline">
              <FiPlay /> Watch Preview
            </button>
          </motion.div>

          <motion.div
            {...fadeUp(0.4)}
            className="mt-10 pt-8 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {[
              { value: "50K+", label: "Students" },
              { value: "80+", label: "Courses" },
              { value: "4.9★", label: "Avg Rating" },
              { value: "95%", label: "Job Rate" },
            ].map(({ value, label }) => (
              <div key={label}>
                <h3 className="text-2xl font-bold text-white">{value}</h3>
                <p className="text-sm text-slate-400">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative mx-auto w-full max-w-xl rounded-3xl border border-indigo-500/30 bg-slate-900/80 p-8 shadow-2xl">
            <div className="rounded-2xl bg-[#151b31] p-6 border border-slate-700">
              <div className="space-y-4">
                <div className="h-4 w-32 bg-indigo-500 rounded-full" />
                <div className="h-3 w-52 bg-amber-500/80 rounded-full" />
                <div className="h-3 w-72 bg-slate-600 rounded-full" />
                <div className="h-3 w-44 bg-cyan-500/80 rounded-full" />
                <div className="h-3 w-60 bg-purple-500/80 rounded-full" />
              </div>
              <div className="mt-8 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/40">
                  <FiPlay className="text-white text-3xl ml-1" />
                </div>
              </div>
            </div>

            <div className="absolute -left-10 top-24 bg-indigo-600/20 border border-indigo-400 rounded-2xl p-4">
              <p className="text-xs text-indigo-300">Progress</p>
              <p className="text-white font-bold">70% Complete</p>
            </div>
            <div className="absolute -right-12 top-10 bg-amber-500/10 border border-amber-400 rounded-2xl p-4">
              <p className="text-xs text-amber-300">Live Students</p>
              <p className="text-white font-bold">2.4K</p>
            </div>
            <div className="absolute right-0 -bottom-8 bg-cyan-500/10 border border-cyan-400 rounded-2xl p-4">
              <p className="text-xs text-cyan-300">Certificate</p>
              <p className="text-white font-bold">Earned!</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}