import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import AvatarIcon from "shared/assets/test/avatar.jpg";
import { Article, ArticleType, ArticleView } from "entities/Article";
import { ArticleBlockType } from "entities/Article/model/consts/articleConsts";
import ArticlesPage from "./ArticlesPage";
// import {ArticleBlockType, ArticleType, ArticleView,} from

const meta: Meta<typeof ArticlesPage> = {
	title: "pages/ArticlesPage",
	component: ArticlesPage,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

const article: Article = {
	id: "1",
	title: "Javascript news",
	subtitle: "Что нового в JS за 2023 год?",
	img: "https://upload.wikimedia.org/wikipedia/commons"
    + "/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
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
				"Программа, которую по традиции называют"
                + " «Hello, world!», очень проста. Она выводит куда-либо фразу"
                + " «Hello, world!», или другую подобную, средствами некоего языка.",
				"JavaScript — это язык, программы"
                + " на котором можно выполнять"
                + " в разных средах. В нашем случае речь идёт"
                + " о браузерах и о серверной платформе Node.js.",
				"Существуют и другие способы запуска JS-кода в браузере."
                + " Так, если говорить об обычном использовании программ"
                + " на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц.",

			],
		},
		{
			id: "4",
			type: ArticleBlockType.CODE,
			code: "<!DOCTYPE html>\n<html>\n  <body>"
            + "\n    <p id=\"hello\"></p>\n\n    <script>\n"
            + "      document.getElementById(\"hello\").innerHTML"
            + " = \"Hello, world!\";\n    </script>\n  </body>\n</html>",
		},
		{
			id: "5",
			type: ArticleBlockType.TEXT,
			title: "Заголовок этого блока",
			paragraphs: [
				"Программа, которую по традиции называют"
                + " «Hello, world!», очень проста. Она выводит куда-либо фразу"
                + " «Hello, world!», или другую подобную, средствами некоего языка.",
				"Существуют и другие способы запуска JS-кода в браузере."
                + " Так, если говорить об обычном использовании программ"
                + " на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц.",
			],
		},
		{
			id: "2",
			type: ArticleBlockType.IMAGE,
			src: "https://hsto.org/getpro/habr/post_images"
            + "/465/185/884/465185884cda3070549c035a37a7a3e8.png",
			title: "Рисунок 1 - скриншот сайта",
		},
		{
			id: "3",
			type: ArticleBlockType.CODE,
			code: "const jsonServer = require(\"json-server\")"
        + ";\n\nconst server = jsonServer.create();"
        + "\n\nconst router = jsonServer.router"
        + "(path.resolve(__dirname, \"db.json\"));",
		},
	],
};

export const SmallNormal: Story = {
	decorators: [
		StoreDecorator({
			articlesPage: {
				entities: {
					1: article,
					2: { ...article, id: "2" },
					3: { ...article, id: "3" },
				},
				ids: ["1", "2", "3"],
				isLoading: false,
				error: undefined,
				view: ArticleView.SMALL,
			},
		}),
	],
};

export const SmallDark: Story = {
	decorators: [
		StoreDecorator({
			articlesPage: {
				entities: {
					1: article,
					2: { ...article, id: "2" },
					3: { ...article, id: "3" },
				},
				ids: ["1", "2", "3"],
				isLoading: false,
				error: undefined,
				view: ArticleView.SMALL,
			},
		}),
		ThemeDecorator(Theme.DARK),
	],
};

export const SmallOrange: Story = {
	decorators: [
		StoreDecorator({
			articlesPage: {
				entities: {
					1: article,
					2: { ...article, id: "2" },
					3: { ...article, id: "3" },
				},
				ids: ["1", "2", "3"],
				isLoading: false,
				error: undefined,
				view: ArticleView.SMALL,
			},
		}),
		ThemeDecorator(Theme.ORANGE),
	],
};

export const BigNormal: Story = {
	decorators: [
		StoreDecorator({
			articlesPage: {
				entities: {
					1: article,
					2: { ...article, id: "2" },
					3: { ...article, id: "3" },
				},
				ids: ["1", "2", "3"],
				isLoading: false,
				error: undefined,
				view: ArticleView.BIG,
			},
		}),
	],
};

export const BigDark: Story = {
	decorators: [
		StoreDecorator({
			articlesPage: {
				entities: {
					1: article,
					2: { ...article, id: "2" },
					3: { ...article, id: "3" },
				},
				ids: ["1", "2", "3"],
				isLoading: false,
				error: undefined,
				view: ArticleView.BIG,
			},
		}),
		ThemeDecorator(Theme.DARK),
	],
};

export const BigOrange: Story = {
	decorators: [
		StoreDecorator({
			articlesPage: {
				entities: {
					1: article,
					2: { ...article, id: "2" },
					3: { ...article, id: "3" },
				},
				ids: ["1", "2", "3"],
				isLoading: false,
				error: undefined,
				view: ArticleView.BIG,
			},
		}),
		ThemeDecorator(Theme.ORANGE),
	],
};

export const SmallLoadingNormal: Story = {
	decorators: [
		StoreDecorator({
			articlesPage: {
				entities: {
				},
				ids: [],
				isLoading: true,
				error: undefined,
				view: ArticleView.SMALL,
			},
		}),
	],
};

export const SmallLoadingDark: Story = {
	decorators: [
		StoreDecorator({
			articlesPage: {
				entities: {
				},
				ids: [],
				isLoading: true,
				error: undefined,
				view: ArticleView.SMALL,
			},
		}),
		ThemeDecorator(Theme.DARK),
	],
};

export const SmallLoadingOrange: Story = {
	decorators: [
		StoreDecorator({
			articlesPage: {
				entities: {},
				ids: [],
				isLoading: true,
				error: undefined,
				view: ArticleView.SMALL,
			},
		}),
		ThemeDecorator(Theme.ORANGE),
	],
};

export const BigLoadingNormal: Story = {
	decorators: [
		StoreDecorator({
			articlesPage: {
				entities: {},
				ids: [],
				isLoading: true,
				error: undefined,
				view: ArticleView.BIG,
			},
		}),
	],
};

export const BigLoadingDark: Story = {
	decorators: [
		StoreDecorator({
			articlesPage: {
				entities: {},
				ids: [],
				isLoading: true,
				error: undefined,
				view: ArticleView.BIG,
			},
		}),
		ThemeDecorator(Theme.DARK),
	],
};

export const BigLoadingOrange: Story = {
	decorators: [
		StoreDecorator({
			articlesPage: {
				entities: {},
				ids: [],
				isLoading: true,
				error: undefined,
				view: ArticleView.BIG,
			},
		}),
		ThemeDecorator(Theme.ORANGE),
	],
};
