import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Comment } from "@/entities/Comment";
import { fetchCommentsByArticleId } from "./fetchCommentsByArticleId";

const data: Comment[] = [
	{
		id: "1",
		user: {
			id: "1",
			username: "monroo",
			avatar: "avatar",
		},
		text: "text comm",
	},
	{
		id: "2",
		user: {
			id: "2",
			username: "toloik",
			avatar: "avatar",
		},
		text: "text comm 2",
	},
];

describe("fetchCommentsByArticleId.test", () => {
	test("success fetch", async () => {
		const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
		thunk.api.get.mockReturnValue(Promise.resolve({ data }));

		const result = await thunk.callThunk("1");

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("fulfilled");
		expect(result.payload).toEqual(data);
	});

	test("error fetch", async () => {
		const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

		const result = await thunk.callThunk("1");

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("rejected");
	});
});
