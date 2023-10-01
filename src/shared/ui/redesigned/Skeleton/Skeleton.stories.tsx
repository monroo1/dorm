import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "./Skeleton";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

const meta: Meta<typeof Skeleton> = {
    title: "shared/Skeleton/redesigned",
    component: Skeleton,
    tags: ["autodocs"],
    decorators: [NewDesignDecorator],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
    args: {
        width: "100%",
        height: 200,
    },
};

export const Circle: Story = {
    args: {
        border: "50%",
        width: 100,
        height: 100,
    },
};
