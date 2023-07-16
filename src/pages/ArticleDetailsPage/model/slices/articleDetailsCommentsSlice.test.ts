import { Comment } from "entities/Comment";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";

const data: Comment[] = [
	{
		id: "1",
		user: {
			id: "1",
			username: "user",
		},
		text: "string",
	},
	{
		id: "2",
		user: {
			id: "2",
			username: "tolik",
		},
		text: "string 2",
	},
];

describe("articleDetailsCommentsSlice.test", () => {
	test("test fetch comments by article id service pending", () => {
		const state: DeepPartial<ArticleDetailsCommentsSchema> = {
			isLoading: false,
			error: "error",
		};
		expect(articleDetailsCommentsReducer(
			state as ArticleDetailsCommentsSchema,
			fetchCommentsByArticleId.pending,
		)).toEqual({
			isLoading: true,
			error: undefined,
		});
	});
	test("test fetch comments by article id service fulfilled", () => {
		const state: DeepPartial<ArticleDetailsCommentsSchema> = {
			isLoading: true,
			error: undefined,
		};
		expect(articleDetailsCommentsReducer(
			state as ArticleDetailsCommentsSchema,
			fetchCommentsByArticleId.fulfilled(data, "", ""),
		)).toEqual({
			isLoading: false,
			error: undefined,
			entities: {
				1: data[0],
				2: data[1],
			},
			ids: [
				"1",
				"2",
			],
		});
	});
});
