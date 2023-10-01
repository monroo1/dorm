import type { Meta, StoryObj } from "@storybook/react";
import { Code } from "./Code";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

const meta: Meta<typeof Code> = {
    title: "shared/Code",
    component: Code,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Redesigned: Story = {
    args: {
        text:
            'const jsonServer = require("json-server")' +
            ";\n\nconst server = jsonServer.create();" +
            "\n\nconst router = jsonServer.router" +
            '(path.resolve(__dirname, "db.json"));',
    },
    decorators: [NewDesignDecorator],
};

export const Deprecated: Story = {
    args: {
        text:
            'const jsonServer = require("json-server")' +
            ";\n\nconst server = jsonServer.create();" +
            "\n\nconst router = jsonServer.router" +
            '(path.resolve(__dirname, "db.json"));',
    },
};
