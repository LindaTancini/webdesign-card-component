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
export const AllBadges: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <Badge
        label="Default Badge"
        variant="default"
        style={{ position: "static" }}
      />
      <Badge
        label="-20% Offerta"
        variant="discount"
        style={{ position: "static" }}
      />
      <Badge
        label="Sold Out"
        variant="soldout"
        style={{ position: "static" }}
      />
    </div>
  ),
};
