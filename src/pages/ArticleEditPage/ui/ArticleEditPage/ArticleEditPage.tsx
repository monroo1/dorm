import { memo } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page";
import { classNames } from "shared/lib/classNames/classNames";

interface ArticleEditPageProps {
	className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
	const {
		className,
	} = props;
	const { t } = useTranslation("article");
	const { id } = useParams<{id: string}>();
	const isEdit = Boolean(id);

	return (
		<Page className={classNames("", {}, [className])}>
			{isEdit
				? t("редактирование статьи") + id
				: t("создание статьи")}
		</Page>
	);
});

export default ArticleEditPage;
