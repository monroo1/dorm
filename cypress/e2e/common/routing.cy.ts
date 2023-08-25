import { selectByTestId } from "cypress/helpers/selectByTestId";

describe("Роутинг", () => {
	describe("Пользователь не авторизован", () => {
		it("Переход на главную страницу", () => {
			cy.visit("/");
			cy.get(selectByTestId("MainPage")).should("exist");
		});
		it("Переход открывает страницу профиля", () => {
			cy.visit("/profile/1");
			cy.get(selectByTestId("MainPage")).should("exist");
		});
		it("Переход на несуществующую страницу", () => {
			cy.visit("/asdasdas");
			cy.get(selectByTestId("NotFoundPage")).should("exist");
		});
	});
	describe("Пользователь авторизован под админом", () => {
		beforeEach(() => {
			cy.login("Andrey", "123");
		});
		it("Переход открывает страницу профиля", () => {
			cy.visit("/profile/1");
			cy.get(selectByTestId("ProfilePage")).should("exist");
		});
		it("Переход открывает страницу статей", () => {
			cy.visit("/articles");
			cy.get(selectByTestId("ArticlesPage")).should("exist");
		});
		it("Переход открывает панель администратора", () => {
			cy.visit("/admin");
			cy.get(selectByTestId("AdminPanelPage")).should("exist");
		});
	});
	describe("Пользователь авторизован под юзером", () => {
		beforeEach(() => {
			cy.login("Tolik", "123");
		});
		it("Переход открывает форбиден пэйдж", () => {
			cy.visit("/admin");
			cy.get(selectByTestId("ForbiddenPage")).should("exist");
		});
	});
});
