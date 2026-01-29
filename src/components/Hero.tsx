import { useState, useEffect } from 'react';

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          EcoData Solutions
          <span className="hero-subtitle">S.L.</span>
        </h1>
        <p className="hero-description">
          Plataforma inteligente de gestión de indicadores de
          <span className="highlight"> Digitalización </span>
          y
          <span className="highlight"> Sostenibilidad</span>
        </p>
        <div className="hero-buttons">
          <a href="/indicadores" className="btn-primary">
            <span>Explorar Indicadores</span>
          </a>
          <a href="/resumen" className="btn-secondary">
            <span>Ver Resumen</span>
          </a>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          background: linear-gradient(135deg, #0066CC 0%, #0052a3 100%);
          padding: 60px 40px;
          border-radius: 20px;
          margin-bottom: 40px;
          opacity: 1;
          transform: none;
          transition: none;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          color: white;
          margin: 0 0 16px 0;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          display: block;
          font-size: 0.4em;
          font-weight: 600;
          opacity: 0.9;
          margin-top: 8px;
        }

        .hero-description {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 32px;
          line-height: 1.6;
        }

        .highlight {
          font-weight: 600;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary, .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .btn-primary {
          background: #0d6efd;
          color: white;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
          color: white;
          background: #0257d5;
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
          color: white;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 40px 20px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .btn-primary, .btn-secondary {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
