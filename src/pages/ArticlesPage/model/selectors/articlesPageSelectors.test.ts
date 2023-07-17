import { StateSchema } from "app/providers/StoreProvider";
import { ArticleView } from "entities/Article";
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from "./articlesPageSelectors";

describe("articlesPageSelectors.test", () => {
	test("should return isLoading", () => {
		const state: DeepPartial<StateSchema> = {
			articlesPage: {
				isLoading: false,
			},
		};
		expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(false);
	});
	test("should return view", () => {
		const state: DeepPartial<StateSchema> = {
			articlesPage: {
				view: ArticleView.BIG,
			},
		};
		expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleView.BIG);
	});
	test("should return error", () => {
		const state: DeepPartial<StateSchema> = {
			articlesPage: {
				error: "error",
			},
		};
		expect(getArticlesPageError(state as StateSchema)).toEqual("error");
	});
	test("should return isLoading with empty state", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(false);
	});
	test("should return view with empty state", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleView.SMALL);
	});
	test("should return error with empty state", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getArticlesPageError(state as StateSchema)).toEqual(undefined);
	});
});
