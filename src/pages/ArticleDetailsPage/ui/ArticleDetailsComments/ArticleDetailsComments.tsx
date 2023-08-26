import { Suspense, memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { AddCommentForm, AddCommentFormSkeleton } from "@/features/addCommentForm";
import { CommentList } from "@/entities/Comment";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Text, TextSize } from "@/shared/ui/Text";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { VStack } from "@/shared/ui/Stack";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments/comments";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import {
	getArticleComments,
} from "../../model/slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice";
import {
	fetchCommentsByArticleId,
} from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

interface ArticleDetailsCommentsProps {
	className?: string;
	id?: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
	const {
		className, id,
	} = props;
	const { t } = useTranslation("article");
	const dispatch = useAppDispatch();
	const comments = useSelector(getArticleComments.selectAll);
	const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
	});

	const onSendComment = useCallback((text: string) => {
		dispatch(addCommentForArticle(text));
	}, [dispatch]);

	return (
		<VStack
			gap="16"
			max
			className={classNames("", {}, [className])}
		>
			<Text
				size={TextSize.L}
				title={t("комментарии")}
			/>
			<Suspense fallback={<AddCommentFormSkeleton />}>
				<AddCommentForm onSendComment={onSendComment} />
			</Suspense>
			<CommentList
				isLoading={commentsIsLoading}
				comments={comments}
			/>
		</VStack>
	);
});
