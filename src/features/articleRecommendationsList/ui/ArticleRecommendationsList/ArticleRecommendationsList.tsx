import { memo } from "react";
import { useTranslation } from "react-i18next";
import { ArticleList } from "@/entities/Article";
import { Text as TextDeprecated, TextSize } from "@/shared/ui/deprecated/Text";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { useArticleRecommendationsList } from "../../api/articleRecommendationsApi";
import { ToggleFeatures } from "@/shared/lib/features";
import { Text } from "@/shared/ui/redesigned/Text";

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation("article");
        const {
            isLoading,
            data: articles = [],
            error,
        } = useArticleRecommendationsList(4);

        if (error && !isLoading) {
            return <div>{t("ошибка при получении статей")}</div>;
        }

        return (
            <VStack gap="8" max data-testid="ArticleRecommendationsList">
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text size="l" title={t("рекомендуем")} />}
                    off={
                        <TextDeprecated
                            size={TextSize.L}
                            title={t("рекомендуем")}
                        />
                    }
                />
                <ArticleList
                    articles={articles}
                    isLoading={isLoading}
                    className={className}
                    target="_blank"
                />
            </VStack>
        );
    },
);
