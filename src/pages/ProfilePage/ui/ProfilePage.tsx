import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback, useEffect } from "react";
import {
	DynamicModuleLoader,
	ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
	ProfileCard,
	fetchProfileData,
	getProfileData,
	getProfileIsLoading,
	getProfileError,
	profileReducer,
	profileActions,
	getProfileReadonly,
	getProfileForm,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

const reducers: ReducersList = {
	profile: profileReducer,
};

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
	const dispatch = useAppDispatch();

	const formData = useSelector(getProfileForm);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);
	const readonly = useSelector(getProfileReadonly);

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

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
			<div className={classNames("", {}, [className])}>
				<ProfilePageHeader />
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

			</div>
		</DynamicModuleLoader>
	);
});

export default ProfilePage;
