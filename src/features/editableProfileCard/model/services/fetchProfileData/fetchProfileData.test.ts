import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Country } from "entities/Country/model/types/country";
import { Currency } from "entities/Currency/model/types/currency";
import { fetchProfileData } from "./fetchProfileData";

const data = {
	id: "1",
	username: "admin",
	age: 22,
	country: Country.Armenia,
	city: "Moscow",
	currency: Currency.USD,
	first: "Andrey",
	lastname: "Monroo",
	avatar: "avatar",
};

describe("fetchProfileData.test", () => {
	test("success fetch", async () => {
		const thunk = new TestAsyncThunk(fetchProfileData);
		thunk.api.get.mockReturnValue(Promise.resolve({ data }));

		const result = await thunk.callThunk("1");

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("fulfilled");
		expect(result.payload).toEqual(data);
	});

	test("error fetch", async () => {
		const thunk = new TestAsyncThunk(fetchProfileData);
		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

		const result = await thunk.callThunk("1");

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("rejected");
	});
});
