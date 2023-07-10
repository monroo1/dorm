import { memo, useMemo, useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { SidebarItemsList } from "../../model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
	className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => setCollapsed((prev) => !prev);

	const itemList = useMemo(() => SidebarItemsList.map((item) => (
		<SidebarItem
			item={item}
			collapsed={collapsed}
			key={item.path}
		/>
	)), [collapsed]);

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
				{itemList}
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} short={collapsed} />
			</div>
		</div>
	);
});
