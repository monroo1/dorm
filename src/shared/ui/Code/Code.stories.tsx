import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Code } from "./Code";

const meta: Meta<typeof Code> = {
	title: "shared/Code",
	component: Code,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Primary: Story = {
	args: {
		text: "const jsonServer = require(\"json-server\")"
        + ";\n\nconst server = jsonServer.create();"
        + "\n\nconst router = jsonServer.router"
        + "(path.resolve(__dirname, \"db.json\"));",
	},
};

export const Dark: Story = {
	args: {
		text: "const jsonServer = require(\"json-server\")"
        + ";\n\nconst server = jsonServer.create();"
        + "\n\nconst router = jsonServer.router"
        + "(path.resolve(__dirname, \"db.json\"));",
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};
