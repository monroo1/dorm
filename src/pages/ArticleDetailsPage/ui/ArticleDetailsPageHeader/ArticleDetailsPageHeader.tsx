import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getArticleDetailsData } from "@/entities/Article";
import { classNames } from "@/shared/lib/classNames/classNames";
import { RoutePath } from "@/shared/const/router";
import { Button } from "@/shared/ui/Button";
import { HStack } from "@/shared/ui/Stack";
import { getCanEditArticle } from "../../model/selectors/canEditArticle/canEditArticle";

interface ArticleDetailsPageHeaderProps {
	className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
	const {
		className,
	} = props;
	const { t } = useTranslation("article");
	const navigate = useNavigate();
	const canEdit = useSelector(getCanEditArticle);
	const article = useSelector(getArticleDetailsData);

	const onBackToList = useCallback(() => {
		navigate(RoutePath.articles);
	}, [navigate]);

	const onEditArticle = useCallback(() => {
		navigate(`${RoutePath.article_details}${article?.id}/edit`);
	}, [navigate, article?.id]);

	return (
		<HStack max justify="between" className={classNames("", {}, [className])}>
			<Button onClick={onBackToList}>
				{t("назад к списку")}
			</Button>
			{canEdit && (
				<Button onClick={onEditArticle}>
					{t("редактировать")}
				</Button>
			)}
		</HStack>
	);
});
