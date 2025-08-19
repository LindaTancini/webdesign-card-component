//Importazioni
import "./Button.css";

// Definizione del tipo delle proprietà accettate dal componente Button
export type ButtonProps = {
  label: string; // Testo visibile all'interno del bottone
  disabled?: boolean; // Indica se il bottone è disabilitato (opzionale, default: false)
  onClick?: () => void; // Funzione callback eseguita al click (opzionale)
  arialabel?: string; // Testo alternativo per l’accessibilità (opzionale)
  size?: "small" | "medium" | "large"; // Dimensione del bottone (opzionale, default: "medium")
};

// Definizione del componente Button come funzione React
export function Button({
  label,
  disabled = false,
  onClick,
  arialabel,
  size = "medium",
}: ButtonProps) {
  return (
    <button
      onClick={onClick} // Associa la funzione onClick
      disabled={disabled} // Applica lo stato disabilitato se true
      aria-label={arialabel} // Aggiunge etichetta accessibile per screen reader
      className={`orange-btn orange-btn-${size}`} // Classe dinamica in base alla dimensione
    >
      {label} {/* Contenuto testuale del bottone */}
    </button>
  );
}
