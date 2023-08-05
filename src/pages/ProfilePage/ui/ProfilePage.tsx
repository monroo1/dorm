import { memo } from "react";
import { useParams } from "react-router-dom";
import { Page } from "widgets/Page";
import { EditableProfileCard } from "features/editableProfileCard";
import { classNames } from "shared/lib/classNames/classNames";
import { VStack } from "shared/ui/Stack";

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
	const { id } = useParams<{ id: string }>();

	return (
		<Page className={classNames("", {}, [className])}>
			<VStack gap="16" max>
				<EditableProfileCard id={id} />
			</VStack>
		</Page>
	);
});

export default ProfilePage;
