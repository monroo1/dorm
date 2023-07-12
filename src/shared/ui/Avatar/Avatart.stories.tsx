import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

import AvatarImg from "./avatar.jpg";

const meta: Meta<typeof Avatar> = {
	title: "shared/Avatar",
	component: Avatar,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
	args: {
		src: AvatarImg,
		alt: "image",
	},
};

export const Large: Story = {
	args: {
		src: AvatarImg,
		alt: "image",
		size: 150,
	},
};

export const Small: Story = {
	args: {
		src: AvatarImg,
		alt: "image",
		size: 50,
	},
};
