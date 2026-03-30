import NewProjetPopup from "./components/newProjetPopup";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--bg-primary)" }}>

      {/* Header */}
      <header
        className="flex justify-between items-center px-10 py-5 sticky top-0 z-40"
        style={{
          background: "linear-gradient(to bottom, #000000cc, transparent)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <h1
          className="text-4xl tracking-widest uppercase"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            color: "var(--netflix-red)",
            letterSpacing: "0.15em",
          }}
        >
          Adaverse
        </h1>
        <NewProjetPopup />
      </header>

      {/* Hero */}
      <section
        className="px-10 py-20 flex flex-col gap-3"
        style={{
          background: "linear-gradient(135deg, #1a0000 0%, #141414 60%)",
        }}
      >
        <p
          className="text-sm uppercase tracking-widest"
          style={{ color: "var(--netflix-red)", fontWeight: 600 }}
        >
          Ada Tech School
        </p>
        <h2
          className="text-6xl font-light"
          style={{ fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1 }}
        >
          Les projets des apprenants
        </h2>
        <p style={{ color: "var(--text-secondary)", maxWidth: "480px" }}>
          Découvrez les projets réalisés par les étudiants d'Ada Tech School,
          classés par catégorie et promotion.
        </p>
      </section>

      {/* Contenido principal */}
      <section className="px-10 py-8">
        <p style={{ color: "var(--text-muted)" }}>
          Les projets publiés apparaîtront ici.
        </p>
      </section>

    </main>
  );
}