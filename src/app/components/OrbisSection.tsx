import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

export function OrbisSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [linkHovered, setLinkHovered] = useState(false);

  return (
    <section
      id="characters"
      style={{
        backgroundColor: "#0A0A0A",
        padding: "120px 80px",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "60fr 40fr",
          gap: "64px",
          alignItems: "center",
        }}
      >
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "11px",
              color: "#8B0000",
              textTransform: "uppercase",
              letterSpacing: "0.4em",
              marginBottom: "12px",
            }}
          >
            // THREAT ASSESSMENT
          </p>

          <h2
            style={{
              fontFamily: "'Archivo Narrow', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(36px, 4vw, 56px)",
              color: "#FFFFFF",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              margin: "0 0 32px 0",
            }}
          >
            HOW ORBIS WON
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: "17px",
              color: "#9CA3AF",
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            Democracy didn't fall. It was sold — one crisis at a time.
          </p>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: "17px",
              color: "#9CA3AF",
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            When floods drowned the coastlines, Orbis Terra offered relocation services.
            When farms dried up, they patented climate-resistant crops. When the power grids
            failed, they rebuilt them — privately.
          </p>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: "17px",
              color: "#E0E0E0",
              lineHeight: 1.8,
              marginBottom: "32px",
            }}
          >
            Governments outsourced everything: defense, elections, infrastructure, justice.
            There were no invasions. No revolutions. Just quiet signatures — and the end of choice.
          </p>

          <button
            onMouseEnter={() => setLinkHovered(true)}
            onMouseLeave={() => setLinkHovered(false)}
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "12px",
              color: linkHovered ? "#f0be65" : "#DCA341",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "color 0.2s ease",
            }}
          >
            EXPLORE THE WORLD →
          </button>
        </motion.div>

        {/* Right column — Orbis panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          style={{
            backgroundColor: "#111111",
            border: "1px solid #8B0000",
            padding: "56px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Concrete texture simulation */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E")`,
              backgroundSize: "300px 300px",
              opacity: 0.5,
            }}
          />

          {/* Globe crosshair icon */}
          <div style={{ position: "relative", marginBottom: "28px" }}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="28" stroke="#8B0000" strokeWidth="1.5" />
              <ellipse cx="40" cy="40" rx="14" ry="28" stroke="#8B0000" strokeWidth="1.5" />
              <line x1="12" y1="40" x2="68" y2="40" stroke="#8B0000" strokeWidth="1.5" />
              <line x1="40" y1="12" x2="40" y2="68" stroke="#8B0000" strokeWidth="1.5" />
              <circle cx="40" cy="40" r="4" fill="#8B0000" />
              <line x1="40" y1="2" x2="40" y2="12" stroke="#8B0000" strokeWidth="1.5" />
              <line x1="40" y1="68" x2="40" y2="78" stroke="#8B0000" strokeWidth="1.5" />
              <line x1="2" y1="40" x2="12" y2="40" stroke="#8B0000" strokeWidth="1.5" />
              <line x1="68" y1="40" x2="78" y2="40" stroke="#8B0000" strokeWidth="1.5" />
            </svg>
          </div>

          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "18px",
              color: "#6B7280",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              marginBottom: "14px",
              position: "relative",
            }}
          >
            DEMOCRACY IS INEFFICIENCY
          </p>

          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "22px",
              color: "#DCA341",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              position: "relative",
            }}
          >
            SECURITY THROUGH UNITY
          </p>
        </motion.div>
      </div>
    </section>
  );
}
