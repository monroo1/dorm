import { StateSchema } from "@/app/providers/StoreProvider";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { getProfileForm } from "./getProfileForm";

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

describe("getProfileForm.test", () => {
	test("should return data", () => {
		const state: DeepPartial<StateSchema> = {
			profile: { form: data },
		};
		expect(getProfileForm(state as StateSchema)).toEqual(data);
	});
	test("should work with empty state", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileForm(state as StateSchema)).toEqual(undefined);
	});
});
