import { StateSchema } from "app/providers/StoreProvider";
import { getUserAuthData } from "./getUserAuthData";

const data = {
	id: "1",
	username: "string",
	avatar: "avatar",
};

describe("getUserAuthData.test", () => {
	test("should return data", () => {
		const state: DeepPartial<StateSchema> = {
			user: {
				authData: data,
			},
		};
		expect(getUserAuthData(state as StateSchema)).toEqual(data);
	});
	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {
			user: {},
		};
		expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
	});
});
