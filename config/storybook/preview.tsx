import type { Preview } from "@storybook/react";
import { Theme } from "../../src/app/providers/ThemeProvider";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { SuspenseDecorator } from "../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		fetchMock: {

		},
	},
	decorators: [
		RouterDecorator,
		StyleDecorator,
		ThemeDecorator(Theme.LIGHT),
		SuspenseDecorator,
	],
};

export default preview;
