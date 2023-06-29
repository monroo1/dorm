import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

import { useTranslation } from "react-i18next";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>
                    {t("главная")}
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to="/about">
                    {t("о нас")}
                </AppLink>
            </div>
        </div>
    );
}
