import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { Profile } from "../../model/types/profile";

import {
    ProfileCardRedesigned,
    ProfileCardRedesignedSkeleton,
    ProfileCardRedesignedError,
} from "../ProfileCardRedesigned/ProfileCardRedesigned";
import { ToggleFeatures } from "@/shared/lib/features";
import { ProfileCardDeprecated } from "../ProfileCardDeprecated/ProfileCardDeprecated";

export interface ProfileCardProps {
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
    const { isLoading, error } = props;

    if (isLoading) {
        return <ProfileCardRedesignedSkeleton />;
    }

    if (error) {
        return <ProfileCardRedesignedError />;
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ProfileCardRedesigned {...props} />}
            off={<ProfileCardDeprecated {...props} />}
        />
    );
};
