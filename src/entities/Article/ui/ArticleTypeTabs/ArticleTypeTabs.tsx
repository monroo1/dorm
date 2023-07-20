import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { ArticleType } from "../../model/types/article";

interface ArticleTypeTabsProps {
	value: ArticleType;
	onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
	const {
		value,
		onChangeType,
	} = props;
	const { t } = useTranslation("article");

	const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
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
	], [t]);

	const onTabClick = useCallback((tabItem: TabItem<ArticleType>) => {
		onChangeType(tabItem.value);
	}, [onChangeType]);

	return (
		<Tabs
			tabs={typeTabs}
			value={value}
			onTabClick={onTabClick}
		/>
	);
});
