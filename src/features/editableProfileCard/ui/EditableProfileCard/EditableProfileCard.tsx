import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ProfileCard } from "@/entities/Profile";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import {
	DynamicModuleLoader,
	ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Text, TextTheme } from "@/shared/ui/Text/Text";
import { VStack } from "@/shared/ui/Stack";
import { classNames } from "@/shared/lib/classNames/classNames";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import {
	getProfileValidateErrors,
} from "../../model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import { ValidateProfileError } from "../../model/consts/editableProfileCardConsts";
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";
import { profileActions, profileReducer } from "../../model/slice/profileSlice";
import { EditableProfileCardHeader } from "../EditableProfileCardHeader/EditableProfileCardHeader";

const reducers: ReducersList = {
	profile: profileReducer,
};

interface EditableProfileCardProps {
    className?: string;
	id?: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
	const { className, id } = props;
	const { t } = useTranslation("profile");

	const dispatch = useAppDispatch();

	const formData = useSelector(getProfileForm);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);
	const readonly = useSelector(getProfileReadonly);
	const validateErrors = useSelector(getProfileValidateErrors);

	const validateErrorTranslates = {
		[ValidateProfileError.NO_DATA]: t("нет данных"),
		[ValidateProfileError.SERVER_ERROR]: t("ошибка сервера"),
		[ValidateProfileError.INCORRECT_USER_DATA]: t("ошибка юзер даты"),
		[ValidateProfileError.INCORRECT_AGE]: t("ошибка возраста"),
		[ValidateProfileError.INCORRECT_COUNTRY]: t("ошибка страны"),
	};

	useInitialEffect(() => {
		if (id) {
			dispatch(fetchProfileData(id));
		}
	});

	const onChangeFirstname = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ first: value || "" }));
	}, [dispatch]);

	const onChangeLastname = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ lastname: value || "" }));
	}, [dispatch]);

	const onChangeAge = useCallback((value?: string) => {
		if (Number(value) || value === "") {
			dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
		}
	}, [dispatch]);

	const onChangeCity = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ city: value || "" }));
	}, [dispatch]);

	const onChangeUsername = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ username: value || "" }));
	}, [dispatch]);

	const onChangeAvatar = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ avatar: value || "" }));
	}, [dispatch]);

	const onChangeCurrency = useCallback((currency: Currency) => {
		dispatch(profileActions.updateProfile({ currency }));
	}, [dispatch]);

	const onChangeCountry = useCallback((country: Country) => {
		dispatch(profileActions.updateProfile({ country }));
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers}>
			<VStack
				gap="8"
				max
				className={classNames("", {}, [className])}
			>
				<EditableProfileCardHeader />
				{validateErrors?.length && validateErrors.map((err) => (
					<Text
						key={err}
						theme={TextTheme.ERROR}
						text={validateErrorTranslates[err]}
						data-testid="EditableProfileCard.Error"
					/>
				))}
				<ProfileCard
					data={formData}
					isLoading={isLoading}
					error={error}
					readonly={readonly}
					onChangeFirstname={onChangeFirstname}
					onChangeLastname={onChangeLastname}
					onChangeAge={onChangeAge}
					onChangeCurrency={onChangeCurrency}
					onChangeCountry={onChangeCountry}
					onChangeCity={onChangeCity}
					onChangeUsername={onChangeUsername}
					onChangeAvatar={onChangeAvatar}
				/>
			</VStack>
		</DynamicModuleLoader>
	);
});
