// app/components/Navbar.tsx
import Link from "next/link";
import NewProjetPopup from "./newProjetPopup";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link href="/" className="navbar__logo">
          Adaverse
        </Link>
        <div className="navbar__actions">
          <NewProjetPopup />
        </div>
      </div>
    </nav>
  );
}