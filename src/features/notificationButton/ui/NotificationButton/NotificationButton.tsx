import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { NotificationList } from "entities/Notification";
import { classNames } from "shared/lib/classNames/classNames";
import { Drawer } from "shared/ui/Drawer/Drawer";
import { Popover } from "shared/ui/Popup";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import NotificationIcon from "shared/assets/icons/notification-20-20.svg";
import cls from "./NotificationButton.module.scss";

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
	const { className } = props;

	const [isOpen, setIsOpen] = useState(false);

	const onOpenDrawer = useCallback(() => {
		setIsOpen(true);
	}, []);

	const onCloseDrawer = useCallback(() => {
		setIsOpen(false);
	}, []);

	const trigger = (
		<Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
			<Icon Svg={NotificationIcon} inverted />
		</Button>
	);

	return (
		<>
			<BrowserView>
				<Popover
					className={classNames(cls.NotificationButton, {}, [className])}
					direction="bottom left"
					trigger={trigger}
				>
					<NotificationList className={cls.notifications} />
				</Popover>
			</BrowserView>
			<MobileView>
				{trigger}
				<Drawer isOpen={isOpen} onClose={onCloseDrawer}>
					<NotificationList />
				</Drawer>
			</MobileView>
		</>
	);
});
