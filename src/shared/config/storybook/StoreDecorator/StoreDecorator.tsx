import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { profileReducer } from "entities/Profile";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { addCommentFormReducer } from "features/addCommentForm/model/slices/addCommentFormSlice";
import {
	articleDetailsCommentsReducer,
} from "pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice";
import { articlesPageReducer } from "pages/ArticlesPage/model/slices/articlesPageSlice";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducersList = {
	loginForm: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
	articleDetailsComments: articleDetailsCommentsReducer,
	addCommentForm: addCommentFormReducer,
	articlesPage: articlesPageReducer,
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
