import { useState } from "react";

const NAV_LINKS = ["World", "Characters", "SAGE", "Books", "Author"];

export function Footer() {
  const [linkHovered, setLinkHovered] = useState<string | null>(null);

  return (
    <footer
      style={{
        position: "relative",
        backgroundColor: "#050505",
        overflow: "hidden",
        borderTop: "1px solid #1F1F1F",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(https://images.unsplash.com/photo-1637059880830-59a90102de77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.12) saturate(0.3)",
        }}
      />
      {/* Top gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "60%",
          background: "linear-gradient(to bottom, #050505 0%, transparent 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "96px 80px 48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Display */}
        <h2
          style={{
            fontFamily: "'Archivo Narrow', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(36px, 5vw, 64px)",
            color: "#FFFFFF",
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            margin: "0 0 16px 0",
          }}
        >
          SAFED PROTOCOL: INITIATE
        </h2>

        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "13px",
            color: "#DCA341",
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            marginBottom: "64px",
          }}
        >
          SAFED: THE CONTINUUM — COMING SOON
        </p>

        {/* Gold divider */}
        <div
          style={{
            width: "100%",
            maxWidth: "640px",
            height: "1px",
            backgroundColor: "rgba(220,163,65,0.2)",
            marginBottom: "40px",
          }}
        />

        {/* Nav links */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onMouseEnter={() => setLinkHovered(link)}
              onMouseLeave={() => setLinkHovered(null)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "13px",
                color: linkHovered === link ? "#DCA341" : "#6B7280",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#1F1F1F",
            marginBottom: "24px",
          }}
        />

        {/* Copyright */}
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "11px",
            color: "#4B5563",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
          }}
        >
          © 2025 Chad Khan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
