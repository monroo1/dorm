import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import { VirtuosoGrid } from "react-virtuoso";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text, TextSize } from "@/shared/ui/Text";
import { HStack } from "@/shared/ui/Stack";
import { Article } from "../../model/types/article";
import { ArticleView } from "../../model/consts/articleConsts";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import cls from "./ArticleList.module.scss";
import { PAGE_ID } from "@/shared/const/page";

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
	target?: HTMLAttributeAnchorTarget;
	virtualized?: boolean;
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
		virtualized = true,
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
		<div
			data-testid="ArticleList"
		>
			{virtualized
				? (
					<VirtuosoGrid
						useWindowScroll
						customScrollParent={document.getElementById(PAGE_ID) as HTMLElement}
						data={articles}
						listClassName={classNames(cls.ArticleList, {}, [className, cls[view]])}
						itemContent={renderArticle}
					/>
				)
				: (
					<HStack
						max
						className={classNames(
							cls.ArticleList,
							{},
							[className, cls[view]],
						)}
					>
						{articles.map((article, index) => renderArticle(index, article))}
					</HStack>
				)}

			{isLoading && (
				<div className={classNames(cls.ArticleList, {
				}, [className, cls[view], cls.skeleton])}
				>
					{isLoading && getSkeletons(view)}
				</div>
			)}
		</div>
	);
});
