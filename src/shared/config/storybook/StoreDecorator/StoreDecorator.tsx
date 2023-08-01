import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { profileReducer } from "features/editableProfileCard/model/slice/profileSlice";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { addCommentFormReducer } from "features/addCommentForm/model/slices/addCommentFormSlice";
import { articleDetailsPageReducer } from "pages/ArticleDetailsPage/model/slices";
import { articlesPageReducer } from "pages/ArticlesPage/model/slices/articlesPageSlice";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducersList = {
	loginForm: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
	addCommentForm: addCommentFormReducer,
	articlesPage: articlesPageReducer,
	articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
	state: DeepPartial<StateSchema>,
	asyncReducers?: ReducersList,
) => (Story: any) => (
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
