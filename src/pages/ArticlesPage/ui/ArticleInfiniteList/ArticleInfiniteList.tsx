import { memo } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ArticleList } from "@/entities/Article";
import { Text } from "@/shared/ui/Text/Text";
import {
	getArticlesPageIsLoading,
	getArticlesPageView,
	getArticlesPageError,
} from "../../model/selectors/articlesPageSelectors";
import { getArticles } from "../../model/slices/articlesPageSlice";

interface ArticleInfiniteListProps {
	className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
	const {
		className,
	} = props;
	const { t } = useTranslation();
	const articles = useSelector(getArticles.selectAll);
	const isLoading = useSelector(getArticlesPageIsLoading);
	const error = useSelector(getArticlesPageError);
	const view = useSelector(getArticlesPageView);

	if (error) {
		return (
			<Text title={t("ошибка при загрузка списка статей")} />
		);
	}

	return (
		<ArticleList
			view={view}
			isLoading={isLoading}
			articles={articles}
			className={className}
		/>
	);
});
