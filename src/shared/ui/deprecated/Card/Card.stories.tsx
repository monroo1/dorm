/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardTheme } from "./Card";
import { Text } from "../Text/Text";

const meta: Meta<typeof Card> = {
    title: "shared/Card/deprecated",
    component: Card,
    tags: ["autodocs"],
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

export const Outlined: Story = {
    args: {
        theme: CardTheme.OUTLINED,
        children: (
            <Text title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea suscipit!" />
        ),
    },
};
