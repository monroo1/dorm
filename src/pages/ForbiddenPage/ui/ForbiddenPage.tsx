import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";
import { classNames } from "@/shared/lib/classNames/classNames";

interface ForbiddenPageProps {
    className?: string;
}

const ForbiddenPage = (props: ForbiddenPageProps) => {
	const { className } = props;
	const { t } = useTranslation();

	return (
		<Page className={classNames("", {}, [className])}>
			{t("нет доступа к странице")}
		</Page>
	);
};

export default memo(ForbiddenPage);
