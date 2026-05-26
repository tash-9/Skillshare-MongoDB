export const metadata = { title: 'Terms & Conditions – SkillSphere' };

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#080b14] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>Terms & Conditions</h1>
        <p className="text-[#64748b] mb-8">Last updated: January 2025</p>
        <div className="space-y-6 text-[#94a3b8]">
          <section>
            <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>Acceptance of Terms</h2>
            <p>By accessing and using SkillSphere, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>Use of Service</h2>
            <p>You agree to use the service only for lawful purposes and in accordance with these Terms. You must not use the platform to distribute harmful or illegal content.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>Intellectual Property</h2>
            <p>All course content, materials, and platform code are the intellectual property of SkillSphere and may not be reproduced without written permission.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>Contact</h2>
            <p>For any questions regarding these Terms, contact us at <span className="text-[#818cf8]">legal@skillsphere.dev</span>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
