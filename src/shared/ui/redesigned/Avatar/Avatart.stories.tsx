import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

import AvatarImg from "../../../assets/test/avatar.jpg";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

const meta: Meta<typeof Avatar> = {
    title: "shared/Avatar/Redesigned",
    component: Avatar,
    tags: ["autodocs"],
    decorators: [NewDesignDecorator],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        src: AvatarImg,
    },
};

export const Size: Story = {
    args: {
        src: AvatarImg,
        size: 150,
    },
};

export const Alt: Story = {
    args: {
        src: AvatarImg,
        size: 150,
        alt: "Avatar img",
    },
};
