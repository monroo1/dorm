import { ReactNode, memo } from "react";
import { Popover as HPopover } from "@headlessui/react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { mapDirectionClass } from "../../style/consts";
import { DropdownDirection } from "../../../../../types/ui";
import popupCls from "../../style/popup.module.scss";
import cls from "./Popover.module.scss";

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}
/**
 * @deprecated
 */
export const Popover = memo((props: PopoverProps) => {
    const { className, trigger, direction = "bottom right", children } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <HPopover.Button as="div" className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});
