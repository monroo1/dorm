import { Mods, classNames } from "shared/lib/classNames/classNames";
import { ChangeEvent, memo, useMemo } from "react";
import cls from "./Select.module.scss";

export interface SelectOption {
	value: string;
	content: string;
}

interface SelectProps {
	className?: string;
	label?: string;
	options?: SelectOption[];
	value?: string;
	readonly?: boolean;
	onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
	const {
		className,
		label,
		options,
		value,
		readonly,
		onChange,
	} = props;

	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value);
	};

	const optionsList = useMemo(() => options?.map((opt) => (
		<option
			value={opt.value}
			className={cls.option}
			key={opt.value}
		>
			{opt.content}
		</option>
	)), [options]);

	const mods: Mods = {
		[cls.readonly]: readonly,
	};

	return (
		<div className={classNames(cls.Wrapper, mods, [className])}>
			{label && (
				<span className={cls.label}>
					{`${label}>`}
				</span>
			)}
			<select
				className={cls.select}
				value={value}
				onChange={onChangeHandler}
				disabled={readonly}
			>
				{optionsList}
			</select>
		</div>
	);
});
