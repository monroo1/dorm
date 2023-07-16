import { StateSchema } from "app/providers/StoreProvider";
import { getUserInited } from "./getUserInited";

describe("getUserAuthData.test", () => {
	test("should return data", () => {
		const state: DeepPartial<StateSchema> = {
			user: {
				_inited: false,
			},
		};
		expect(getUserInited(state as StateSchema)).toEqual(false);
	});
	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {
			user: {},
		};
		expect(getUserInited(state as StateSchema)).toEqual(undefined);
	});
});
