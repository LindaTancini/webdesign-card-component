// Importazioni
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, BadgeProps } from "../components/Badge/Badge";

// Configurazione principale della "storia" del componente Badge
const meta: Meta<typeof Badge> = {
  title: "Components/Badge", // Nome e percorso del componente nella sidebar di Storybook
  component: Badge, // Il componente che verrà mostrato in Storybook
  tags: ["autodocs"], // Attiva la generazione automatica della documentazione
  argTypes: {
    // Definizione dei controlli interattivi per modificare le props in Storybook
    label: { control: "text" }, // Campo di testo per la prop "label"
    arialabel: { control: "text" }, // Campo di testo per l'aria-label
    variant: {
      control: { type: "radio" }, // Scelta tramite radio button
      options: ["default", "discount", "soldout"],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Il componente `Badge` è utilizzato per mostrare etichette informative come sconti o stato di esaurito. " +
          "Supporta diverse varianti per adattarsi al contesto, come `default`, `discount` e `soldout`.",
      },
    },
    layout: "centered",
  },
};

// Tipizzazione delle storie del componente
export default meta;
type Story = StoryObj<BadgeProps>;
// Storia di default del Badge
export const Default: Story = {
  args: {
    label: "Default Badge", // Testo del badge
    arialabel: "Default Badge", // Aria-label per l’accessibilità
    variant: "default", // Variante di default
    style: { position: "static" }, // Stile per evitare problemi di posizionamento in Storybook
  },
};
// Storia di un badge di sconto
export const Discount: Story = {
  args: {
    label: "-20%", // Testo del badge
    arialabel: "-20%", // Aria-label per l’accessibilità
    variant: "discount", // Variante di sconto
    style: { position: "static" }, // Stile per evitare problemi di posizionamento in Storybook
  },
};
// Storia di un badge di esaurito
export const SoldOut: Story = {
  args: {
    label: "Sold Out", // Testo del badge
    arialabel: "Sold Out", // Aria-label per l’accessibilità
    variant: "soldout", // Variante di esaurito
    style: { position: "static" }, // Stile per evitare problemi di posizionamento in Storybook
  },
};
