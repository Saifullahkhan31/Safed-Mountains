import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

export function BooksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [btnHovered, setBtnHovered] = useState(false);
  const [dlHovered, setDlHovered] = useState(false);

  return (
    <section
      id="books"
      style={{
        backgroundColor: "#0A0A0A",
        padding: "120px 80px",
      }}
    >
      <div ref={ref} style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
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
            // THE SAFED SERIES
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
            THE BOOKS
          </h2>
        </motion.div>

        {/* Two panels */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
          }}
        >
          {/* Book 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            style={{
              backgroundColor: "#111111",
              border: "1px solid #DCA341",
              overflow: "hidden",
            }}
          >
            {/* Cover */}
            <div
              style={{
                height: "360px",
                backgroundColor: "#0A0605",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(https://images.unsplash.com/photo-1598858117468-f5c77292bfa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.3) saturate(0.4)",
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  textAlign: "center",
                  padding: "40px",
                  border: "1px solid rgba(220,163,65,0.4)",
                  width: "220px",
                }}
              >
                {/* Phoenix */}
                <div style={{ marginBottom: "16px" }}>
                  <svg width="40" height="40" viewBox="0 0 32 32" fill="#DCA341">
                    <path d="M16 2C16 2 8 8 8 16c0 4.4 3.6 8 8 8s8-3.6 8-8c0-8-8-14-8-14zm0 4c0 0 4 4.5 4 10a4 4 0 01-8 0c0-5.5 4-10 4-10z" />
                    <path d="M12 26c-1.5 2-4 4-4 4h16s-2.5-2-4-4" />
                  </svg>
                </div>
                <p
                  style={{
                    fontFamily: "'Archivo Narrow', sans-serif",
                    fontWeight: 700,
                    fontSize: "22px",
                    color: "#DCA341",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    lineHeight: 1.1,
                    margin: 0,
                  }}
                >
                  SAFED:<br />ORIGINS
                </p>
              </div>
            </div>

            {/* Info */}
            <div style={{ padding: "32px" }}>
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "11px",
                  color: "#DCA341",
                  textTransform: "uppercase",
                  letterSpacing: "0.3em",
                  marginBottom: "12px",
                }}
              >
                BOOK ONE — AVAILABLE NOW
              </p>
              <h3
                style={{
                  fontFamily: "'Archivo Narrow', sans-serif",
                  fontWeight: 700,
                  fontSize: "36px",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  margin: "0 0 14px 0",
                }}
              >
                SAFED: ORIGINS
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: "15px",
                  color: "#9CA3AF",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                }}
              >
                The story of how one woman gave up power to build something more lasting than a nation.
              </p>
              <button
                onMouseEnter={() => setDlHovered(true)}
                onMouseLeave={() => setDlHovered(false)}
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "12px",
                  color: dlHovered ? "#050505" : "#DCA341",
                  backgroundColor: dlHovered ? "#DCA341" : "transparent",
                  border: "1px solid #DCA341",
                  padding: "14px 32px",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  cursor: "pointer",
                  borderRadius: 0,
                  transition: "background-color 0.2s ease, color 0.2s ease",
                }}
              >
                DOWNLOAD PDF
              </button>
            </div>
          </motion.div>

          {/* Book 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            style={{
              backgroundColor: "#111111",
              border: "1px dashed #2A2A2A",
              overflow: "hidden",
            }}
          >
            {/* Cover */}
            <div
              style={{
                height: "360px",
                backgroundColor: "#080808",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(https://images.unsplash.com/photo-1563310978-dd47a28323ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.15) saturate(0.2)",
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  textAlign: "center",
                  padding: "40px",
                  border: "1px solid rgba(139,0,0,0.4)",
                  width: "240px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Archivo Narrow', sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    color: "#6B7280",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    lineHeight: 1.1,
                    margin: "0 0 16px 0",
                  }}
                >
                  SAFED:<br />THE CONTINUUM
                </p>
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "11px",
                    color: "#8B0000",
                    textTransform: "uppercase",
                    letterSpacing: "0.3em",
                    margin: 0,
                    border: "1px solid #8B0000",
                    padding: "6px 12px",
                    display: "inline-block",
                  }}
                >
                  COMING SOON
                </p>
              </div>
            </div>

            {/* Info */}
            <div style={{ padding: "32px" }}>
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "11px",
                  color: "#6B7280",
                  textTransform: "uppercase",
                  letterSpacing: "0.3em",
                  marginBottom: "12px",
                }}
              >
                BOOK TWO — COMING SOON
              </p>
              <h3
                style={{
                  fontFamily: "'Archivo Narrow', sans-serif",
                  fontWeight: 700,
                  fontSize: "36px",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  margin: "0 0 14px 0",
                }}
              >
                SAFED: THE CONTINUUM
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: "15px",
                  color: "#6B7280",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                }}
              >
                The protocol continues. The war no one believed is already here.
              </p>
              {/* Email subscribe */}
              <div style={{ display: "flex" }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER EMAIL TO BE NOTIFIED"
                  style={{
                    flex: 1,
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "12px",
                    color: "#E0E0E0",
                    backgroundColor: "#0A0A0A",
                    border: "1px solid #2A2A2A",
                    borderRight: "none",
                    padding: "13px 16px",
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
                    color: btnHovered ? "#050505" : "#E0E0E0",
                    backgroundColor: btnHovered ? "#E0E0E0" : "transparent",
                    border: "1px solid #E0E0E0",
                    padding: "13px 20px",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    cursor: "pointer",
                    borderRadius: 0,
                    transition: "background-color 0.2s ease, color 0.2s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  NOTIFY ME
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
