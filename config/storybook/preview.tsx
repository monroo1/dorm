import React from "react";
import type { Preview } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { SuspenseDecorator } from "../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator";
import { Theme } from "../../src/shared/const/theme";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		layout: "fullscreen",
		fetchMock: {

		},
	},
	decorators: [
		(Story) => (
			<div style={{ padding: `${20}px` }}>
				<Story />
			</div>
		),
		RouterDecorator,
		StyleDecorator,
		ThemeDecorator(Theme.LIGHT),
		SuspenseDecorator,
	],
};

export default preview;
