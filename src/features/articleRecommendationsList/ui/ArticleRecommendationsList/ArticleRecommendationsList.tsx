import { memo } from "react";
import { useTranslation } from "react-i18next";
import { ArticleList } from "entities/Article";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextSize } from "shared/ui/Text/Text";
import { HStack, VStack } from "shared/ui/Stack";
import { useArticleRecommendationsList } from "../../api/articleRecommendationsApi";

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
	const { className } = props;
	const { t } = useTranslation("article");
	const { isLoading, data: articles = [], error } = useArticleRecommendationsList(4);

	if (error) {
		return (
			<div>
				{t("ошибка при получении статей")}
			</div>
		);
	}

	return (
		<VStack gap="8" max>
			<Text
				size={TextSize.L}
				title={t("рекомендуем")}
			/>
			<ArticleList
				articles={articles}
				isLoading={isLoading}
				className={className}
				target="_blank"
			/>
		</VStack>
	);
});
