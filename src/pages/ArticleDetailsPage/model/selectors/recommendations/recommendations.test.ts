import { StateSchema } from "@/app/providers/StoreProvider";
import {
    getArticleRecommendationsError,
    getArticleRecommendationsIsLoading,
} from "./recommendations";

describe("recommendationsSelector.test", () => {
    test("should return isLoading", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                recommendations: {
                    isLoading: false,
                },
            },
        };
        expect(
            getArticleRecommendationsIsLoading(state as StateSchema),
        ).toEqual(false);
    });
    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                recommendations: {
                    error: "error",
                },
            },
        };
        expect(getArticleRecommendationsError(state as StateSchema)).toEqual(
            "error",
        );
    });
    test("should return isLoading with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(
            getArticleRecommendationsIsLoading(state as StateSchema),
        ).toEqual(undefined);
    });
    test("should return error with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleRecommendationsError(state as StateSchema)).toEqual(
            undefined,
        );
    });
});
