import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import {
	getCanEditProfile,
	getProfileReadonly,
	profileActions,
	updateProfileData,
} from "entities/Profile";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { HStack } from "shared/ui/Stack";

interface ProfilePageHeaderProps {
	className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
	const {
		className,
	} = props;

	const { t } = useTranslation("profile");

	const canEdit = useSelector(getCanEditProfile);
	const readonly = useSelector(getProfileReadonly);
	const dispatch = useAppDispatch();

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false));
	}, [dispatch]);

	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]);

	const onSave = useCallback(() => {
		dispatch(updateProfileData());
	}, [dispatch]);

	return (
		<HStack justify="between" max className={classNames("", {}, [className])}>
			<Text title={t("профиль")} />
			{canEdit && (readonly ? (
				<Button
					theme={ButtonTheme.OUTLINE}
					onClick={onEdit}
				>
					{t("редактировать")}
				</Button>
			) : (
				<HStack gap="8">
					<Button
						theme={ButtonTheme.OUTLINE_RED}
						onClick={onCancelEdit}
					>
						{t("отменить")}
					</Button>
					<Button
						theme={ButtonTheme.OUTLINE}
						onClick={onSave}
					>
						{t("сохранить")}
					</Button>
				</HStack>
			))}
		</HStack>
	);
};
