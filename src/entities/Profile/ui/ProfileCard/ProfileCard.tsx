import { useTranslation } from "react-i18next";
import { Mods, classNames } from "@/shared/lib/classNames/classNames";
import { Text, TextAlign, TextTheme } from "@/shared/ui/Text";
import { Input } from "@/shared/ui/Input";
import { Loader } from "@/shared/ui/Loader";
import { Avatar } from "@/shared/ui/Avatar";
import { Currency, CurrencySelect } from "@/entities/Currency";
import { Country, CountrySelect } from "@/entities/Country";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Profile } from "../../model/types/profile";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
	className?: string;
	data?: Profile;
	isLoading?: boolean;
	error?: string;
	readonly?: boolean;
	onChangeFirstname?: (value?: string) => void;
	onChangeLastname?: (value?: string) => void;
	onChangeAge?: (value?: string) => void;
	onChangeCurrency?: (currency: Currency) => void;
	onChangeCountry?: (country: Country) => void;
	onChangeCity?: (value?: string) => void;
	onChangeUsername?: (value?: string) => void;
	onChangeAvatar?: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
	const {
		className,
		data,
		isLoading,
		error,
		readonly,
		onChangeFirstname,
		onChangeLastname,
		onChangeAge,
		onChangeCurrency,
		onChangeCountry,
		onChangeCity,
		onChangeUsername,
		onChangeAvatar,
	} = props;
	const { t } = useTranslation("profile");

	if (isLoading) {
		return (
			<HStack
				justify="center"
				max
				className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}
			>
				<Loader />
			</HStack>
		);
	}

	if (error) {
		return (
			<HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
				<Text
					theme={TextTheme.ERROR}
					title={t("произошла ошибка при загрузке профиля")}
					text={t("попробуйте обновить страницу")}
					align={TextAlign.CENTER}
				/>
			</HStack>
		);
	}

	const mods: Mods = {
		[cls.editing]: !readonly,
	};

	return (
		<VStack gap="8" max className={classNames(cls.ProfileCard, mods, [className])}>
			{data?.avatar && (
				<HStack justify="center" max className={cls.avatarWrapper}>
					<Avatar
						src={data?.avatar}
						alt={data?.avatar}
					/>
				</HStack>
			)}
			<Input
				value={data?.first}
				placeholder={t("ваше имя")}
				className={cls.input}
				onChange={onChangeFirstname}
				readonly={readonly}
				data-testid="ProfileCard.firstname"
			/>
			<Input
				value={data?.lastname}
				placeholder={t("ваша фамилия")}
				className={cls.input}
				onChange={onChangeLastname}
				readonly={readonly}
				data-testid="ProfileCard.lastname"
			/>
			<Input
				value={data?.age}
				placeholder={t("ваш возраст")}
				className={cls.input}
				onChange={onChangeAge}
				readonly={readonly}
			/>
			<CurrencySelect
				value={data?.currency}
				onChange={onChangeCurrency}
				className={cls.input}
				readonly={readonly}
			/>
			<CountrySelect
				value={data?.country}
				onChange={onChangeCountry}
				className={cls.input}
				readonly={readonly}
			/>
			<Input
				value={data?.city}
				placeholder={t("ваш город")}
				className={cls.input}
				onChange={onChangeCity}
				readonly={readonly}
			/>
			<Input
				value={data?.username}
				placeholder={t("ваше имя пользователя")}
				className={cls.input}
				onChange={onChangeUsername}
				readonly={readonly}
			/>
			<Input
				value={data?.avatar}
				placeholder={t("ваша аватарка")}
				className={cls.input}
				onChange={onChangeAvatar}
				readonly={readonly}
			/>
		</VStack>
	);
};
