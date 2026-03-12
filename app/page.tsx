
"use client";
import React from "react";

import { useRef, useEffect } from "react";

export default function Home(): React.JSX.Element {
  const cardRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Card entrance animation
    if (cardRef.current) {
      cardRef.current.animate([
        { opacity: 0, transform: "translateY(60px) scale(0.95)" },
        { opacity: 1, transform: "translateY(0) scale(1)" }
      ], {
        duration: 900,
        easing: "cubic-bezier(.6,1.5,.5,1)",
        fill: "forwards"
      });
    }
    // Logo spin animation
    if (logoRef.current) {
      logoRef.current.animate([
        { transform: "rotate(-30deg) scale(0.7)" },
        { transform: "rotate(0deg) scale(1)" }
      ], {
        duration: 900,
        easing: "cubic-bezier(.6,1.5,.5,1)",
        fill: "forwards"
      });
    }
  }, []);

  // Button hover animation with Web Animations API
  const handleButtonHover = (hover: boolean) => {
    if (buttonRef.current) {
      buttonRef.current.animate([
        { transform: hover ? "none" : "translateY(-4px) scale(1.06)" },
        { transform: hover ? "translateY(-4px) scale(1.06)" : "none" }
      ], {
        duration: 220,
        fill: "forwards",
        easing: "cubic-bezier(.6,1.5,.5,1)"
      });
    }
  };

  return (
    <main style={styles.container}>
      <div style={styles.heroBg} />
      <div style={styles.gradientOverlay} />
      <section style={styles.card} ref={cardRef}>
        <div style={styles.logoCircle}>
          <span style={styles.logo} ref={logoRef}>🚀</span>
        </div>
        <h1 style={styles.title}>Next.js Docker App</h1>
        <p style={styles.subtitle}>
          <span style={{ fontWeight: 600, color: '#38bdf8' }}>Production-ready</span> application<br />
          running inside Docker
        </p>
        <div style={styles.statusBox}>
          <StatusItem label="App Status" value="Live" icon="🟢" />
          <StatusItem label="Docker" value="Ready" icon="🐳" />
          <StatusItem label="Cloud" value="Deployable" icon="☁️" />
        </div>
        <button
          style={styles.button}
          ref={buttonRef}
          onMouseOver={() => handleButtonHover(true)}
          onMouseOut={() => handleButtonHover(false)}
        >
          <span style={{ marginRight: 8, fontSize: 20 }}>✨</span> Get Started
        </button>
      </section>
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

function StatusItem({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: string;
}) {
  return (
    <div style={styles.statusItem}>
      <span style={styles.statusLabel}>{label}</span>
      <span style={styles.statusValue}>
        {icon && <span style={{ marginRight: 6 }}>{icon}</span>}
        {value}
      </span>
    </div>
  );
}

/* ---------------- TYPES ---------------- */

type StyleType = {
  container: React.CSSProperties;
  heroBg: React.CSSProperties;
  gradientOverlay: React.CSSProperties;
  card: React.CSSProperties;
  logoCircle: React.CSSProperties;
  logo: React.CSSProperties;
  title: React.CSSProperties;
  subtitle: React.CSSProperties;
  statusBox: React.CSSProperties;
  statusItem: React.CSSProperties;
  statusLabel: React.CSSProperties;
  statusValue: React.CSSProperties;
  button: React.CSSProperties;
};

/* ---------------- STYLES ---------------- */

const styles: StyleType = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    background: "linear-gradient(135deg, #bae6fd 0%, #38bdf8 100%)",
    fontFamily: "'Geist', 'Inter', 'Segoe UI', system-ui, sans-serif",
    overflow: "hidden",
    transition: "background 1s cubic-bezier(.6,1.5,.5,1)",
  },
  heroBg: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    background: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat",
    filter: "brightness(0.8) blur(2.5px)",
    pointerEvents: "none",
    transition: "filter 1.2s cubic-bezier(.6,1.5,.5,1)",
  },
  gradientOverlay: {
    position: "absolute",
    inset: 0,
    zIndex: 1,
    background: "linear-gradient(120deg, #bae6fdcc 0%, #38bdf8cc 100%)",
    pointerEvents: "none",
    transition: "background 1.2s cubic-bezier(.6,1.5,.5,1)",
  },
  card: {
    position: "relative",
    zIndex: 2,
    background: "rgba(186,230,253,0.97)",
    padding: "54px 38px 44px 38px",
    borderRadius: "32px",
    width: "410px",
    textAlign: "center",
    boxShadow: "0 12px 48px 0 rgba(56,189,248,0.18)",
    border: "1.5px solid #38bdf8",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    boxSizing: "border-box",
    margin: "0 16px",
    opacity: 0, // will animate in
    transform: "translateY(60px) scale(0.95)", // will animate in
  },
  logoCircle: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #bae6fd 0%, #38bdf8 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 18px auto",
    boxShadow: "0 4px 24px #bae6fd80",
  },
  logo: {
    fontSize: 38,
    color: "#fff",
    filter: "drop-shadow(0 2px 8px #38bdf8cc)",
    transform: "rotate(-30deg) scale(0.7)", // will animate in
    transition: "transform 0.7s cubic-bezier(.6,1.5,.5,1)",
    fontFamily: "'Geist', 'Inter', 'Segoe UI', system-ui, sans-serif",
  },
  title: {
    fontSize: "2.3rem",
    fontWeight: 900,
    color: "#0ea5e9",
    marginBottom: "10px",
    letterSpacing: "-1px",
    textShadow: "0 2px 12px #38bdf850",
    fontFamily: "'Geist', 'Inter', 'Segoe UI', system-ui, sans-serif",
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: "1.15rem",
    color: "#0369a1",
    marginBottom: "30px",
    fontWeight: 500,
    lineHeight: 1.6,
    fontFamily: "'Geist', 'Inter', 'Segoe UI', system-ui, sans-serif",
  },
  statusBox: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    marginBottom: "36px",
  },
  statusItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "13px 18px",
    background: "rgba(186,230,253,0.18)",
    borderRadius: "12px",
    border: "1.5px solid #38bdf8",
    boxShadow: "0 2px 8px #bae6fd10",
    fontSize: "1rem",
    backdropFilter: "blur(4px)",
    transition: "background 0.3s cubic-bezier(.6,1.5,.5,1)",
  },
  statusLabel: {
    color: "#0ea5e9",
    fontSize: "15px",
    fontWeight: 600,
    letterSpacing: "0.2px",
    fontFamily: "'Geist', 'Inter', 'Segoe UI', system-ui, sans-serif",
  },
  statusValue: {
    color: "#0369a1",
    fontWeight: 700,
    fontSize: "15px",
    display: "flex",
    alignItems: "center",
    gap: "2px",
    letterSpacing: "0.2px",
    fontFamily: "'Geist', 'Inter', 'Segoe UI', system-ui, sans-serif",
  },
  button: {
    width: "100%",
    padding: "16px 0",
    fontSize: "18px",
    fontWeight: 800,
    background: "linear-gradient(135deg, #bae6fd 0%, #38bdf8 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "14px",
    cursor: "pointer",
    boxShadow: "0 2px 16px #38bdf850",
    transition: "box-shadow 0.2s, transform 0.2s",
    outline: "none",
    marginTop: 8,
    letterSpacing: "1.2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    fontFamily: "'Geist', 'Inter', 'Segoe UI', system-ui, sans-serif",
    textTransform: "uppercase",
  },
};
