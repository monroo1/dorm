import {
	AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from "@reduxjs/toolkit";
import { CombinedState } from "redux";
import { AxiosInstance } from "axios";
import { ArticlesPageSchema } from "pages/ArticlesPage";
import { ArticleDetailsPageSchema } from "pages/ArticleDetailsPage";
import { ScrollRestorationSchema } from "widgets/Page";
import { LoginSchema } from "features/AuthByUsername";
import { AddCommentFormSchema } from "features/addCommentForm";
import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { ProfileSchema } from "entities/Profile";
import { ArticleDetailsSchema } from "entities/Article";

export interface StateSchema {
	counter: CounterSchema;
	user: UserSchema;
	scrollRestoration: ScrollRestorationSchema;

	// Асинхронные редюсеры
	loginForm?: LoginSchema;
	profile?: ProfileSchema;
	articleDetails?: ArticleDetailsSchema;
	addCommentForm?: AddCommentFormSchema;
	articlesPage?: ArticlesPageSchema;
	articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
	api: AxiosInstance;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateSchema;
}
