import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

import MainIcon from "shared/assets/icons/main-20-20.svg";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
	className?: string;
}

export function Sidebar({ className }: SidebarProps) {
	const [collapsed, setCollapsed] = useState(false);
	const { t } = useTranslation();

	const onToggle = () => setCollapsed((prev) => !prev);

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<Button
				data-testid="sidebar-toggle"
				onClick={onToggle}
				className={cls.collapseBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				size={ButtonSize.L}
				square
			>
				{collapsed ? ">" : "<"}
			</Button>
			<div className={cls.items}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={cls.item}>
					<MainIcon className={cls.icon} />
					<span className={cls.link}>{t("главная")}</span>
				</AppLink>

				<AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={cls.item}>
					<AboutIcon className={cls.icon} />
					<span className={cls.link}>{t("о нас")}</span>
				</AppLink>
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} short={collapsed} />
			</div>
		</div>
	);
}
