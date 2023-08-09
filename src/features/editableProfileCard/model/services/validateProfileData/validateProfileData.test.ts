import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { validateProfileData } from "./validateProfileData";
import { ValidateProfileError } from "../../consts/editableProfileCardConsts";

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

describe("validateProfileData.test", () => {
	test("success", () => {
		const result = validateProfileData(data);

		expect(result).toEqual([]);
	});
	test("without first and last names", () => {
		const result = validateProfileData({ ...data, first: "", lastname: "" });

		expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
	});
	test("without age", () => {
		const result = validateProfileData({ ...data, age: undefined });

		expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
	});
	test("without country", () => {
		const result = validateProfileData({ ...data, country: undefined });

		expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
	});
	test("without country", () => {
		const result = validateProfileData({ });

		expect(result).toEqual([
			ValidateProfileError.INCORRECT_USER_DATA,
			ValidateProfileError.INCORRECT_AGE,
			ValidateProfileError.INCORRECT_COUNTRY,
		]);
	});
});
