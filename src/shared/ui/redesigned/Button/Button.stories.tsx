import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";
import { Text } from "../Text";

const meta: Meta<typeof Button> = {
    title: "shared/Button/redesigned",
    component: Button,
    tags: ["autodocs"],
    decorators: [NewDesignDecorator],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "Button",
    },
};

export const Outline: Story = {
    args: {
        variant: "outline",
        children: "Button",
    },
};

export const Filled: Story = {
    args: {
        variant: "filled",
        children: "Button",
    },
};

export const Clear: Story = {
    args: {
        variant: "clear",
        children: "Button",
    },
};

export const ColorNormal: Story = {
    args: {
        color: "normal",
        children: <Text text="Button" />,
    },
};

export const ColorSuccess: Story = {
    args: {
        color: "success",
        children: <Text text="Button" />,
    },
};

export const ColorError: Story = {
    args: {
        color: "error",
        children: "Button",
    },
};

export const SizeM: Story = {
    args: {
        size: "m",
        children: "Button",
    },
};

export const SizeL: Story = {
    args: {
        size: "l",
        children: "Button",
    },
};

export const SizeXL: Story = {
    args: {
        size: "xl",
        children: "Button",
    },
};

// export const OutlineRed: Story = {
//     args: {
//         children: "Button",
//         theme: ButtonTheme.OUTLINE_RED,
//     },
// };

// export const Clear: Story = {
//     args: {
//         children: "Button",
//         theme: ButtonTheme.CLEAR,
//     },
// };

// export const ClearInverted: Story = {
//     args: {
//         children: "Button",
//         theme: ButtonTheme.CLEAR_INVERTED,
//     },
// };

// export const BackgroundTheme: Story = {
//     args: {
//         children: "button",
//         theme: ButtonTheme.BACKGROUND,
//     },
// };

// export const BackgroundInverted: Story = {
//     args: {
//         children: "button",
//         theme: ButtonTheme.BACKGROUND_INVERTED,
//     },
// };

// export const SizeL: Story = {
//     args: {
//         children: "Button",
//         theme: ButtonTheme.OUTLINE,
//         size: ButtonSize.L,
//     },
// };

// export const SizeXL: Story = {
//     args: {
//         children: "Button",
//         theme: ButtonTheme.OUTLINE,
//         size: ButtonSize.XL,
//     },
// };

// export const Disabled: Story = {
//     args: {
//         children: "Button",
//         theme: ButtonTheme.OUTLINE,
//         disabled: true,
//     },
// };
