import { memo } from "react";
import { HStack } from "@/shared/ui/Stack";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import cls from "../AddCommentForm/AddCommentForm.module.scss";

export const AddCommentFormSkeleton = memo(() => (
	<HStack max justify="between" className={cls.AddCommentForm}>
		<Skeleton width={220} height={24} />
		<Skeleton width={110} height={38} />
	</HStack>
));
