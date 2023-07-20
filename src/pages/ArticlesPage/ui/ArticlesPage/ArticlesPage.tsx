import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Page } from "widgets/Page";
import { ArticleList } from "entities/Article";
import { classNames } from "shared/lib/classNames/classNames";
import {
	DynamicModuleLoader,
	ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import {
	fetchNextArticlesPage,
} from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import {
	getArticlesPageError,
	getArticlesPageIsLoading,
	getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import {
	articlesPageReducer,
	getArticles,
} from "../../model/slices/articlesPageSlice";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const articles = useSelector(getArticles.selectAll);
	const isLoading = useSelector(getArticlesPageIsLoading);
	const view = useSelector(getArticlesPageView);
	const error = useSelector(getArticlesPageError);
	const [searchParams] = useSearchParams();

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextArticlesPage());
	}, [dispatch]);

	useInitialEffect(() => {
		dispatch(initArticlesPage(searchParams));
	});

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
			<Page
				onScrollEnd={onLoadNextPart}
				className={classNames(cls.ArticlesPage, {}, [className])}
			>
				<ArticlesPageFilters />
				<ArticleList
					view={view}
					isLoading={isLoading}
					articles={articles}
					className={cls.list}
				/>
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticlesPage);
