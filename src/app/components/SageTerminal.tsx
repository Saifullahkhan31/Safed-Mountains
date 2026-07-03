import { useRef, useState, useEffect } from "react";
import { useInView } from "motion/react";
import { motion } from "motion/react";

const TERMINAL_LINES = [
  "> SYSTEM LOG: INITIATED",
  "> Processing legacy protocols...",
  "> Cross-referencing Orbis data nodes...",
  '> "When she stopped speaking, I began to act."',
  "> SAFED PROTOCOL: ACTIVE",
  "> AWAITING COMMAND_",
];

export function SageTerminal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursorBlink, setCursorBlink] = useState(true);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const interval = setInterval(() => {
      current++;
      setVisibleLines(current);
      if (current >= TERMINAL_LINES.length) clearInterval(interval);
    }, 550);
    return () => clearInterval(interval);
  }, [inView]);

  useEffect(() => {
    const blink = setInterval(() => setCursorBlink((b) => !b), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <section
      id="sage"
      style={{
        backgroundColor: "#000000",
        padding: "120px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(74,222,128,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />
      {/* Center glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(74,222,128,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        ref={ref}
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "11px",
              color: "#4ADE80",
              textTransform: "uppercase",
              letterSpacing: "0.4em",
              marginBottom: "12px",
            }}
          >
            // AI SYSTEM — ACTIVE
          </p>

          <h2
            style={{
              fontFamily: "'Archivo Narrow', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(52px, 5vw, 72px)",
              color: "#FFFFFF",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              margin: "0 0 12px 0",
            }}
          >
            SAGE
          </h2>

          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "13px",
              color: "#4ADE80",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              marginBottom: "28px",
            }}
          >
            SELF-ADAPTIVE GUIDANCE ENGINE
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
            Created by Rebekah Carter, SAGE isn't a tool or a system. It's the first thing
            Rebekah ever built — and the only thing she truly trusted.
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
            She began coding it as a child. As she grew, so did SAGE — secretly integrated into
            military networks, intelligence feeds, and hidden vaults.
          </p>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: "17px",
              color: "#E0E0E0",
              lineHeight: 1.8,
            }}
          >
            And when Rebekah disappears, SAGE doesn't shut down.
          </p>
        </motion.div>

        {/* Right — Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          style={{
            backgroundColor: "#020A02",
            border: "1px solid #4ADE80",
            boxShadow: "0 0 40px rgba(74,222,128,0.15)",
            overflow: "hidden",
          }}
        >
          {/* Terminal top bar */}
          <div
            style={{
              backgroundColor: "#040F04",
              borderBottom: "1px solid rgba(74,222,128,0.3)",
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", gap: "6px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#4ADE80", opacity: 0.7 }} />
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#4ADE80", opacity: 0.4 }} />
            </div>
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "11px",
                color: "#4ADE80",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}
            >
              SAGE // ACTIVE MONITORING
            </span>
          </div>

          {/* Terminal body */}
          <div style={{ padding: "28px 24px", minHeight: "280px" }}>
            {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "13px",
                  color: "#4ADE80",
                  lineHeight: 2,
                  margin: 0,
                }}
              >
                {line}
              </p>
            ))}
            {visibleLines < TERMINAL_LINES.length && (
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "13px",
                  color: "#4ADE80",
                  opacity: cursorBlink ? 1 : 0,
                  transition: "opacity 0.1s",
                }}
              >
                █
              </span>
            )}
            {visibleLines >= TERMINAL_LINES.length && (
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "13px",
                  color: "#4ADE80",
                  opacity: cursorBlink ? 1 : 0,
                  transition: "opacity 0.1s",
                }}
              >
                _
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
