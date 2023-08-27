import { StateSchema } from "@/app/providers/StoreProvider";
import { ArticleSortField, ArticleType, ArticleView } from "@/entities/Article";
import {
    getArticlesPageError,
    getArticlesPageHasMore,
    getArticlesPageInited,
    getArticlesPageIsLoading,
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
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
        expect(getArticlesPageView(state as StateSchema)).toEqual(
            ArticleView.BIG,
        );
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
    test("should return _inited", () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                _inited: true,
            },
        };
        expect(getArticlesPageInited(state as StateSchema)).toEqual(true);
    });
    test("should return sort", () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                sort: ArticleSortField.TITLE,
            },
        };
        expect(getArticlesPageSort(state as StateSchema)).toEqual("title");
    });
    test("should return order", () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                order: "asc",
            },
        };
        expect(getArticlesPageOrder(state as StateSchema)).toEqual("asc");
    });
    test("should return search", () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                search: "value",
            },
        };
        expect(getArticlesPageSearch(state as StateSchema)).toEqual("value");
    });
    test("should return type page", () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                type: ArticleType.ALL,
            },
        };
        expect(getArticlesPageType(state as StateSchema)).toEqual(
            ArticleType.ALL,
        );
    });
    test("should return isLoading with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(false);
    });
    test("should return view with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageView(state as StateSchema)).toEqual(
            ArticleView.SMALL,
        );
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
    test("should return _inited with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageInited(state as StateSchema)).toEqual(undefined);
    });
    test("should return sort with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageSort(state as StateSchema)).toEqual(
            ArticleSortField.CREATED,
        );
    });
    test("should return order with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageOrder(state as StateSchema)).toEqual("asc");
    });
    test("should return search with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageSearch(state as StateSchema)).toEqual("");
    });
    test("should return type page with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageType(state as StateSchema)).toEqual(
            ArticleType.ALL,
        );
    });
});
