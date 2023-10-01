import type { Meta, StoryObj } from "@storybook/react";
import { StarRating } from "./StarRating";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

const meta: Meta<typeof StarRating> = {
    title: "shared/StarRating",
    component: StarRating,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Primary: Story = {
    decorators: [NewDesignDecorator],
};

export const SelectedStars: Story = {
    decorators: [NewDesignDecorator],
    args: {
        selectedStars: 3,
    },
};

export const PrimaryDeprecated: Story = {};

export const SelectedStarsDeprecated: Story = {
    args: {
        selectedStars: 3,
    },
};
