import { StateSchema } from "@/app/providers/StoreProvider";
import {
    getArticleDetailsData,
    getArticleDetailsIsLoading,
    getArticleDetailsError,
} from "./articleDetails";

describe("article details selectors", () => {
    test("get data", () => {
        const data = {
            id: "1",
            title: "subtitle",
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });
    test("get data empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });
    test("get is loading", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });
    test("get is loading empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
    });
    test("get error", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: "true",
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual("true");
    });
    test("get error empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});
