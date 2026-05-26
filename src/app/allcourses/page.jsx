import { getAllCourses } from '@/lib/data';
import AllCoursesClient from './AllCoursesClient';

export const metadata = {
  title: 'All Courses – SkillSphere',
  description: 'Browse all available courses on SkillSphere.',
};

export default async function AllCoursesPage() {
  const courses = await getAllCourses();
  return <AllCoursesClient courses={courses} />;
}
