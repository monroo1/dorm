import { memo } from "react";
import clsx from "clsx";

import { useUnit } from "effector-react";
import css from "./InvitesList.module.scss";
import { $invites } from "../../model";
import { Invite } from "../invite/Invite";

interface InvitesListProps {
    className?: string;
}

export const InvitesList = memo((props: InvitesListProps) => {
    const { className } = props;

    const invites = useUnit($invites);

    if (!invites) {
        return <div>...loading</div>;
    }

    return (
        <div className={clsx(css.InvitesList, className)}>
            <div className={css.title}>
                <p className={css.email}>Email</p>
                <p className={css.date}>Дата отправки</p>
                <p className={css.status}>Статус</p>
            </div>
            {invites.map((invite) => (
                <Invite invite={invite} />
            ))}
        </div>
    );
});
