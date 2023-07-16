import { StateSchema } from "app/providers/StoreProvider";
import { getArticleCommentsError, getArticleCommentsIsLoading } from "./comments";

describe("getCanEditProfile.test", () => {
	test("should return isLoading", () => {
		const state: DeepPartial<StateSchema> = {
			articleDetailsComments: {
				isLoading: false,
			},
		};
		expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(false);
	});
	test("should return error", () => {
		const state: DeepPartial<StateSchema> = {
			articleDetailsComments: {
				error: "error",
			},
		};
		expect(getArticleCommentsError(state as StateSchema)).toEqual("error");
	});
	test("should return isLoading with empty state", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(undefined);
	});
	test("should return error with empty state", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getArticleCommentsError(state as StateSchema)).toEqual(undefined);
	});
});
