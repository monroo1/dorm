import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { initArticlesPage } from "./initArticlesPage";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

jest.mock("../fetchArticlesList/fetchArticlesList");

describe("fetchNextArticlesPage.test", () => {
	test("success inited fetch", async () => {
		const thunk = new TestAsyncThunk(initArticlesPage, {
			articlesPage: {
				page: 1,
				ids: [],
				entities: {},
				limit: 4,
				isLoading: false,
				hasMore: true,
				_inited: false,
			},
		});

		await thunk.callThunk(new URLSearchParams());

		expect(thunk.dispatch).toBeCalledTimes(4);
		expect(fetchArticlesList).toBeCalledWith({ });
	});

	test("error inited - true", async () => {
		const thunk = new TestAsyncThunk(initArticlesPage, {
			articlesPage: {
				page: 1,
				ids: [],
				entities: {},
				limit: 4,
				isLoading: false,
				hasMore: true,
				_inited: true,
			},
		});

		await thunk.callThunk(new URLSearchParams());

		expect(thunk.dispatch).toBeCalledTimes(2);
		expect(fetchArticlesList).not.toBeCalled();
	});
});
