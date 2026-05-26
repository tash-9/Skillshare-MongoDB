import { HiLightBulb, HiClock, HiBookOpen, HiTrendingUp } from 'react-icons/hi';

const tips = [
  {
    icon: HiClock,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    title: 'Pomodoro Technique',
    desc: 'Study in 25-minute focused sprints with 5-minute breaks. This method dramatically improves retention and prevents mental fatigue.',
  },
  {
    icon: HiBookOpen,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    title: 'Active Recall',
    desc: 'Instead of re-reading, test yourself. Close the material and recall key concepts from memory — it is the #1 most effective study technique.',
  },
  {
    icon: HiLightBulb,
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
    title: 'Build While You Learn',
    desc: 'Apply new concepts immediately by building mini projects. Hands-on practice solidifies understanding faster than passive consumption.',
  },
  {
    icon: HiTrendingUp,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
    title: 'Spaced Repetition',
    desc: 'Review material at increasing intervals: 1 day, 3 days, 1 week, 1 month. This leverages the forgetting curve to lock knowledge in long-term memory.',
  },
];

export default function LearningTips() {
  return (
    <section className="py-24 bg-[#0a0d18] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-600/8 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#6366f1] mb-3">
            📚 Study Smarter
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
            Learning <span className="gradient-text">Tips & Strategies</span>
          </h2>
          <p className="text-[#64748b] mt-2 max-w-xl mx-auto">
            Science-backed techniques to maximize your learning efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tips.map((tip, i) => {
            const Icon = tip.icon;
            return (
              <div
                key={i}
                className={`p-6 rounded-2xl border ${tip.border} ${tip.bg} hover:scale-105 transition-transform duration-300`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${tip.bg} border ${tip.border}`}>
                  <Icon className={`w-5 h-5 ${tip.color}`} />
                </div>
                <h3 className="font-bold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>{tip.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{tip.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
