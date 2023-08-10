import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { RatingCard } from "@/entities/Rating";
import { getUserAuthData } from "@/entities/User";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { useGetProfileRating, useRateProfile } from "../../api/profileRatingApi";

export interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
	const { className, profileId } = props;
	const { t } = useTranslation("profile");
	const userData = useSelector(getUserAuthData);
	const { data, isLoading, error } = useGetProfileRating({
		profileId,
		userId: userData?.id ?? "",
	});
	const [rateProfileMutation] = useRateProfile();

	const handleRateProfile = useCallback((starsCount: number, feedback?: string) => {
		try {
			rateProfileMutation({
				userId: userData?.id ?? "",
				profileId,
				rate: starsCount,
				feedback,
			});
		} catch (e) {
			console.log(e);
		}
	}, [rateProfileMutation, profileId, userData?.id]);

	const onCancel = useCallback((starsCount: number) => {
		handleRateProfile(starsCount);
	}, [handleRateProfile]);

	const onAccept = useCallback((starsCount: number, feedback?: string) => {
		handleRateProfile(starsCount, feedback);
	}, [handleRateProfile]);

	if (isLoading) {
		return <Skeleton width="100%" height={120} />;
	}

	const rating = data?.[0];

	return (
		<RatingCard
			onAccept={onAccept}
			onCancel={onCancel}
			rate={rating?.rate}
			className={className}
			title={t("оцените этот профиль")}
			feedbackTitle={t("оставьте свой отзыв")}
			hasFeedback
		/>
	);
});

export default ProfileRating;
