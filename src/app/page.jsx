import HeroBanner from '@/components/home/HeroBanner';
import PopularCourses from '@/components/home/PopularCourses';
import LearningTips from '@/components/home/LearningTips';
import TopInstructors from '@/components/home/TopInstructors';
import TrendingCourses from '@/components/home/TrendingCourses';

export const metadata = {
  title: 'SkillSphere – Elevate Your Skills',
  description: 'Explore expert-led courses in development, design, data science and more.',
};

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <PopularCourses />
      <LearningTips />
      <TopInstructors />
      <TrendingCourses />
    </>
  );
}
