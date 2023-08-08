import {
	Fragment, ReactNode, memo,
} from "react";
import { Listbox as HListBox } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import { DropdownDirection } from "../../../../types/ui";
import { Button } from "../../../Button/Button";
import cls from "./ListBox.module.scss";
import { HStack } from "../../../Stack";
import { mapDirectionClass } from "../../style/consts";
import popupCls from "../../style/popup.module.scss";

export interface ListBoxItem {
	value: string;
	content: ReactNode;
	disabled?: boolean;
}

interface ListBoxProps {
	className?: string;
	items?: ListBoxItem[];
	value?: string;
	defaultValue?: string;
	readonly?: boolean;
	direction?: DropdownDirection;
	label?: string;
	onChange: <T extends string>(value: T) => void;
}

export const ListBox = memo((props: ListBoxProps) => {
	const {
		className,
		items,
		value,
		defaultValue,
		readonly,
		label,
		direction = "bottom left",
		onChange,
	} = props;

	const optionalClasses = [
		mapDirectionClass[direction],
	];

	return (
		<HStack gap="4">
			{label
			&& (
				<span className={classNames("", { [cls.readonlyLabel]: readonly })}>
					{`${label}>`}
				</span>
			)}
			<HListBox
				disabled={readonly}
				value={value}
				onChange={onChange}
				as="div"
				className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
			>
				<HListBox.Button className={popupCls.trigger}>
					<Button disabled={readonly}>
						{value ?? defaultValue}
					</Button>
				</HListBox.Button>
				<HListBox.Options
					className={classNames(cls.options, {}, optionalClasses)}
				>
					{items?.map((item) => (
						<HListBox.Option
							key={item.value}
							value={item.value}
							disabled={item.disabled}
							as={Fragment}
						>
							{({ active, selected }) => (
								<li className={classNames(cls.item, {
									[popupCls.active]: active,
									[popupCls.disabled]: item.disabled,
								})}
								>
									{selected && "!!!"}
									{item.content}
								</li>
							)}
						</HListBox.Option>
					))}
				</HListBox.Options>
			</HListBox>
		</HStack>
	);
});
