import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

export function HollowlightSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <section
      id="hollowlight"
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
        style={{ maxWidth: "560px", width: "100%", textAlign: "center" }}
      >
        {/* Phoenix icon */}
        <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
          <svg width="24" height="24" viewBox="0 0 32 32" fill="#DCA341">
            <path d="M16 2C16 2 8 8 8 16c0 4.4 3.6 8 8 8s8-3.6 8-8c0-8-8-14-8-14zm0 4c0 0 4 4.5 4 10a4 4 0 01-8 0c0-5.5 4-10 4-10z" />
            <path d="M12 26c-1.5 2-4 4-4 4h16s-2.5-2-4-4" />
            <path d="M10 22c-3 1-6 0-6 0s2 4 6 5M22 22c3 1 6 0 6 0s-2 4-6 5" />
          </svg>
        </div>

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
          // JOIN THE MOVEMENT
        </p>

        <h2
          style={{
            fontFamily: "'Archivo Narrow', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(32px, 3.5vw, 44px)",
            color: "#FFFFFF",
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
            margin: "0 0 20px 0",
          }}
        >
          THE HOLLOWLIGHT NETWORK
        </h2>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "17px",
            color: "#9CA3AF",
            lineHeight: 1.7,
            marginBottom: "36px",
          }}
        >
          Dispatches from the jungle. Intelligence from Safed. Be the first to know
          when the protocol advances.
        </p>

        {/* Email row */}
        <div style={{ display: "flex", width: "100%", marginBottom: "16px" }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="YOUR EMAIL ADDRESS"
            style={{
              flex: 1,
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "13px",
              color: "#E0E0E0",
              backgroundColor: "#111111",
              border: "1px solid #DCA341",
              borderRight: "none",
              padding: "14px 20px",
              outline: "none",
              letterSpacing: "0.05em",
            }}
          />
          <button
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "12px",
              color: btnHovered ? "#050505" : "#DCA341",
              backgroundColor: btnHovered ? "#DCA341" : "transparent",
              border: "1px solid #DCA341",
              padding: "14px 28px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              cursor: "pointer",
              borderRadius: 0,
              transition: "background-color 0.2s ease, color 0.2s ease",
              whiteSpace: "nowrap",
            }}
          >
            INITIATE
          </button>
        </div>

        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "10px",
            color: "#4B5563",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          No spam. No surveillance. Just signal.
        </p>
      </motion.div>
    </section>
  );
}
