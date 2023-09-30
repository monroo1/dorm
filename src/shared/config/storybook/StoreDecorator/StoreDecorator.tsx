import { ComponentType } from "react";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage/testing";
import { articlesPageReducer } from "@/pages/ArticlesPage/testing";
import { profileReducer } from "@/features/editableProfileCard/testing";
import { loginReducer } from "@/features/AuthByUsername/testing";
import { addCommentFormReducer } from "@/features/addCommentForm/testing";
import { articleDetailsReducer } from "@/entities/Article/testing";
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articlesPage: articlesPageReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
    (Story: ComponentType) => (
        <StoreProvider
            initialState={state}
            asyncReducers={{
                ...defaultAsyncReducers,
                ...asyncReducers,
            }}
        >
            <Story />
        </StoreProvider>
    );
