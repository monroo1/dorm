describe("Роутинг", () => {
	describe("Пользователь не авторизован", () => {
		it("Переход на главную страницу", () => {
			cy.visit("/");
			cy.getByTestId("MainPage").should("exist");
		});
		it("Переход открывает страницу профиля", () => {
			cy.visit("/profile/1");
			cy.getByTestId("MainPage").should("exist");
		});
		it("Переход на несуществующую страницу", () => {
			cy.visit("/asdasdas");
			cy.getByTestId("NotFoundPage").should("exist");
		});
	});
	describe("Пользователь авторизован под админом", () => {
		beforeEach(() => {
			cy.login("Andrey", "123");
		});
		it("Переход открывает страницу профиля", () => {
			cy.visit("/profile/1");
			cy.getByTestId("ProfilePage").should("exist");
		});
		it("Переход открывает страницу статей", () => {
			cy.visit("/articles");
			cy.getByTestId("ArticlesPage").should("exist");
		});
		it("Переход открывает панель администратора", () => {
			cy.visit("/admin");
			cy.getByTestId("AdminPanelPage").should("exist");
		});
	});
	describe("Пользователь авторизован под юзером", () => {
		beforeEach(() => {
			cy.login("Tolik", "123");
		});
		it("Переход открывает форбиден пэйдж", () => {
			cy.visit("/admin");
			cy.getByTestId("ForbiddenPage").should("exist");
		});
	});
});
