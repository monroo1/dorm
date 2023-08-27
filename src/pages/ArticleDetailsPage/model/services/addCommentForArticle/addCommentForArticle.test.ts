import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Comment } from "@/entities/Comment";
import { addCommentForArticle } from "./addCommentForArticle";

const data: Comment = {
    id: "1",
    user: {
        id: "1",
        username: "monroo",
        avatar: "avatar",
    },
    text: "text comm",
};

describe("addCommentForArticle.test.test", () => {
    test("success add comment", async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: {
                authData: {
                    id: "1",
                },
            },
            articleDetails: {
                data: {
                    id: "1",
                },
            },
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk("text comm");

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toBe(data);
    });

    test("error add comment", async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: {
                authData: {
                    id: "1",
                },
            },
            articleDetails: {
                data: {
                    id: "1",
                },
            },
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk("text comm");

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("ошибка при создании комментария статьи");
    });
});
