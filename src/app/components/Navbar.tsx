import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
        backgroundColor: scrolled ? "rgba(5,5,5,0.85)" : "#050505",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: "1px solid rgba(220,163,65,0.2)",
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      {/* Logo */}
      <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: "0" }}>
        <span
          style={{
            fontFamily: "'Archivo Narrow', sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            color: "#DCA341",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          SAFED
        </span>
        <span
          style={{
            fontFamily: "'Archivo Narrow', sans-serif",
            fontWeight: 400,
            fontSize: "20px",
            color: "#6B7280",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          : ORIGINS
        </span>
      </a>

      {/* Nav Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
        {["World", "Characters", "SAGE", "Books"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: "13px",
              color: "#E0E0E0",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#DCA341")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#E0E0E0")}
          >
            {link}
          </a>
        ))}

        {/* CTA */}
        <a
          href="#books"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "11px",
            color: "#DCA341",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            textDecoration: "none",
            border: "1px solid #DCA341",
            padding: "10px 20px",
            backgroundColor: "transparent",
            transition: "background-color 0.2s ease, color 0.2s ease",
            cursor: "pointer",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#DCA341";
            e.currentTarget.style.color = "#050505";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#DCA341";
          }}
        >
          Get the Book
        </a>
      </div>
    </nav>
  );
}
