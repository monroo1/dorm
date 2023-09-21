import { memo } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Page } from "@/widgets/Page";
import { EditableProfileCard } from "@/features/editableProfileCard";
import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { ProfileRating } from "@/features/profileRating";
import { getUserAuthData } from "@/entities/User";

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();
    const userData = useSelector(getUserAuthData);

    if (!id) {
        return null;
    }

    return (
        <Page
            data-testid="ProfilePage"
            className={classNames("", {}, [className])}
        >
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
                {userData?.id !== id && <ProfileRating profileId={id} />}
            </VStack>
        </Page>
    );
});

export default ProfilePage;
