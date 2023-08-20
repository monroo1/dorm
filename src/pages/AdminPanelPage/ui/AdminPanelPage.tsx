import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/widgets/Page";
// import cls from "./AdminPanelPage.module.scss";

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = (props: AdminPanelPageProps) => {
	const { className } = props;
	const { t } = useTranslation();

	return (
		<Page data-testid="AdminPanelPage" className={classNames("", {}, [className])}>
			{t("AdminPanelPage")}
		</Page>
	);
};

export default memo(AdminPanelPage);
