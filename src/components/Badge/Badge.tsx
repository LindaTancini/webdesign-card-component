//Importazioni
import "./Badge.css";

// Definizione del tipo delle proprietà accettate dal componente Badge
export type BadgeProps = {
  label: string; // Testo visibile all'interno del badge
  variant?: "default" | "discount" | "soldout"; // Variante del badge (opzionale, default: "default")
};

// Definizione del componente Badge come funzione React
export function Badge({ label, variant = "default" }: BadgeProps) {
  return (
    <span className={`badge badge-${variant}`} role="status">
      {label} {/* Contenuto testuale del badge */}
      <span className="sr-only">{` Badge: ${label} `}</span>{" "}
      {/* Testo alternativo per screen reader */}
    </span>
  );
}
