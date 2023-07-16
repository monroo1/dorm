import { addCommentFormActions, addCommentFormReducer } from "./addCommentFormSlice";
import { AddCommentFormSchema } from "../types/addCommentForm";

describe("addCommentFormSlice.test", () => {
	test("set text", () => {
		const state: AddCommentFormSchema = { text: "" };

		expect(addCommentFormReducer(state, addCommentFormActions.setText("1234"))).toEqual({ text: "1234" });
	});
});
