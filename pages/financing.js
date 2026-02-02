import Head from "next/head";

export default function Financing() {
  return (
    <>
      <Head>
        <title>Financing — Kanbuy.estate</title>
      </Head>

      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.2rem 2rem",
          background: "#fff",
          borderBottom: "1px solid #eee",
          position: "sticky",
          top: 0,
          zIndex: 999,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a href="/">
            <img
              src="/logo.png"
              alt="Kanbuy Logo"
              style={{ height: "48px", cursor: "pointer" }}
            />
          </a>
          <nav
            style={{
              display: "flex",
              gap: "1.5rem",
              fontWeight: "600",
              color: "#003366",
            }}
          >
            {["Home", "Properties", "Financing", "About", "Contact"].map((n) => (
              <a
                key={n}
                href={`/${n === "Home" ? "" : n.toLowerCase()}`}
                style={{ textDecoration: "none", color: "#003366" }}
              >
                {n}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main style={{ fontFamily: "Inter, sans-serif", padding: "4rem 2rem" }}>
        <h1
          style={{
            textAlign: "center",
            color: "#003366",
            marginBottom: "1rem",
          }}
        >
          Owner Financing
        </h1>
        <p style={{ textAlign: "center", color: "#555", marginBottom: "2rem" }}>
          Buy land directly from Kanbuy with flexible monthly payments — no
          banks or credit checks required.
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87673.27088171342!2d-93.234!3d34.580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cd0b3b8d3d25f1%3A0x1ef49b5db4ce2f3f!2sGarland%20County%2C%20AR!5e0!3m2!1sen!2sus!4v1706898899964"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "1rem",
          background: "#f6f8fa",
          color: "#555",
          fontSize: ".9rem",
        }}
      >
        © {new Date().getFullYear()} Kanbuy.estate — Land made simple.
      </footer>
    </>
  );
}
