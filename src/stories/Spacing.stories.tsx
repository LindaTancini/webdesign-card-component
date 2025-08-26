import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import "../styles/spacing.css";

// Definizione dei metadati per Storybook
const meta: Meta = {
  title: "Atoms/Spacing", // Titolo della storia nella sidebar di Storybook
  parameters: {
    layout: "centered", // Centra il contenuto nello spazio della storia
    docs: {
      description: {
        story:
          "Questa storia mostra le principali dimensioni di spacing definite nel design system. " +
          "Ogni voce della lista rappresenta una variabile CSS (--spacing-0, --spacing-xs, etc.) e mostra sia il valore numerico reale sia un blocco visivo la cui dimensione è legata alla variabile stessa. Utile per visualizzare rapidamente gli spazi disponibili per margini, padding e layout.",
      },
    },
  },
  tags: ["autodocs"], // Tag per abilitare la generazione automatica della documentazione
};

export default meta;

// Tipo per la storia basato sul meta definito sopra
type Story = StoryObj<typeof meta>;

// Componente che legge e mostra il valore della variabile CSS passata come prop
const SpaceCalc = ({ value }: { value: string }) => {
  const spacing = React.useMemo(() => {
    // Ottiene tutti gli stili calcolati del body (dove sono definite le variabili CSS)
    const bodyStyle = window.getComputedStyle(document.body);
    // Restituisce il valore della variabile CSS specificata (es: --spacing-sm)
    return bodyStyle.getPropertyValue(value);
  }, [value]); // Ricalcola solo se cambia il nome della variabile

  return <span>{spacing}</span>; // Visualizza il valore testuale (es: "16px")
};

// Definizione della storia Storybook Default
export const Default: Story = {
  render: () => (
    <>
      {/* Lista descrittiva per ogni dimensione di spacing */}
      <dl>
        {["0", "xs", "sm", "md", "lg", "xl"].map((key) => (
          <React.Fragment key={key}>
            {/* Etichetta della dimensione (es: "sm") */}
            <dt>{key}</dt>
            {/* Valore e blocco visivo, con variabile CSS dinamica per dimensione */}
            <dd
              style={
                {
                  "--story-spacing": `var(--spacing-${key})`,
                } as React.CSSProperties
              }
            >
              <span>
                {/* Mostra il valore numerico reale della variabile CSS */}
                <SpaceCalc value={`--spacing-${key}`} />
              </span>
              {/* Blocco verde la cui dimensione è legata alla variabile CSS */}
              <span className="info-spacing" />
            </dd>
          </React.Fragment>
        ))}
      </dl>
    </>
  ),
};
