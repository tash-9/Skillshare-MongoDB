import { FiStar, FiUsers } from "react-icons/fi";

const instructors = [
  {
    name: "Md Jamil Hasan",
    role: "Full-Stack Developer",
    category: "Development",
    rating: 4.9,
    students: "12.4K",
    courses: 4,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
  },
  {
    name: "Samira Alam",
    role: "UX Design Lead",
    category: "Design",
    rating: 4.8,
    students: "8.9K",
    courses: 3,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
  },
  {
    name: "Dr. Rock Lee",
    role: "Data Scientist",
    category: "Data Science",
    rating: 4.9,
    students: "15.7K",
    courses: 5,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80",
  },
  {
    name: "Christiana Ronaldo",
    role: "Cybersecurity Expert",
    category: "Security",
    rating: 4.9,
    students: "7.8K",
    courses: 2,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
  },
];

export default function TopInstructors() {
  return (
    <section className="py-20 bg-[#080b14]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            Meet Our Top{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
              Instructors
            </span>
          </h2>
          <p className="text-slate-400 mt-3">
            Industry veterans with years of hands-on experience, here to guide
            your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {instructors.map((instructor) => (
            <div
              key={instructor.name}
              className="card bg-[#111827] border border-indigo-500/30 shadow-xl"
            >
              <div className="card-body items-center text-center">
                <div className="relative">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-24 h-24 rounded-3xl object-cover"
                  />
                  <span className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-[#111827] rounded-full"></span>
                </div>

                <h3 className="text-xl font-bold text-white mt-3">
                  {instructor.name}
                </h3>

                <p className="text-sm text-slate-400">{instructor.role}</p>

                <span className="badge badge-primary badge-outline mt-2">
                  {instructor.category}
                </span>

                <div className="divider"></div>

                <div className="grid grid-cols-3 w-full text-sm">
                  <div className="flex items-center justify-center gap-1 text-white">
                    <FiStar className="text-yellow-400" />
                    {instructor.rating}
                  </div>

                  <div className="flex items-center justify-center gap-1 text-slate-400">
                    <FiUsers />
                    {instructor.students}
                  </div>

                  <div className="text-white">
                    {instructor.courses} courses
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}