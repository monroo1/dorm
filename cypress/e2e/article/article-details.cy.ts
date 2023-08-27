let currentArticleId = "";

describe("Пользователь заходит на страницу статьи", () => {
	beforeEach(() => {
		cy.login();
		cy.createArticle().then((article) => {
			currentArticleId = article.id;
			cy.visit(`articles/${article.id}`);
		});
	});
	afterEach(() => {
		cy.removeArticle(currentArticleId);
	});
	// TODO
	// describe("Работа с API", () => {
	// });
	// describe("Работа на стабах", () => {
	// });
	it("И видит содержиое статьи", () => {
		cy.getByTestId("ArticleDetails.Info").should("exist");
		cy.getByTestId("ArticleDetails.Title.Header").should("have.text", "TESTING ARTICLE");
	});
	it("И видит список рекомендаций", () => {
		cy.getByTestId("ArticleRecommendationsList").should("exist");
	});
	it("И оставляет комментарий", () => {
		cy.getByTestId("ArticleDetails.Info");
		cy.getByTestId("AddCommentForm").scrollIntoView();
		cy.addComment("text");
		cy.getByTestId("CommentCard.Content").should("have.length", 1);
	});
	it("И ставит оценку", () => {
		cy.getByTestId("ArticleDetails.Info");
		cy.getByTestId("RatingCard").scrollIntoView();
		cy.setRate(4, "feedback");
		cy.get("[data-selected=true]").should("have.length", 4);
	});
	it("И ставит оценку (пример с стабом на фикстурах)", () => {
		cy.intercept("GET", "**/articles/*", { fixture: "article-details.json" });
		cy.getByTestId("ArticleDetails.Info");
		cy.getByTestId("RatingCard").scrollIntoView();
		cy.setRate(4, "feedback");
		cy.get("[data-selected=true]").should("have.length", 4);
	});
});
