import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { ValidateProfileError } from "../../consts/editableProfileCardConsts";

describe("getProfileValidateErrors.test", () => {
	test("should return server and age errors", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				validateErrors: [
					ValidateProfileError.INCORRECT_AGE,
					ValidateProfileError.SERVER_ERROR,
				],
			},
		};
		expect(getProfileValidateErrors(state as StateSchema)).toEqual([
			ValidateProfileError.INCORRECT_AGE,
			ValidateProfileError.SERVER_ERROR,
		]);
	});
	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
	});
});
