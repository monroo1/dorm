import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import {
	DynamicModuleLoader,
	ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
	ProfileCard,
	fetchProfileData,
	getProfileIsLoading,
	getProfileError,
	profileReducer,
	profileActions,
	getProfileReadonly,
	getProfileForm,
	getProfileValidateErrors,
	ValidateProfileError,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Page } from "widgets/Page";
import { VStack } from "shared/ui/Stack";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

const reducers: ReducersList = {
	profile: profileReducer,
};

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
	const { t } = useTranslation("profile");
	const { id } = useParams<{ id: string }>();

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
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<Page className={classNames("", {}, [className])}>
				<VStack gap="16" max>
					<ProfilePageHeader />
					{validateErrors?.length && validateErrors.map((err) => (
						<Text
							key={err}
							theme={TextTheme.ERROR}
							text={validateErrorTranslates[err]}
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
			</Page>
		</DynamicModuleLoader>
	);
});

export default ProfilePage;
