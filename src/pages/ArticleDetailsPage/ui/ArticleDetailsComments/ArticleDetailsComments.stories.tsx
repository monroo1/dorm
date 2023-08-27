import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import Avatar from "@/shared/assets/test/avatar.jpg";
import { ArticleDetailsComments } from "./ArticleDetailsComments";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof ArticleDetailsComments> = {
    title: "pages/ArticleDetailsPage/ArticleDetailsComments",
    component: ArticleDetailsComments,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsComments>;

export const Normal: Story = {
    decorators: [
        StoreDecorator({
            articleDetailsPage: {
                comments: {
                    ids: ["1", "2", "3"],
                    entities: {
                        1: {
                            id: "1",
                            user: {
                                id: "1",
                                username: "user",
                                avatar: Avatar,
                            },
                            text: "string",
                        },
                        2: {
                            id: "2",
                            user: {
                                id: "2",
                                username: "tolik",
                            },
                            text: "string 2",
                        },
                        3: {
                            id: "3",
                            user: {
                                id: "3",
                                username: "andrey",
                                avatar: Avatar,
                            },
                            text: "string 3",
                        },
                    },
                },
            },
        }),
    ],
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            articleDetailsPage: {
                comments: {
                    ids: ["1", "2", "3"],
                    entities: {
                        1: {
                            id: "1",
                            user: {
                                id: "1",
                                username: "user",
                                avatar: Avatar,
                            },
                            text: "string",
                        },
                        2: {
                            id: "2",
                            user: {
                                id: "2",
                                username: "tolik",
                            },
                            text: "string 2",
                        },
                        3: {
                            id: "3",
                            user: {
                                id: "3",
                                username: "andrey",
                                avatar: Avatar,
                            },
                            text: "string 3",
                        },
                    },
                },
            },
        }),
    ],
};

export const Orange: Story = {
    decorators: [
        ThemeDecorator(Theme.ORANGE),
        StoreDecorator({
            articleDetailsPage: {
                comments: {
                    ids: ["1", "2", "3"],
                    entities: {
                        1: {
                            id: "1",
                            user: {
                                id: "1",
                                username: "user",
                                avatar: Avatar,
                            },
                            text: "string",
                        },
                        2: {
                            id: "2",
                            user: {
                                id: "2",
                                username: "tolik",
                            },
                            text: "string 2",
                        },
                        3: {
                            id: "3",
                            user: {
                                id: "3",
                                username: "andrey",
                                avatar: Avatar,
                            },
                            text: "string 3",
                        },
                    },
                },
            },
        }),
    ],
};

export const NormalLoading: Story = {
    decorators: [
        StoreDecorator({
            articleDetailsPage: {
                comments: {
                    isLoading: true,
                    ids: ["1", "2", "3"],
                    entities: {
                        1: {
                            id: "1",
                            user: {
                                id: "1",
                                username: "user",
                                avatar: Avatar,
                            },
                            text: "string",
                        },
                        2: {
                            id: "2",
                            user: {
                                id: "2",
                                username: "tolik",
                            },
                            text: "string 2",
                        },
                        3: {
                            id: "3",
                            user: {
                                id: "3",
                                username: "andrey",
                                avatar: Avatar,
                            },
                            text: "string 3",
                        },
                    },
                },
            },
        }),
    ],
};

export const DarkLoading: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            articleDetailsPage: {
                comments: {
                    isLoading: true,
                    ids: ["1", "2", "3"],
                    entities: {
                        1: {
                            id: "1",
                            user: {
                                id: "1",
                                username: "user",
                                avatar: Avatar,
                            },
                            text: "string",
                        },
                        2: {
                            id: "2",
                            user: {
                                id: "2",
                                username: "tolik",
                            },
                            text: "string 2",
                        },
                        3: {
                            id: "3",
                            user: {
                                id: "3",
                                username: "andrey",
                                avatar: Avatar,
                            },
                            text: "string 3",
                        },
                    },
                },
            },
        }),
    ],
};

export const OrangeLoading: Story = {
    decorators: [
        ThemeDecorator(Theme.ORANGE),
        StoreDecorator({
            articleDetailsPage: {
                comments: {
                    isLoading: true,
                    ids: ["1", "2", "3"],
                    entities: {
                        1: {
                            id: "1",
                            user: {
                                id: "1",
                                username: "user",
                                avatar: Avatar,
                            },
                            text: "string",
                        },
                        2: {
                            id: "2",
                            user: {
                                id: "2",
                                username: "tolik",
                            },
                            text: "string 2",
                        },
                        3: {
                            id: "3",
                            user: {
                                id: "3",
                                username: "andrey",
                                avatar: Avatar,
                            },
                            text: "string 3",
                        },
                    },
                },
            },
        }),
    ],
};
