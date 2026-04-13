# Adaverse

Plateforme de découverte des projets réalisés par les apprenants d'Ada Tech School, classés par catégorie et promotion.

---

## Présentation

Adaverse permet à chaque apprenant de soumettre ses projets et au public de les découvrir, filtrés par type de projet ou par promotion. L'interface s'inspire visuellement des plateformes de streaming comme Netflix : des rangées de cartes par catégorie, avec aperçu visuel et accès au détail de chaque projet.

---

## Stack technique

- **Framework** : Next.js 16 (App Router)
- **Langage** : TypeScript
- **Base de données** : PostgreSQL via [Neon](https://neon.tech) (serverless)
- **ORM** : Drizzle ORM
- **Styling** : CSS vanilla avec tokens (sans framework CSS)
- **Déploiement** : Vercel

---

## Fonctionnalités

- Affichage des projets publiés, groupés par catégorie (Ada Quiz, Pokada, Adataviz…)
- Filtres combinables par promotion et par catégorie
- Page de détail pour chaque projet (GitHub, démo, auteur, promo)
- Formulaire de proposition de projet via une popup modale
- Thumbnail automatique récupérée depuis le dépôt GitHub de chaque projet

---

## Architecture des fichiers principaux

```
app/
  page.tsx                        # Homepage (Server Component)
  layout.tsx                      # Layout global
  projets/[slug]/page.tsx         # Page de détail d'un projet
  api/
    projets/route.ts              # GET tous les projets publiés
    projets/[slug]/route.ts       # GET un projet par slug
    projets-ada/route.ts          # GET types de projets Ada
    promos/route.ts               # GET promotions
  components/
    ProjetCard.tsx                # Carte de projet (Client Component)
    ProjetsList.tsx               # Liste filtrée (Client Component)
    newProjetPopup.tsx            # Formulaire de proposition (Client Component)
  actions/
    proposerProjet.ts             # Server Action de soumission
src/
  db/
    schema.ts                     # Schéma Drizzle
    seed.ts                       # Script de données initiales
  index.ts                        # Connexion à la base de données
  lib/
    utils.ts                      # Fonctions utilitaires (slug, thumbnail)
```

---

## Modèle de données

Trois tables principales :

- `projets_ada` — les types de projets proposés par Ada Tech School (Ada Quiz, Pokada, etc.)
- `promos` — les promotions d'apprenants (Frida Kahlo, Grace Hopper…)
- `projets_etudiants` — les projets soumis par les apprenants, avec clés étrangères vers les deux tables précédentes

Le champ `datePublication` est utilisé comme mécanisme de contrôle interne : seuls les projets avec une date de publication sont visibles publiquement, ce qui prépare l'implémentation future d'un système de validation admin.

---

## Lancer le projet en local

```bash
# Installer les dépendances
npm install

# Créer le fichier .env.local avec vos variables
NEXT_PUBLIC_BASE_URL=http://localhost:3000
DATABASE_URL=your_neon_database_url

# Appliquer les migrations
npx drizzle-kit push

# (Optionnel) Alimenter la base avec des données de test
npx tsx src/db/seed.ts

# Lancer le serveur de développement
npm run dev
```

---

## Évolutions prévues

- Système d'authentification avec rôles (apprenant / admin)
- Workflow de validation : un projet soumis passe par une étape de revue admin avant publication
- Page d'administration pour gérer les projets en attente
- Ajout de promotions et de types de projets via l'interface