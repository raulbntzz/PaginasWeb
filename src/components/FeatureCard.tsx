interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export default function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  return (
    <div className="feature-card">
      <div className="feature-icon" style={{ background: color }}>
        <span>{icon}</span>
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>

      <style>{`
        .feature-card {
          position: relative;
          background: white;
          border-radius: 16px;
          padding: 32px 24px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
          overflow: hidden;
          opacity: 1;
          transform: none;
          animation: none;
        }

        .feature-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          font-size: 32px;
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 12px;
        }

        .feature-description {
          font-size: 0.95rem;
          color: #718096;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .feature-card {
            padding: 24px 20px;
          }
        }
      `}</style>
    </div>
  );
}
