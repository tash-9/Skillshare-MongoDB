import { HiStar } from 'react-icons/hi';
import { FiUsers } from 'react-icons/fi';

const instructors = [
  {
    name: 'Alex Rivera',
    role: 'Full-Stack Developer',
    avatar: 'https://ui-avatars.com/api/?name=Alex+Rivera&background=6366f1&color=fff&size=128',
    rating: 4.9,
    students: 12450,
    courses: 4,
    specialty: 'Development',
  },
  {
    name: 'Sarah Chen',
    role: 'UX Design Lead',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Chen&background=ec4899&color=fff&size=128',
    rating: 4.8,
    students: 8920,
    courses: 3,
    specialty: 'Design',
  },
  {
    name: 'Dr. Marcus Lee',
    role: 'Data Scientist',
    avatar: 'https://ui-avatars.com/api/?name=Marcus+Lee&background=22d3ee&color=fff&size=128',
    rating: 4.9,
    students: 15670,
    courses: 5,
    specialty: 'Data Science',
  },
  {
    name: 'Elena Vasquez',
    role: 'Cybersecurity Expert',
    avatar: 'https://ui-avatars.com/api/?name=Elena+Vasquez&background=f59e0b&color=fff&size=128',
    rating: 4.9,
    students: 7850,
    courses: 2,
    specialty: 'Security',
  },
];

export default function TopInstructors() {
  return (
    <section className="py-24 bg-[#080b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#6366f1] mb-3">
            🏆 Expert Faculty
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
            Meet Our Top <span className="gradient-text">Instructors</span>
          </h2>
          <p className="text-[#64748b] mt-2 max-w-xl mx-auto">
            Industry veterans with years of hands-on experience, here to guide your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {instructors.map((inst, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-[#0f1628] border border-[#1e2a45] hover:border-[#6366f1]/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10 text-center"
            >
              <div className="relative w-20 h-20 mx-auto mb-4">
                <img
                  src={inst.avatar}
                  alt={inst.name}
                  className="w-20 h-20 rounded-2xl object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-[#0f1628]" />
              </div>

              <h3 className="font-bold text-white mb-0.5" style={{ fontFamily: 'Syne, sans-serif' }}>{inst.name}</h3>
              <p className="text-xs text-[#64748b] mb-3">{inst.role}</p>

              <span className="inline-block text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-4">
                {inst.specialty}
              </span>

              <div className="flex items-center justify-between text-xs text-[#64748b] pt-4 border-t border-[#1e2a45]">
                <div className="flex items-center gap-1 text-[#fbbf24]">
                  <HiStar />
                  <span className="text-white font-semibold">{inst.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiUsers className="text-[#6366f1]" />
                  <span>{(inst.students / 1000).toFixed(1)}K</span>
                </div>
                <div>
                  <span className="text-white font-semibold">{inst.courses}</span> courses
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
