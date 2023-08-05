import { memo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";
import {
	getUserAuthData, isUserAdmin, isUserManager, userActions,
} from "entities/User";
import { classNames } from "shared/lib/classNames/classNames";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import { Avatar } from "shared/ui/Avatar/Avatar";
import cls from "./Navbar.module.scss";

interface NavbarProps {
	className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData);
	const dispatch = useDispatch();
	const isAdmin = useSelector(isUserAdmin);
	const isManager = useSelector(isUserManager);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	const isAdminPanelAvailable = isAdmin || isManager;

	if (authData) {
		return (
			<header className={classNames(cls.Navbar, {}, [className])}>
				<Text
					className={cls.appName}
					title={t("monroo app")}
					theme={TextTheme.INVERTED}
				/>
				<AppLink
					to={RoutePath.article_create}
					theme={AppLinkTheme.SECONDARY}
					className={cls.createLink}
				>
					{t("создать статью")}
				</AppLink>
				<Dropdown
					direction="bottom left"
					className={cls.dropdown}
					items={[
						...(isAdminPanelAvailable ? [{
							content: t("админка"),
							href: RoutePath.admin_panel,
						}] : []),
						{
							content: t("профиль"),
							href: RoutePath.profile + authData.id,
						},
						{
							content: t("выйти"),
							onClick: onLogout,
						},
					]}
					trigger={<Avatar size={30} src={authData.avatar} />}
				/>
			</header>
		);
	}

	return (
		<header className={classNames(cls.Navbar, {}, [className])}>
			<Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
				{t("войти")}
			</Button>
			{isAuthModal && (
				<LoginModal
					isOpen={isAuthModal}
					onClose={onCloseModal}
				/>
			)}
		</header>
	);
});
