import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextSize } from "shared/ui/Text/Text";
import { PAGE_ID } from "widgets/Page";
import { VirtuosoGrid } from "react-virtuoso";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import cls from "./ArticleList.module.scss";

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
	target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
	.fill(0)
	.map((_, index) => (
		<ArticleListItemSkeleton key={index} view={view} />
	));

export const ArticleList = memo((props: ArticleListProps) => {
	const {
		className,
		articles,
		isLoading,
		view = ArticleView.SMALL,
		target,
	} = props;
	const { t } = useTranslation("article");

	const renderArticle = (index: number, article: Article) => (
		<ArticleListItem
			article={article}
			view={view}
			key={index}
			target={target}
		/>
	);

	if (!isLoading && !articles.length) {
		return (
			<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
				<Text size={TextSize.L} title={t("статьи не найдены")} />
			</div>
		);
	}

	return (
		<>
			<div style={{ width: `${100}%`, marginBottom: `${20}px` }}>
				<VirtuosoGrid
					useWindowScroll
					customScrollParent={document.getElementById(PAGE_ID) as HTMLElement}
					data={articles}
					listClassName={classNames(cls.ArticleList, {}, [className, cls[view]])}
					itemContent={renderArticle}
				/>
			</div>
			{isLoading && (
				<div className={classNames(cls.ArticleList, {
				}, [className, cls[view], cls.skeleton])}
				>
					{isLoading && getSkeletons(view)}
				</div>
			)}
		</>
	);
});
