export const metadata = { title: 'Privacy Policy – SkillSphere' };

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#080b14] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>Privacy Policy</h1>
        <p className="text-[#64748b] mb-8">Last updated: January 2025</p>
        <div className="prose prose-invert max-w-none space-y-6 text-[#94a3b8]">
          <section>
            <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>Information We Collect</h2>
            <p>We collect information you provide directly to us, such as your name, email address, and profile photo when you create an account.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>How We Use Your Information</h2>
            <p>We use the information to provide, maintain, and improve our services, process transactions, and send you technical notices.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or destruction.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at <span className="text-[#818cf8]">privacy@skillsphere.dev</span>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
