interface StatsCardProps {
  value: number;
  label: string;
  icon: string;
  color: string;
  suffix?: string;
}

export default function StatsCard({ value, label, icon, color, suffix = '' }: StatsCardProps) {
  return (
    <div className="stats-card">
      <div className="stats-content">
        <div className="stats-icon" style={{ background: `${color}20`, color }}>
          {icon}
        </div>
        <div className="stats-info">
          <div className="stats-value" style={{ color }}>
            {value}{suffix}
          </div>
          <div className="stats-label">{label}</div>
        </div>
      </div>

      <style>{`
        .stats-card {
          position: relative;
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          opacity: 1;
          transform: none;
          animation: none;
          overflow: hidden;
        }

        .stats-content {
          display: flex;
          align-items: center;
          gap: 16px;
          position: relative;
          z-index: 2;
        }

        .stats-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          flex-shrink: 0;
        }

        .stats-info {
          flex: 1;
        }

        .stats-value {
          font-size: 2rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 4px;
          font-variant-numeric: tabular-nums;
        }

        .stats-label {
          font-size: 0.875rem;
          color: #718096;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .stats-value {
            font-size: 1.75rem;
          }

          .stats-icon {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
}
