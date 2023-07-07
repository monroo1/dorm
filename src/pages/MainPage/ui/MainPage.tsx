import { useTranslation } from "react-i18next";

function MainPage() {
	const { t } = useTranslation("main");

	return (
		<div>
			{/* <BugButton /> */}
			{t("главная страница")}
		</div>
	);
}

export default MainPage;
