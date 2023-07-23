import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailsPageSchema } from "../types";
import {
	articleDetailsPageRecommendationsReducer,
} from "./articleDetailsPageRecommendationsSlice/articleDetailsPageRecommendationsSlice";
import {
	articleDetailsCommentsReducer,
} from "./articleDetailsCommentsSlice/articleDetailsCommentsSlice";

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
	recommendations: articleDetailsPageRecommendationsReducer,
	comments: articleDetailsCommentsReducer,
});
