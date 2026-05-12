import React from 'react';
import { useScrollAnimation } from '../hooks/useAnimations';
import { certifications } from '../data/resumeData';
import CertificationHexagon from '../components/CertificationHexagon';
import ParticleField from '../components/ParticleField';

const Certifications: React.FC = () => {
  const titleRef = useScrollAnimation('certifications', 'fadeUp');

  return (
    <section id="certifications" className="py-20 sm:py-28 bg-bg-primary relative overflow-hidden">
      <ParticleField count={45} opacity={0.06} />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className="text-4xl sm:text-5xl font-bold mb-6 text-text-primary"
          >
            Certifications & Credentials
          </h2>
          <p className="text-lg text-text-body max-w-2xl mx-auto">
            Professional certifications validating expertise in product management,
            data analytics, and strategic leadership.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certs-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '48px 32px',
          alignItems: 'start',
          justifyItems: 'center',
          textAlign: 'center',
        }}>
          {/* Row 1 - First 4 Certifications */}
          <CertificationHexagon
            badgeImage="https://cdn.builder.io/api/v1/image/assets%2F6a70318aa84d479f92752cf1ddfd6ba1%2F9c5da4db48574567991724a76577c831?format=webp&width=800&height=1200"
            name="Product Management: Building a Product Strategy"
            issuer="NASBA"
            date="2025"
            verifyLink={certifications[0]?.url || '#'}
            index={0}
          />
          <CertificationHexagon
            badgeImage="https://cdn.builder.io/api/v1/image/assets%2F6a70318aa84d479f92752cf1ddfd6ba1%2F94cef8d28ca44fba8ca7574c9616974c?format=webp&width=800&height=1200"
            name="Technical Product Management"
            issuer="PMI"
            date="2025"
            verifyLink={certifications[1]?.url || '#'}
            index={1}
          />
          <CertificationHexagon
            badgeImage="https://cdn.builder.io/api/v1/image/assets%2F6a70318aa84d479f92752cf1ddfd6ba1%2F9d3ab4e05547442d8fae81f1ce04df66?format=webp&width=800&height=1200"
            name="Product Management First Steps"
            issuer="PMI"
            date="2025"
            verifyLink={certifications[2]?.url || '#'}
            index={2}
          />

          {/* Row 2 - Next 3 Certifications */}
          <CertificationHexagon
            badgeImage="https://cdn.builder.io/api/v1/image/assets%2F6a70318aa84d479f92752cf1ddfd6ba1%2F5f2d5ae14ea7417797ac6b71da2d01c7?format=webp&width=800&height=1200"
            name="Smartsheet Project Management Expert"
            issuer="Udemy"
            date="April 2025"
            verifyLink={certifications[3]?.url || '#'}
            index={3}
          />
          <CertificationHexagon
            badgeImage="https://cdn.builder.io/api/v1/image/assets%2F6a70318aa84d479f92752cf1ddfd6ba1%2F83ed3e1aef454fb9ba763f072b345bf9?format=webp&width=800&height=1200"
            name="Lean Six Sigma Green Belt"
            issuer="PMI"
            date="Jan 2025"
            verifyLink={certifications[4]?.url || '#'}
            index={4}
          />
          <CertificationHexagon
            badgeImage="https://cdn.builder.io/api/v1/image/assets%2F6a70318aa84d479f92752cf1ddfd6ba1%2Fd1e03f0182c04adf85ba1bdada951743?format=webp&width=800&height=1200"
            name="Risk Management"
            issuer="UC Irvine"
            date="Oct 2024"
            verifyLink={certifications[5]?.url || '#'}
            index={5}
          />

          {/* Row 3 - Last 2 Certifications */}
          <CertificationHexagon
            badgeImage="https://cdn.builder.io/api/v1/image/assets%2F6a70318aa84d479f92752cf1ddfd6ba1%2Ff76bed27900a41eca78fb2b1cd6a36f0?format=webp&width=800&height=1200"
            name="Introduction to Data Engineering"
            issuer="AWS"
            date="2023"
            verifyLink={certifications[6]?.url || '#'}
            index={6}
          />
          <CertificationHexagon
            badgeImage="https://cdn.builder.io/api/v1/image/assets%2F6a70318aa84d479f92752cf1ddfd6ba1%2F906689d26180435a8862426585ff67ac?format=webp&width=800&height=1200"
            name="Marketing Analytics"
            issuer="University of Virginia"
            date="2024"
            verifyLink={certifications[7]?.url || '#'}
            index={7}
          />
        </div>
      </div>
    </section>
  );
};

export default Certifications;
