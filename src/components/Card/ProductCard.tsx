// Importazioni
import { Badge } from "../Badge/Badge";
import { Button } from "../Button/Button";
import "./ProductCard.css";

// Definizione del tipo delle proprietà della Card
export type ProductCardProps = {
  image: string; // Immagine del prodotto
  discount?: string; // Badge sconto (es. "-20%")
  soldOut?: boolean; // Indica se il prodotto è esaurito
  title: string; // Titolo del prodotto
  price: number; // Prezzo del prodotto
  onBuy?: () => void; // Funzione callback per aggiungere al carrello
};

// Definizione del componente Card come funzione React
export function ProductCard({
  image,
  discount,
  soldOut = false,
  title,
  price,
  onBuy,
}: ProductCardProps) {
  return (
    <article
      className="card-container"
      aria-label={`Prodotto: ${title}${soldOut ? " esaurito" : ""}`}
    >
      {/* Immagine */}
      <figure className="card-image">
        <img src={image} alt={`Immagine di ${title}`} />

        {/* Badge sconto */}
        {discount && (
          <>
            <Badge label={discount} variant="discount" />
            <span className="sr-only">{discount} di sconto</span>
          </>
        )}

        {/* Badge esaurito */}
        {soldOut && (
          <>
            <Badge label="Sold Out" variant="soldout" />
            <span className="sr-only">Prodotto esaurito</span>
          </>
        )}
      </figure>

      {/* Contenuto */}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">{price} €</p>
      </div>

      {/* Footer con bottone */}
      <div className="card-footer">
        <Button
          label={soldOut ? "Non disponibile" : "Aggiungi al carrello"}
          arialabel={
            soldOut
              ? `Prodotto ${title} non disponibile`
              : `Aggiungi ${title} al carrello al prezzo di ${price} euro`
          }
          size="small"
          disabled={soldOut}
          onClick={onBuy}
        />
      </div>
    </article>
  );
}
