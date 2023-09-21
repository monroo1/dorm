import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { TabItem, Tabs as TabsDeprecated } from "@/shared/ui/deprecated/Tabs";
import { ArticleType } from "@/entities/Article";
import { ToggleFeatures } from "@/shared/lib/features";
import { Tabs } from "@/shared/ui/redesigned/Tabs";

interface ArticleTypeTabsProps {
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { value, onChangeType } = props;
    const { t } = useTranslation("article");

    const typeTabs = useMemo<TabItem<ArticleType>[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t("все"),
            },
            {
                value: ArticleType.IT,
                content: t("айти"),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t("экономика"),
            },
            {
                value: ArticleType.SCIENCE,
                content: t("наука"),
            },
        ],
        [t],
    );

    const onTabClick = useCallback(
        (tabItem: TabItem<ArticleType>) => {
            onChangeType(tabItem.value);
        },
        [onChangeType],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Tabs
                    direction="column"
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onTabClick}
                />
            }
            off={
                <TabsDeprecated
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onTabClick}
                />
            }
        />
    );
});
