import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import Avatar from "@/shared/assets/test/avatar.jpg";
import { EditableProfileCard } from "./EditableProfileCard";

const meta: Meta<typeof EditableProfileCard> = {
    title: "features/EditableProfileCard",
    component: EditableProfileCard,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const ReadonlyWithNotEdit: Story = {
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    username: "admin",
                    age: 22,
                    country: Country.Armenia,
                    city: "Moscow",
                    currency: Currency.USD,
                    first: "Andrey",
                    lastname: "Monroo",
                    avatar: Avatar,
                },
                readonly: true,
            },
            user: {
                authData: {},
            },
        }),
    ],
};

export const ReadonlyWithEdit: Story = {
    decorators: [
        StoreDecorator({
            profile: {
                data: {
                    id: "1",
                },
                form: {
                    username: "admin",
                    age: 22,
                    country: Country.Armenia,
                    city: "Moscow",
                    currency: Currency.USD,
                    first: "Andrey",
                    lastname: "Monroo",
                    avatar: Avatar,
                },
                readonly: true,
            },
            user: {
                authData: {
                    id: "1",
                },
            },
        }),
    ],
};

export const ActiveEdit: Story = {
    decorators: [
        StoreDecorator({
            profile: {
                data: {
                    id: "1",
                },
                form: {
                    username: "admin",
                    age: 22,
                    country: Country.Armenia,
                    city: "Moscow",
                    currency: Currency.USD,
                    first: "Andrey",
                    lastname: "Monroo",
                    avatar: Avatar,
                },
                readonly: false,
            },
            user: {
                authData: {
                    id: "1",
                },
            },
        }),
    ],
};
