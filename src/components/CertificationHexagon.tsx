import React from 'react';

interface CertificationHexagonProps {
  badgeImage: string;
  name: string;
  issuer: string;
  date: string;
  verifyLink: string;
  index: number;
}

const CertificationHexagon: React.FC<CertificationHexagonProps> = ({
  badgeImage,
  name,
  issuer,
  date,
  verifyLink,
  index,
}) => {

  return (
    <div
      className="cert-item"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`,
      }}
    >
      {/* Badge Wrapper */}
      <div
        className="badge-wrapper"
      >
        {/* Badge Image - Natural Shape */}
        <img
          src={badgeImage}
          alt={name}
          className="badge-image"
        />
      </div>

      {/* Certification Info Below Badge */}
      <div className="cert-name">
        <h3 className="text-lg font-bold text-text-primary">
          {name}
        </h3>
      </div>
      <div className="cert-issuer">
        <p className="text-sm text-text-muted">
          {issuer} • {date}
        </p>
      </div>
      <div className="cert-verify">
        <a
          href={verifyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-turquoise text-sm font-semibold hover:text-accent-gold transition-colors duration-300 underline"
        >
          Verify Certificate ↗
        </a>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .cert-item {
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: flex-start !important;
          text-align: center !important;
          gap: 16px !important;
        }

        .badge-wrapper,
        .cert-badge,
        [class*="badge-wrap"],
        [class*="cert-wrap"] {
          clip-path: none !important;
          -webkit-clip-path: none !important;
          transform: none !important;
          background: transparent !important;
          border: none !important;
          border-radius: 0 !important;
          width: 220px !important;
          height: 220px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          margin: 0 auto !important;
          cursor: pointer;
          transition: transform 0.3s ease, filter 0.3s ease !important;
        }

        .badge-wrapper:hover,
        .cert-badge:hover {
          transform: translateY(-6px) !important;
          transition: transform 0.3s ease, filter 0.3s ease !important;
        }

        .badge-image,
        .cert-badge img,
        [class*="badge"] img,
        [class*="cert"] img {
          clip-path: none !important;
          -webkit-clip-path: none !important;
          transform: none !important;
          object-fit: contain !important;
          object-position: center center !important;
          width: 200px !important;
          height: 200px !important;
          display: block !important;
          margin: 0 auto !important;
          background: transparent !important;
          border: none !important;
          border-radius: 0 !important;
          filter: none !important;
          transition: filter 0.3s ease !important;
        }

        .badge-wrapper:hover img,
        .cert-badge:hover img,
        [class*="badge-wrap"]:hover img,
        [class*="cert-wrap"]:hover img {
          filter: drop-shadow(0 8px 20px rgba(0, 212, 200, 0.5)) !important;
        }

        .cert-name {
          text-align: center !important;
          margin: 0 auto !important;
        }

        .cert-issuer {
          text-align: center !important;
          margin: 0 auto !important;
        }

        .cert-verify {
          text-align: center !important;
          display: block !important;
          margin: 0 auto !important;
        }
      `}</style>
    </div>
  );
};

export default CertificationHexagon;
