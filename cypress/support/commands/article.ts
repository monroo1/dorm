import { Article } from "../../../src/entities/Article";

const defaultArticle = {
	title: "TESTING ARTICLE",
	subtitle: "Что нового в JS за 2023 год?",
	img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/"
    + "Unofficial_JavaScript_logo_2.svg/"
    + "1200px-Unofficial_JavaScript_logo_2.svg.png",
	views: 972,
	createdAt: "14.07.2023",
	userId: "1",
	type: [
		"IT",
	],
	blocks: [],
};

export const createArticle = (article?: Article) => cy.request({
	method: "POST",
	url: "http://localhost:8000/articles",
	headers: { Authorization: "asda" },
	body: article ?? defaultArticle,
}).then(({ body }) => body);

export const removeArticle = (articleId: string) => cy.request({
	method: "DELETE",
	url: `http://localhost:8000/articles/${articleId}`,
	headers: { Authorization: "asda" },
});

declare global {
  namespace Cypress {
    interface Chainable {
		createArticle(article?: Article): Chainable<Article>;
        removeArticle(articleId: string): Chainable<void>;
    }
  }
}
