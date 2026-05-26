import courses from './courses.json';

export async function getAllCourses() {
  // Simulating async fetch — in production, replace with real API
  return courses;
}

export async function getCourseById(id) {
  const course = courses.find((c) => c.id === String(id));
  return course || null;
}

export function getTop3Courses() {
  return [...courses].sort((a, b) => b.rating - a.rating).slice(0, 3);
}

export function getTrendingCourses() {
  return [...courses].sort((a, b) => b.enrolledStudents - a.enrolledStudents).slice(0, 4);
}
