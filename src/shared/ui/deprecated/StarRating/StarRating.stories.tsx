import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StarRating } from "./StarRating";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof StarRating> = {
    title: "shared/StarRating",
    component: StarRating,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Normal: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
