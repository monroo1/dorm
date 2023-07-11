import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
	className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
	const { t } = useTranslation();

	const data = useSelector(getProfileData);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);

	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			<div className={cls.header}>
				<Text title={t("профиль")} />
				<Button
					theme={ButtonTheme.OUTLINE}
					className={cls.editBtn}
				>
					{t("редактировать")}
				</Button>
			</div>
			<div className={cls.data}>
				<Input
					value={data?.first}
					placeholder={t("ваше имя")}
					className={cls.input}
				/>
				<Input
					value={data?.lastname}
					placeholder={t("ваша фамилия")}
					className={cls.input}
				/>
			</div>
		</div>
	);
};
