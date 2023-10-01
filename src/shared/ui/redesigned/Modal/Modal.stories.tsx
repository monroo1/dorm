import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";
import { Text } from "../Text";
import { Text as TextDeprecated } from "../../deprecated/Text/Text";

const meta: Meta<typeof Modal> = {
    title: "shared/Modal",
    component: Modal,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Redesigned: Story = {
    args: {
        isOpen: true,
        children: (
            <Text
                title="Lorem ipsum"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            />
        ),
    },
    decorators: [NewDesignDecorator],
};

export const Deprecated: Story = {
    args: {
        isOpen: true,
        children: (
            <TextDeprecated
                title="Lorem ipsum"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            />
        ),
    },
};
