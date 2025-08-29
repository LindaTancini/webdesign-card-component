/** @type { import('@storybook/react').Preview } */

import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";

import { MINIMAL_VIEWPORTS } from "storybook/viewport";

import "../src/styles/reset.css";
import "../src/styles/variables.css";
import "../src/styles/typography.css";

const preview: Preview = {
  parameters: {
    viewport: {
      options: MINIMAL_VIEWPORTS,
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light-theme",
        dark: "dark-theme",
      },
      defaultTheme: "light",
      parentSelector: "body",
    }),
  ],
};

export default preview;
