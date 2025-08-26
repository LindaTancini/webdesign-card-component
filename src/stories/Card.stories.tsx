// Importazioni
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProductCard } from "../components/Card/ProductCard";

// Configurazione principale della "storia" del componente Card
const meta: Meta<typeof ProductCard> = {
  title: "Components/Card", // Nome e percorso del componente nella sidebar di Storybook
  component: ProductCard, // Il componente che verrà mostrato in Storybook
  tags: ["autodocs"], // Attiva la generazione automatica della documentazione
  argTypes: {
    // Definizione dei controlli interattivi per modificare le props in Storybook
    image: { control: "text" }, // Campo di testo per la prop "image"
    badge: { control: "text" }, // Campo di testo per la prop "badge"
    title: { control: "text" }, // Campo di testo per la prop "title"
    price: { control: "number" }, // Campo numerico per la prop "price"
    onBuy: { action: "onBuy clicked" }, // Aggiunge un'azione per il click sul bottone
  },
  parameters: {
    docs: {
      description: {
        component:
          "ProductCard è un componente UI che mostra un'immagine, un titolo, un prezzo e un bottone 'Compra ora'. È accessibile via `aria-label` e può essere riutilizzato nel design system.",
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
    image: "https://placecats.com/401/300", // Immagine di esempio
    badge: "-20%", // Badge di esempio
    title: "Titolo del Prodotto", // Titolo di esempio
    price: 29.99, // Prezzo di esempio
    onBuy: () => console.log("Hai cliccato su Compra ora"), // Funzione al click
  },
};
