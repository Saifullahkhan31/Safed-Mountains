import { useState, useEffect } from "react";

export function HeroSection() {
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBounce((b) => !b);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "700px",
        overflow: "hidden",
        backgroundColor: "#050505",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          filter: "brightness(0.55) saturate(0.6)",
          transform: "scale(1.05)",
        }}
      >
        <source src="/assets/heroSectionVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay bottom */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(5,5,5,0) 0%, rgba(5,5,5,0.6) 60%, rgba(5,5,5,0.97) 100%)",
        }}
      />

      {/* Top-left: Phoenix icon */}
      <div
        style={{
          position: "absolute",
          top: "80px",
          left: "80px",
          width: "32px",
          height: "32px",
          color: "#8B0000",
        }}
      >
        <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C16 2 8 8 8 16c0 4.4 3.6 8 8 8s8-3.6 8-8c0-8-8-14-8-14zm0 4c0 0 4 4.5 4 10a4 4 0 01-8 0c0-5.5 4-10 4-10z" />
          <path d="M12 26c-1.5 2-4 4-4 4h16s-2.5-2-4-4" />
          <path d="M10 22c-3 1-6 0-6 0s2 4 6 5M22 22c3 1 6 0 6 0s-2 4-6 5" />
        </svg>
      </div>

      {/* Top-right: Unmute */}
      <div
        style={{
          position: "absolute",
          top: "82px",
          right: "80px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
          color: "#6B7280",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#6B7280",
          }}
        >
          UNMUTE
        </span>
      </div>

      {/* Center content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "0 20px",
          marginTop: "-40px",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "12px",
            color: "#DCA341",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          AN EPIC SCI-FI POLITICAL THRILLER // CHAD KHAN
        </p>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Archivo Narrow', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(64px, 10vw, 96px)",
            color: "#FFFFFF",
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
            lineHeight: 0.92,
            margin: "0 0 24px 0",
          }}
        >
          SAFED:<br />ORIGINS
        </h1>

        {/* Author */}
        <p
          style={{
            fontFamily: "'Archivo Narrow', sans-serif",
            fontWeight: 400,
            fontSize: "28px",
            color: "#6B7280",
            letterSpacing: "0.2em",
            marginBottom: "24px",
          }}
        >
          By Chad Khan
        </p>

        {/* Body line */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "20px",
            color: "#D1D5DB",
            lineHeight: 1.6,
            maxWidth: "560px",
            marginBottom: "40px",
          }}
        >
          When the world collapses into chaos — governments falling, ecosystems dying,
          truth weaponized — one woman vanishes.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          <HeroButton variant="primary" label="DOWNLOAD PDF" />
          <HeroButton variant="secondary" label="ENTER THE WORLD" />
        </div>
      </div>

      {/* Bottom hint */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "11px",
            color: "#4B5563",
            textTransform: "uppercase",
            letterSpacing: "0.4em",
          }}
        >
          THE PROTOCOL HAS ALREADY BEGUN
        </span>
        <span
          style={{
            fontSize: "20px",
            color: "#4B5563",
            transform: bounce ? "translateY(6px)" : "translateY(0)",
            transition: "transform 0.4s ease",
            display: "block",
          }}
        >
          ↓
        </span>
      </div>
    </section>
  );
}

function HeroButton({ variant, label }: { variant: "primary" | "secondary"; label: string }) {
  const [hovered, setHovered] = useState(false);
  const isGold = variant === "primary";
  const borderColor = isGold ? "#DCA341" : "#E0E0E0";
  const textColor = hovered ? "#050505" : borderColor;
  const bg = hovered ? borderColor : "transparent";

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "12px",
        textTransform: "uppercase",
        letterSpacing: "0.2em",
        color: textColor,
        backgroundColor: bg,
        border: `1px solid ${borderColor}`,
        padding: "14px 32px",
        borderRadius: 0,
        cursor: "pointer",
        transition: "background-color 0.2s ease, color 0.2s ease",
      }}
    >
      {label}
    </button>
  );
}
