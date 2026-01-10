export default function HomePage() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>🚀 Welcome to My Next.js App</h1>
      <p style={styles.text}>
        This app is running successfully using Next.js.
      </p>

      <div style={styles.card}>
        <h2>Status</h2>
        <p>✅ App is live</p>
        <p>🐳 Docker ready</p>
        <p>☁️ Cloud deploy friendly</p>
      </div>

      <button style={styles.button}>Get Started</button>
    </main>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f172a",
    color: "#ffffff",
    gap: "20px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
  },
  text: {
    fontSize: "18px",
    opacity: 0.8,
  },
  card: {
    backgroundColor: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    textAlign: "center",
  },
  button: {
    marginTop: "10px",
    padding: "12px 24px",
    fontSize: "16px",
    backgroundColor: "#38bdf8",
    color: "#000",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
