import { StateSchema } from "@/app/providers/StoreProvider";
import { getCanEditProfile } from "./getCanEditProfile";

describe("getCanEditProfile.test", () => {
	test("should return true", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				data: {
					id: "1",
				},
			},
			user: {
				authData: {
					id: "1",
				},
			},
		};
		expect(getCanEditProfile(state as StateSchema)).toEqual(true);
	});
	test("should return false with profile id", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				data: {
					id: "1",
				},
			},
			user: {},
		};
		expect(getCanEditProfile(state as StateSchema)).toEqual(false);
	});
	test("should return false with user id", () => {
		const state: DeepPartial<StateSchema> = {
			user: {
				authData: {
					id: "1",
				},
			},
		};
		expect(getCanEditProfile(state as StateSchema)).toEqual(false);
	});
	test("should return false with !==", () => {
		const state: DeepPartial<StateSchema> = {
			user: {
				authData: {
					id: "1",
				},
			},
			profile: {
				data: {
					id: "2",
				},
			},
		};
		expect(getCanEditProfile(state as StateSchema)).toEqual(false);
	});
	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {
			user: {},
		};
		expect(getCanEditProfile(state as StateSchema)).toEqual(false);
	});
});
