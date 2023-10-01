/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./Flex";
import { Text } from "../../Text";

const meta: Meta<typeof Flex> = {
    title: "shared/Flex",
    component: Flex,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const HStack: Story = {
    args: {
        children: (
            <>
                <Text text="Lorem first" />
                <Text text="Lorem second" />
                <Text text="Lorem third" />
                <Text text="Lorem four" />
            </>
        ),
    },
};

export const HStackGap4: Story = {
    args: {
        gap: "4",
        children: (
            <>
                <Text text="Lorem first" />
                <Text text="Lorem second" />
                <Text text="Lorem third" />
                <Text text="Lorem four" />
            </>
        ),
    },
};

export const HStackGap8: Story = {
    args: {
        gap: "8",
        children: (
            <>
                <Text text="Lorem first" />
                <Text text="Lorem second" />
                <Text text="Lorem third" />
                <Text text="Lorem four" />
            </>
        ),
    },
};

export const HStackGap16: Story = {
    args: {
        gap: "16",
        children: (
            <>
                <Text text="Lorem first" />
                <Text text="Lorem second" />
                <Text text="Lorem third" />
                <Text text="Lorem four" />
            </>
        ),
    },
};
export const HStackGap32: Story = {
    args: {
        gap: "32",
        children: (
            <>
                <Text text="Lorem first" />
                <Text text="Lorem second" />
                <Text text="Lorem third" />
                <Text text="Lorem four" />
            </>
        ),
    },
};

export const HStackJustifyStart: Story = {
    args: {
        justify: "start",
        gap: "16",
        children: (
            <>
                <Text text="Lorem first" />
                <Text text="Lorem second" />
                <Text text="Lorem third" />
                <Text text="Lorem four" />
            </>
        ),
    },
};

export const HStackJustifyCenter: Story = {
    args: {
        justify: "center",
        gap: "16",
        children: (
            <>
                <Text text="Lorem first" />
                <Text text="Lorem second" />
                <Text text="Lorem third" />
                <Text text="Lorem four" />
            </>
        ),
    },
};

export const HStackJustifyEnd: Story = {
    args: {
        justify: "end",
        gap: "16",
        children: (
            <>
                <Text text="Lorem first" />
                <Text text="Lorem second" />
                <Text text="Lorem third" />
                <Text text="Lorem four" />
            </>
        ),
    },
};

export const HStackJustifyBetween: Story = {
    args: {
        justify: "between",
        children: (
            <>
                <Text text="Lorem first" />
                <Text text="Lorem second" />
                <Text text="Lorem third" />
                <Text text="Lorem four" />
            </>
        ),
    },
};

export const HStackAlignStart: Story = {
    args: {
        align: "start",
        gap: "16",
        children: (
            <>
                <Text text="Lorem first" />
                <Text text="Lorem second" />
                <Text text="Lorem third" />
                <Text text="Lorem four" />
            </>
        ),
    },
};

export const HStackAlignCenter: Story = {
    args: {
        align: "center",
        gap: "16",
        children: (
            <>
                <Text text="Lorem first" />
                <Text text="Lorem second" />
                <Text text="Lorem third" />
                <Text text="Lorem four" />
            </>
        ),
    },
};

export const HStackAlignEnd: Story = {
    args: {
        align: "end",
        gap: "16",
        children: (
            <>
                <Text text="Lorem first" />
                <Text text="Lorem second" />
                <Text text="Lorem third" />
                <Text text="Lorem four" />
            </>
        ),
    },
};

export const VStack: Story = {
    args: {
        direction: "column",
        children: (
            <>
                <Text text="Lorem first" />
                <Text text="Lorem second" />
                <Text text="Lorem third" />
                <Text text="Lorem four" />
            </>
        ),
    },
};
