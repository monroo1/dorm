/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Text } from "../Text/Text";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

const meta: Meta<typeof Card> = {
    title: "shared/Card/redesigned",
    component: Card,
    tags: ["autodocs"],
    decorators: [NewDesignDecorator],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    args: {
        children: (
            <Text title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea suscipit!" />
        ),
    },
};

export const LightVariant: Story = {
    args: {
        variant: "light",
        children: (
            <Text title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea suscipit!" />
        ),
    },
};

export const NormalVariant: Story = {
    args: {
        variant: "normal",
        children: (
            <Text title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea suscipit!" />
        ),
    },
};

export const OutlinedVariant: Story = {
    args: {
        variant: "outlined",
        children: (
            <Text title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea suscipit!" />
        ),
    },
};

export const Padding8: Story = {
    args: {
        padding: "8",
        children: (
            <Text title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea suscipit!" />
        ),
    },
};

export const Padding16: Story = {
    args: {
        padding: "16",
        children: (
            <Text title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea suscipit!" />
        ),
    },
};

export const Padding24: Story = {
    args: {
        padding: "24",
        children: (
            <Text title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea suscipit!" />
        ),
    },
};

export const BorderNormal: Story = {
    args: {
        border: "normal",
        padding: "8",
        children: (
            <Text title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea suscipit!" />
        ),
    },
};

export const BorderPartial: Story = {
    args: {
        border: "partial",
        padding: "8",
        children: (
            <Text title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea suscipit!" />
        ),
    },
};

export const BorderRound: Story = {
    args: {
        border: "round",
        padding: "8",
        children: (
            <Text title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea suscipit!" />
        ),
    },
};
