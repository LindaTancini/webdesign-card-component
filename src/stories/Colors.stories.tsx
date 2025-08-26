import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonHTMLAttributes } from "react";
import "../styles/colorpalette.css";

// Definizione dei metadati per Storybook
const meta: Meta = {
  title: "Atoms/Colors", // Titolo della storia nella sidebar di Storybook
  parameters: {
    layout: "centered", // Centra il contenuto nello spazio della storia
    docs: {
      description: {
        story:
          "Questa storia mostra la palette dei colori definita nel design system. " +
          "Ogni colore è rappresentato da un pulsante ClickToCopy che permette di copiare facilmente la variabile CSS corrispondente. " +
          "Sono presenti tonalità di grigi, verde salvia e terracotta, utili per UI components e sfondi.",
      },
    },
  },
  tags: ["autodocs"], // Tag per abilitare la generazione automatica della documentazione
};

export default meta;
// Tipo per la storia basato sul meta definito sopra
type Story = StoryObj<typeof meta>;
// Definizione del componente ClickToCopy come Functional Component (React.FC)
// Accetta una prop `value` (la stringa da copiare) e tutte le altre proprietà che un normale <button> può ricevere
const ClickToCopy: React.FC<
  { value: string } & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ value, ...attrs }) => {
  return (
    <button
      className="click-to-copy" // Classe CSS per eventuali stili personalizzati
      {...attrs} // Spread delle altre props (es. onClick personalizzati, className, style, ecc.)
      style={{
        border: "none", // Rimuove il bordo predefinito
        cursor: "pointer", // Mostra il cursore "mano" al passaggio del mouse
        ...attrs.style, // Consente di sovrascrivere o aggiungere altri stili dinamici
      }}
      onClick={() => navigator.clipboard.writeText(value)} // Copia il valore negli appunti al click
      aria-label={`Copy ${value}`} // Accessibilità: descrive l’azione del bottone per screen reader
    />
  );
};

// Storia principale per visualizzare la palette di colori
export const Default: Story = {
  render: () => (
    <div>
      <h1>Colors - Card Palette </h1>

      {/* --- GRIGI NATURALI --- */}
      <h2>Gray</h2>
      <div className="container">
        {Array.from({ length: 16 }).map((_, i) => (
          <ClickToCopy
            style={{ backgroundColor: `var(--color-gray-${i})` }} // Sfondo colore grigio
            key={i} // Chiave unica per React
            value={`--color-gray-${i}`} // Valore da copiare
          />
        ))}
      </div>

      {/* --- VERDE SALVIA --- */}
      <h2>Sage</h2>
      <div className="container">
        {Array.from({ length: 16 }).map((_, i) => (
          <ClickToCopy
            style={{ backgroundColor: `var(--color-sage-${i})` }} // Sfondo colore verde salvia
            key={i} // Chiave unica per React
            value={`--color-sage-${i}`} // Valore da copiare
          />
        ))}
      </div>

      {/* --- TERRACOTTA --- */}
      <h2>Terracotta</h2>
      <div className="container">
        {Array.from({ length: 16 }).map((_, i) => (
          <ClickToCopy
            style={{ backgroundColor: `var(--color-terracotta-${i})` }} // Sfondo colore terracotta
            key={i} // Chiave unica per React
            value={`--color-terracotta-${i}`} // Valore da copiare
          />
        ))}
      </div>
    </div>
  ),
};
