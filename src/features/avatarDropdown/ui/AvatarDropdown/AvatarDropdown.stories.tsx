import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { UserRole } from "@/entities/User";
import avatarIcon from "@/shared/assets/test/avatar.jpg";
import { AvatarDropdown } from "./AvatarDropdown";

const meta: Meta<typeof AvatarDropdown> = {
    title: "features/AvatarDropdown",
    component: AvatarDropdown,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const User: Story = {
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    roles: [UserRole.USER],
                    avatar: avatarIcon,
                },
            },
        }),
    ],
};

export const Admin: Story = {
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    roles: [UserRole.ADMIN],
                    avatar: avatarIcon,
                },
            },
        }),
    ],
};
