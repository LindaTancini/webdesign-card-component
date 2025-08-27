// Importazioni
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProductCard } from "../components/Card/ProductCard";
import cuccia from "../assets/cuccia.png";
import tiragraffi from "../assets/tiragraffi.png";
import topolini from "../assets/topolini.png";

// Configurazione principale della "storia" del componente Card
const meta: Meta<typeof ProductCard> = {
  title: "Components/Card", // Nome e percorso del componente nella sidebar di Storybook
  component: ProductCard, // Il componente che verrà mostrato in Storybook
  tags: ["autodocs"], // Attiva la generazione automatica della documentazione
  argTypes: {
    // Definizione dei controlli interattivi per modificare le props in Storybook
    image: { control: "text" }, // Campo di testo per la prop "image"
    discount: { control: "text" }, // Campo di testo per la prop "discount"
    soldOut: { control: "boolean" }, // Checkbox per la prop "soldOut
    title: { control: "text" }, // Campo di testo per la prop "title"
    price: { control: "number" }, // Campo numerico per la prop "price"
    onBuy: { action: "onBuy clicked" }, // Aggiunge un'azione per il click sul bottone
  },
  parameters: {
    docs: {
      description: {
        component:
          "Il componente `ProductCard` rappresenta una scheda prodotto completa di immagine, titolo, prezzo e azione di acquisto. " +
          "Supporta badge per sconti e stato di esaurito, ed è progettato per essere accessibile e facilmente integrabile in un design system.",
      },
    },
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof ProductCard>;

// Storia di default della Card
export const Default: Story = {
  args: {
    image: cuccia, // Immagine di esempio
    title: "Cuccia Piramide Cleo", // Titolo di esempio
    price: 34.99, // Prezzo di esempio
    onBuy: () => console.log("Hai cliccato su Aggiungi al carrello"), // Funzione al click
  },
};

// Storia della Card con sconto
export const WithDiscount: Story = {
  args: {
    image: tiragraffi,
    title: "Trixie - Tiragraffi Altea",
    price: 49.99,
    discount: "-20%",
    onBuy: () => console.log("Hai cliccato su Aggiungi al carrello"),
  },
};

// Storia della Card con prodotto esaurito
export const SoldOut: Story = {
  args: {
    image: topolini,
    title: "IMAC - Set 2 Topolini con Coda",
    price: 4.99,
    soldOut: true,
  },
};
