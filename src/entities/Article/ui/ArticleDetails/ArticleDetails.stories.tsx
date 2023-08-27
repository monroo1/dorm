import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import AvatarIcon from "@/shared/assets/test/avatar.jpg";
import { ArticleDetails } from "./ArticleDetails";
import { Article } from "../../model/types/article";
import {
    ArticleBlockType,
    ArticleType,
} from "../../model/consts/articleConsts";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof ArticleDetails> = {
    title: "entities/Article/ArticleDetails",
    component: ArticleDetails,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

const article: Article = {
    id: "1",
    title: "Javascript news",
    subtitle: "Что нового в JS за 2023 год?",
    img:
        "https://upload.wikimedia.org/wikipedia/commons" +
        "/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    views: 972,
    createdAt: "14.07.2023",
    user: {
        id: "1",
        username: "user",
        avatar: AvatarIcon,
    },
    type: [ArticleType.IT],
    blocks: [
        {
            id: "1",
            type: ArticleBlockType.TEXT,
            title: "Заголовок этого блока",
            paragraphs: [
                "Программа, которую по традиции называют" +
                    " «Hello, world!», очень проста. Она выводит куда-либо фразу" +
                    " «Hello, world!», или другую подобную, средствами некоего языка.",
                "JavaScript — это язык, программы" +
                    " на котором можно выполнять" +
                    " в разных средах. В нашем случае речь идёт" +
                    " о браузерах и о серверной платформе Node.js.",
                "Существуют и другие способы запуска JS-кода в браузере." +
                    " Так, если говорить об обычном использовании программ" +
                    " на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц.",
            ],
        },
        {
            id: "4",
            type: ArticleBlockType.CODE,
            code:
                "<!DOCTYPE html>\n<html>\n  <body>" +
                '\n    <p id="hello"></p>\n\n    <script>\n' +
                '      document.getElementById("hello").innerHTML' +
                ' = "Hello, world!";\n    </script>\n  </body>\n</html>',
        },
        {
            id: "5",
            type: ArticleBlockType.TEXT,
            title: "Заголовок этого блока",
            paragraphs: [
                "Программа, которую по традиции называют" +
                    " «Hello, world!», очень проста. Она выводит куда-либо фразу" +
                    " «Hello, world!», или другую подобную, средствами некоего языка.",
                "Существуют и другие способы запуска JS-кода в браузере." +
                    " Так, если говорить об обычном использовании программ" +
                    " на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц.",
            ],
        },
        {
            id: "2",
            type: ArticleBlockType.IMAGE,
            src:
                "https://hsto.org/getpro/habr/post_images" +
                "/465/185/884/465185884cda3070549c035a37a7a3e8.png",
            title: "Рисунок 1 - скриншот сайта",
        },
        {
            id: "3",
            type: ArticleBlockType.CODE,
            code:
                'const jsonServer = require("json-server")' +
                ";\n\nconst server = jsonServer.create();" +
                "\n\nconst router = jsonServer.router" +
                '(path.resolve(__dirname, "db.json"));',
        },
    ],
};

export const Normal: Story = {
    decorators: [
        StoreDecorator({
            articleDetails: {
                data: article,
            },
        }),
    ],
};

export const Dark: Story = {
    decorators: [
        StoreDecorator({
            articleDetails: {
                data: article,
            },
        }),
        ThemeDecorator(Theme.DARK),
    ],
};

export const Loading: Story = {
    decorators: [
        StoreDecorator({
            articleDetails: {
                isLoading: true,
            },
        }),
    ],
};

export const LoadingDark: Story = {
    decorators: [
        StoreDecorator({
            articleDetails: {
                isLoading: true,
            },
        }),
        ThemeDecorator(Theme.DARK),
    ],
};

export const Error: Story = {
    decorators: [
        StoreDecorator({
            articleDetails: {
                error: "error",
            },
        }),
    ],
};

export const ErrorDark: Story = {
    decorators: [
        StoreDecorator({
            articleDetails: {
                error: "error",
            },
        }),
        ThemeDecorator(Theme.DARK),
    ],
};
