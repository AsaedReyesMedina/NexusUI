import { addons } from "storybook/manager-api";
import { themes } from "storybook/theming";
import NexusUITheme from "./NexusUITheme";
addons.setConfig({
  theme: NexusUITheme,
});
