import { memo } from "react";
import clsx from "clsx";

import css from "./Invite.module.scss";
import { IInvite } from "@/shared/types/Invite";

interface InviteProps {
    className?: string;
    invite: IInvite;
}

export const Invite = memo((props: InviteProps) => {
    const { className, invite } = props;

    const date = new Date(invite.createdAt);

    return (
        <div className={clsx(css.Invite, className)}>
            <p>{invite.email}</p>
            <p>{`${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`}</p>
            <div className={invite.activated ? css.activated : css.inactive}>
                <p>{invite.activated ? "Принято" : "Отправлено"}</p>
            </div>
        </div>
    );
});
