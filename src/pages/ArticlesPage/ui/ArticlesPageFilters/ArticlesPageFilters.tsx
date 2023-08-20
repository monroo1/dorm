import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ArticleSortSelector } from "@/features/ArticleSortSelector";
import { ArticleTypeTabs } from "@/features/ArticleTypeTabs";
import { ArticleViewSelector } from "@/features/ArticleViewSelector";
import {
	ArticleSortField, ArticleType, ArticleView,
} from "@/entities/Article";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Card } from "@/shared/ui/Card";
import { Input } from "@/shared/ui/Input";
import { SortOrder } from "@/shared/types";
import { useDebounce } from "@/shared/lib/hooks/useDebounce/useDebounce";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import {
	getArticlesPageOrder,
	getArticlesPageSearch,
	getArticlesPageSort,
	getArticlesPageType,
	getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { articlesPageActions } from "../../model/slices/articlesPageSlice";
import cls from "./ArticlesPageFilters.module.scss";

interface ArticlesPageFiltersProps {
	className?: string;
}

export const ArticlesPageFilters = memo(({ className }: ArticlesPageFiltersProps) => {
	const { t } = useTranslation("article");
	const dispatch = useAppDispatch();
	const sort = useSelector(getArticlesPageSort);
	const order = useSelector(getArticlesPageOrder);
	const search = useSelector(getArticlesPageSearch);
	const view = useSelector(getArticlesPageView);
	const type = useSelector(getArticlesPageType);

	const fetchData = useCallback(() => {
		dispatch(fetchArticlesList({ replace: true }));
	}, [dispatch]);

	const debouncedFetchData = useDebounce(fetchData, 500);

	const onChangeView = useCallback((view: ArticleView) => {
		dispatch(articlesPageActions.setView(view));
	}, [dispatch]);

	const onChangeOrder = useCallback((newOrder: SortOrder) => {
		dispatch(articlesPageActions.setOrder(newOrder));
		dispatch(articlesPageActions.setPage(1));
		fetchData();
	}, [dispatch, fetchData]);

	const onChangeSort = useCallback((newSort: ArticleSortField) => {
		dispatch(articlesPageActions.setSort(newSort));
		dispatch(articlesPageActions.setPage(1));
		fetchData();
	}, [dispatch, fetchData]);

	const onChangeSearch = useCallback((search: string) => {
		dispatch(articlesPageActions.setSearch(search));
		dispatch(articlesPageActions.setPage(1));
		debouncedFetchData();
	}, [dispatch, debouncedFetchData]);

	const onChangeType = useCallback((type: ArticleType) => {
		dispatch(articlesPageActions.setType(type));
		dispatch(articlesPageActions.setPage(1));
		fetchData();
	}, [dispatch, fetchData]);

	return (
		<div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
			<div className={cls.sortWrapper}>
				<ArticleSortSelector
					order={order}
					sort={sort}
					onChangeOrder={onChangeOrder}
					onChangeSort={onChangeSort}
				/>
				<ArticleViewSelector
					view={view}
					onViewClick={onChangeView}
				/>
			</div>
			<Card className={cls.search}>
				<Input
					placeholder={t("поиск")}
					value={search}
					onChange={onChangeSearch}
				/>
			</Card>
			<ArticleTypeTabs
				value={type}
				onChangeType={onChangeType}
			/>
		</div>
	);
});
