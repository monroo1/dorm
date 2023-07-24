import { StateSchema } from "app/providers/StoreProvider";
import { getCanEditArticle } from "./canEditArticle";

describe("canEditArticle.test", () => {
	test("should return true", () => {
		const state: DeepPartial<StateSchema> = {
			user: {
				authData: {
					id: "1",
				},
			},
			articleDetails: {
				data: {
					user: {
						id: "1",
					},
				},
			},
		};
		expect(getCanEditArticle(state as StateSchema)).toEqual(true);
	});
	test("should return false with no equal id", () => {
		const state: DeepPartial<StateSchema> = {
			user: {
				authData: {
					id: "2",
				},
			},
			articleDetails: {
				data: {
					user: {
						id: "1",
					},
				},
			},
		};
		expect(getCanEditArticle(state as StateSchema)).toEqual(false);
	});
	test("should return false with empty state", () => {
		const state: DeepPartial<StateSchema> = {
			user: {},
		};
		expect(getCanEditArticle(state as StateSchema)).toEqual(false);
	});
	test("should return false with empty article state", () => {
		const state: DeepPartial<StateSchema> = {
			user: {
				authData: {
					id: "2",
				},
			},
		};
		expect(getCanEditArticle(state as StateSchema)).toEqual(false);
	});
	test("should return false with empty user state", () => {
		const state: DeepPartial<StateSchema> = {
			user: {},
			articleDetails: {
				data: {
					user: {
						id: "1",
					},
				},
			},
		};
		expect(getCanEditArticle(state as StateSchema)).toEqual(false);
	});
});
