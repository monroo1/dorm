import { StateSchema } from "app/providers/StoreProvider";
import { ArticleView } from "entities/Article";
import {
	getArticlesPageError, getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageLimit, getArticlesPageNum, getArticlesPageView,
} from "./articlesPageSelectors";

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
	test("should return page num", () => {
		const state: DeepPartial<StateSchema> = {
			articlesPage: {
				page: 3,
			},
		};
		expect(getArticlesPageNum(state as StateSchema)).toEqual(3);
	});
	test("should return page num", () => {
		const state: DeepPartial<StateSchema> = {
			articlesPage: {
				page: 3,
			},
		};
		expect(getArticlesPageNum(state as StateSchema)).toEqual(3);
	});
	test("should return limit", () => {
		const state: DeepPartial<StateSchema> = {
			articlesPage: {
				limit: 4,
			},
		};
		expect(getArticlesPageLimit(state as StateSchema)).toEqual(4);
	});
	test("should return hasMore", () => {
		const state: DeepPartial<StateSchema> = {
			articlesPage: {
				hasMore: true,
			},
		};
		expect(getArticlesPageHasMore(state as StateSchema)).toEqual(true);
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
	test("should return page num with empty state", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getArticlesPageNum(state as StateSchema)).toEqual(1);
	});
	test("should return limit with empty state", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getArticlesPageLimit(state as StateSchema)).toEqual(9);
	});
	test("should return hasMore with empty state", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getArticlesPageHasMore(state as StateSchema)).toEqual(undefined);
	});
});
