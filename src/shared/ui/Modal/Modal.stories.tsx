import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Modal } from "./Modal";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof Modal> = {
	title: "shared/Modal",
	component: Modal,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
	args: {
		isOpen: true,
		children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
	},
};

export const Dark: Story = {
	args: {
		isOpen: true,
		children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
	},
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};
