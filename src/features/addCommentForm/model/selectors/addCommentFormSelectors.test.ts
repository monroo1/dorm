import { StateSchema } from "app/providers/StoreProvider";
import { getAddCommentFormError, getAddCommentFormText } from "./addCommentFormSelectors";

describe("addCommentFormSelectors.test", () => {
	test("should return text", () => {
		const state: DeepPartial<StateSchema> = {
			addCommentForm: {
				text: "text",
			},
		};
		expect(getAddCommentFormText(state as StateSchema)).toEqual("text");
	});
	test("should return error", () => {
		const state: DeepPartial<StateSchema> = {
			addCommentForm: {
				error: "error",
			},
		};
		expect(getAddCommentFormError(state as StateSchema)).toEqual("error");
	});
	test("should return text with empty state", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getAddCommentFormText(state as StateSchema)).toEqual(undefined);
	});
	test("should return error with empty state", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
	});
});
