import { memo } from "react";
import clsx from "clsx";

import css from "./Invites.module.scss";
import { SendInvite } from "@/features/sendInvite";
import { InvitesList } from "@/entities/invite";

interface InvitesProps {
    className?: string;
}

export const Invites = memo((props: InvitesProps) => {
    const { className } = props;

    return (
        <div className={clsx(css.Invites, className)}>
            <h2>Приглашения</h2>
            <SendInvite />
            <InvitesList />
        </div>
    );
});
