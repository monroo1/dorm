import { memo, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page";
import { AddCommentForm } from "features/addCommentForm";
import { ArticleDetails, ArticleList } from "entities/Article";
import { CommentList } from "entities/Comment";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import {
	DynamicModuleLoader,
	ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button } from "shared/ui/Button/Button";
import { Text, TextSize } from "shared/ui/Text/Text";
import { articleDetailsPageReducer } from "../../model/slices";
import {
	getArticleComments,
} from "../../model/slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice";
import {
	getArticleRecommendations,
} from "../../model/slices/articleDetailsPageRecommendationsSlice/articleDetailsPageRecommendationsSlice";
import {
	fetchCommentsByArticleId,
} from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {
	fetchArticleRecommendations,
} from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import {
	addCommentForArticle,
} from "../../model/services/addCommentForArticle/addCommentForArticle";
import {
	getArticleCommentsIsLoading,
} from "../../model/selectors/comments/comments";
import {
	getArticleRecommendationsIsLoading,
} from "../../model/selectors/recommendations/recommendations";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
	const { className } = props;
	const { t } = useTranslation("article");
	const { id } = useParams<{ id: string }>();
	const dispatch = useAppDispatch();
	const comments = useSelector(getArticleComments.selectAll);
	const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
	const recommendations = useSelector(getArticleRecommendations.selectAll);
	const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
	const navigate = useNavigate();

	const onBackToList = useCallback(() => {
		navigate(RoutePath.articles);
	}, [navigate]);

	const onSendComment = useCallback((text: string) => {
		dispatch(addCommentForArticle(text));
	}, [dispatch]);

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
		dispatch(fetchArticleRecommendations());
	});

	if (!id) {
		return (
			<Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
				{t("cтатья не найдена")}
			</Page>
		);
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
				<Button onClick={onBackToList}>
					{t("назад к списку")}
				</Button>
				<ArticleDetails id={id} />
				<Text
					size={TextSize.L}
					title={t("рекомендуем")}
					className={cls.commentTitle}
				/>
				<ArticleList
					articles={recommendations}
					isLoading={recommendationsIsLoading}
					className={cls.recommendations}
					target="_blank"
				/>
				<Text
					size={TextSize.L}
					title={t("комментарии")}
					className={cls.commentTitle}
				/>
				<AddCommentForm onSendComment={onSendComment} />
				<CommentList
					isLoading={commentsIsLoading}
					comments={comments}
				/>
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);
