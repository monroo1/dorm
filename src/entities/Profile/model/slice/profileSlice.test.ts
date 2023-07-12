import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { profileReducer, profileActions } from "./profileSlice";
import { ProfileSchema, ValidateProfileError } from "../types/profile";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const data = {
	username: "admin",
	age: 22,
	country: Country.Armenia,
	city: "Moscow",
	currency: Currency.USD,
	first: "Andrey",
	lastname: "Monroo",
	avatar: "avatar",
};

describe("profileSlice.test", () => {
	test("test readonly", () => {
		const state: DeepPartial<ProfileSchema> = { readonly: false };
		expect(profileReducer(
			state as ProfileSchema,
			profileActions.setReadonly(true),
		)).toEqual({ readonly: true });
	});
	test("test cancel edit", () => {
		const state: DeepPartial<ProfileSchema> = {
			readonly: false,
			validateErrors: [ValidateProfileError.INCORRECT_AGE],
			data,
			form: data,
		};
		expect(profileReducer(
			state as ProfileSchema,
			profileActions.cancelEdit(),
		)).toEqual({
			readonly: true,
			validateErrors: undefined,
			data,
			form: data,
		});
	});
	test("test update profile", () => {
		const state: DeepPartial<ProfileSchema> = { form: data };
		expect(profileReducer(
			state as ProfileSchema,
			profileActions.updateProfile({ ...data, age: 19, city: "Sochi" }),
		)).toEqual({ form: { ...data, age: 19, city: "Sochi" } });
	});
	test("test update profile service pending", () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: false,
			validateErrors: [ValidateProfileError.INCORRECT_AGE],
		};
		expect(profileReducer(
			state as ProfileSchema,
			updateProfileData.pending,
		)).toEqual({
			isLoading: true,
			validateErrors: undefined,
		});
	});
	test("test update profile service fulfilled", () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: true,
		};
		expect(profileReducer(
			state as ProfileSchema,
			updateProfileData.fulfilled(data, ""),
		)).toEqual({
			isLoading: false,
			readonly: true,
			validateErrors: undefined,
			form: data,
			data,
		});
	});
});
