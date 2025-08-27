// Importazioni
import { Button } from "../Button/Button";
import "./ProductCard.css";

// Defizione del tipo delle proprietà della Card
export type ProductCardProps = {
  image: string; // Immagine del prodotto
  badge?: string; // Badge opzionale (es. "Nuovo", "In offerta")
  title: string; // Titolo del prodotto
  price: number; // Prezzo del prodotto
  onBuy?: () => void; // Funzione callback per aggiungere al carrello
};

// Definizione del componente Card come funzione React
export function ProductCard({
  image,
  badge,
  title,
  price,
  onBuy,
}: ProductCardProps) {
  return (
    <article className="card-container">
      {/* Immagine */}
      <img src={image} alt={`Immagine di ${title}`} className="card-image" />

      {/* Badge solo se presente */}
      {badge && <span className="card-badge">{badge}</span>}

      {/* Contenuto */}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">{price} €</p>
      </div>

      {/* Footer con bottone */}
      <div className="card-footer">
        <Button
          label="Compra ora"
          size="small"
          arialabel={`Compra ora: ${title}`}
          onClick={onBuy}
        />
      </div>
    </article>
  );
}
