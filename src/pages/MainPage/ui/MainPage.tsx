import { memo } from "react";
import { useTranslation } from "react-i18next";

const MainPage = memo(() => {
	const { t } = useTranslation("main");

	return (
		<div>
			{/* <BugButton /> */}
			{t("главная страница")}
		</div>
	);
});

export default MainPage;
