// app/page.tsx
import NewProjetPopup from "./components/newProjetPopup";
import ProjetsList from "./components/ProjetsList";

type Projet = {
    id: number;
    titre: string;
    slug: string;
    auteur: string | null;
    lienGithub: string;
    lienDemo: string | null;
    dateCreation: string;
    datePublication: string | null;
    promoNom: string;
    projetAdaNom: string;
    projetAdaId: number;
}

async function getProjets(): Promise<Projet[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projets`, {
        cache: "no-store",
    });
    if (!res.ok) return [];
    return res.json();
}

export default async function Home() {
    const projets = await getProjets();

    return (
        <main className="main">
            <section className="hero">
                <p className="hero__label">Ada Tech School</p>
                <h1 className="hero__title">Les projets des apprenants</h1>
                <p className="hero__description">
                    Découvrez les projets réalisés par les étudiants d'Ada Tech School,
                    classés par catégorie et promotion.
                </p>
            </section>

            <section className="projets-section">
                {projets.length === 0 ? (
                    <p>Les projets publiés apparaîtront ici.</p>
                ) : (
                    <ProjetsList projets={projets} />
                )}
            </section>
        </main>
    );
}