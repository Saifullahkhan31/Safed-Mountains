import { useRef } from "react";
import { motion, useInView } from "motion/react";

export function HookSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="world"
      style={{
        backgroundColor: "#050505",
        padding: "120px 80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ maxWidth: "760px", width: "100%", textAlign: "center" }}
      >
        {/* Eyebrow */}
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
          // SYNOPSIS
        </p>

        {/* Pull quote */}
        <p
          style={{
            fontFamily: "'Archivo Narrow', sans-serif",
            fontStyle: "italic",
            fontSize: "clamp(22px, 3vw, 32px)",
            color: "#DCA341",
            lineHeight: 1.45,
            marginBottom: "32px",
          }}
        >
          "Colonel Rebekah Carter, daughter of the U.S. President, walks away from the halls
          of power and into the jungle."
        </p>

        {/* Body */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "18px",
            color: "#9CA3AF",
            lineHeight: 1.8,
          }}
        >
          In a world where nations are bought, borders erased, and cities burned — Rebekah
          must decide what to protect, who to trust, and how far she's willing to go to stop
          a war no one believes is happening. Because the jungle remembers. And the protocol
          has already begun.
        </p>
      </motion.div>

      {/* Gold divider */}
      <div
        style={{
          marginTop: "80px",
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(220,163,65,0.3)",
        }}
      />
    </section>
  );
}
