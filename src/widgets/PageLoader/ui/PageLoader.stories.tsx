import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { PageLoader } from "./PageLoader";

const meta: Meta<typeof PageLoader> = {
    title: "widget/PageLoader",
    component: PageLoader,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Normal: Story = {
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
