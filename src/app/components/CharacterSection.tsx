import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const CHARACTERS = [
  {
    name: "REBEKAH CARTER",
    faction: "FOUNDER · SAFED",
    factionColor: "#DCA341",
    quote: '"I didn\'t leave power. I went to find something worth protecting."',
    image: "https://images.unsplash.com/photo-1748444355580-278e972f660b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
  },
  {
    name: "JACK ELLIS",
    faction: "MARINE RAIDER · MARSOC",
    factionColor: "#DCA341",
    quote: '"The mission doesn\'t end when the orders do."',
    image: "https://images.unsplash.com/photo-1637059880830-59a90102de77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
  },
  {
    name: "ARUANÃ",
    faction: "VOICE OF THE FOREST · TENAKIRI",
    factionColor: "#6B7280",
    quote: '"The jungle has already decided. We are only catching up."',
    image: "https://images.unsplash.com/photo-1505274664176-44ccaa7969a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
  },
];

export function CharacterSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="characters-section"
      style={{
        backgroundColor: "#111111",
        padding: "120px 80px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "11px",
              color: "#DCA341",
              textTransform: "uppercase",
              letterSpacing: "0.4em",
              marginBottom: "12px",
            }}
          >
            // OPERATIVE PROFILES
          </p>
          <h2
            style={{
              fontFamily: "'Archivo Narrow', sans-serif",
              fontWeight: 700,
              fontSize: "48px",
              color: "#FFFFFF",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            MEET THE CAST
          </h2>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            marginBottom: "48px",
          }}
        >
          {CHARACTERS.map((char, i) => (
            <CharacterCard key={char.name} char={char} delay={i * 0.1} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "13px",
              color: "#DCA341",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            VIEW ALL CHARACTERS →
          </button>
        </div>
      </div>
    </section>
  );
}

function CharacterCard({
  char,
  delay,
  inView,
}: {
  char: (typeof CHARACTERS)[0];
  delay: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#050505",
        border: `1px solid ${hovered ? "#DCA341" : "#2A2A2A"}`,
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "border-color 0.25s ease, transform 0.25s ease",
        cursor: "default",
        overflow: "hidden",
      }}
    >
      {/* Portrait */}
      <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
        <img
          src={char.image}
          alt={char.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            filter: "brightness(0.7) saturate(0.5)",
          }}
        />
        {/* Gradient from bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            background: "linear-gradient(to top, #050505 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Info */}
      <div style={{ padding: "24px" }}>
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "11px",
            color: char.factionColor,
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            marginBottom: "10px",
            borderBottom: `1px solid ${char.factionColor}`,
            paddingBottom: "8px",
          }}
        >
          {char.faction}
        </p>
        <h3
          style={{
            fontFamily: "'Archivo Narrow', sans-serif",
            fontWeight: 700,
            fontSize: "28px",
            color: "#FFFFFF",
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            margin: "0 0 12px 0",
          }}
        >
          {char.name}
        </h3>
        <p
          style={{
            fontFamily: "'Archivo Narrow', sans-serif",
            fontStyle: "italic",
            fontSize: "15px",
            color: "#9CA3AF",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {char.quote}
        </p>
      </div>
    </motion.div>
  );
}
