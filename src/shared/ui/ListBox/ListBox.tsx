import {
	Fragment, ReactNode, memo,
} from "react";
import { Listbox as HListBox } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "../Button/Button";
import cls from "./ListBox.module.scss";
import { HStack } from "../Stack";

export interface ListBoxItem {
	value: string;
	content: ReactNode;
	disabled?: boolean;
}

type DropdownDirection = "top" | "bottom";

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

const mapDirectionClass: Record<DropdownDirection, string> = {
	bottom: cls.optionsBottom,
	top: cls.optionsTop,
};

export const ListBox = memo((props: ListBoxProps) => {
	const {
		className,
		items,
		value,
		defaultValue,
		readonly,
		label,
		direction = "bottom",
		onChange,
	} = props;

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
				className={classNames(cls.ListBox, {}, [className])}
			>
				<HListBox.Button className={cls.trigger}>
					<Button disabled={readonly}>
						{value ?? defaultValue}
					</Button>
				</HListBox.Button>
				<HListBox.Options
					className={classNames(cls.options, {}, [
						mapDirectionClass[direction],
					])}
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
									[cls.active]: active,
									[cls.disabled]: item.disabled,
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
