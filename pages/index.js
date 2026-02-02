import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kanbuy.estate — Find Land You Love</title>
        <meta
          name="description"
          content="Discover land for sale with flexible owner financing options."
        />
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

      {/* Main */}
      <main style={{ fontFamily: "Inter, sans-serif", color: "#003366" }}>
        {/* Hero */}
        <section
          style={{
            position: "relative",
            backgroundImage: "url(/banner.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "10rem 2rem",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.5)",
              zIndex: 1,
            }}
          ></div>
          <div style={{ position: "relative", zIndex: 2 }}>
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "700",
                marginBottom: "1rem",
              }}
            >
              Find Land You Love
            </h1>
            <p
              style={{
                maxWidth: "600px",
                margin: "0 auto 2rem",
                fontSize: "1.1rem",
              }}
            >
              Explore beautiful rural properties across the United States.
            </p>
            <a href="/properties">
              <button
                style={{
                  padding: "0.85rem 1.6rem",
                  background: "#55cc44",
                  border: "none",
                  borderRadius: "6px",
                  color: "#003366",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                View Properties
              </button>
            </a>
          </div>
        </section>

        {/* Featured Listings */}
        <section style={{ padding: "5rem 2rem", background: "#f7f9fb" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2rem",
              marginBottom: "2rem",
            }}
          >
            Featured Land
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              maxWidth: "1080px",
              margin: "auto",
            }}
          >
            {[
              "photo-1501785888041-af3ef285b470",
              "photo-1500530855697-b586d89ba3ee",
              "photo-1526510747491-8171d9dc7a8a",
            ].map((img, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                  overflow: "hidden",
                }}
              >
                <img
                  src={`https://images.unsplash.com/${img}?auto=format&fit=crop&w=800&q=60`}
                  alt="Land"
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
                <div style={{ padding: "1.5rem" }}>
                  <h3>Lot {i + 1} — Arkansas</h3>
                  <p>
                    Starting at <strong>${120 + i * 10}/month</strong>
                  </p>
                  <a href={`/property/${i + 1}`}>
                    <button
                      style={{
                        marginTop: "1rem",
                        background: "#003366",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        padding: "0.6rem 1.2rem",
                        cursor: "pointer",
                      }}
                    >
                      View Lot
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
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
