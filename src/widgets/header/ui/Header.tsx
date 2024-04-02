import clsx from "clsx";
import { Link } from "atomic-router-react";
import { Icon } from "@/shared/ui/icon/Icon";
import BellIcon from "@/shared/assets/bell.svg";
import UserIcon from "@/shared/assets/user.svg";
import { routes } from "@/shared/config/routing";

import css from "./Header.module.scss";

export function Header() {
    return (
        <header className={css.header}>
            <div className={clsx(css.Header, "wrapper")}>
                <Link to={routes.discussions} className={css.logo}>
                    МЫЩ<span>АГА</span>
                </Link>
                <nav className={css.links}>
                    <Link to={routes.discussions} className={css.link}>
                        Главная
                    </Link>
                    <Link to={routes.discussions} className={css.link}>
                        Объявления
                    </Link>
                    <Link to={routes.discussions} className={css.link}>
                        Стол заявок
                    </Link>
                    <Link to={routes.discussions} className={css.link}>
                        Мероприятия
                    </Link>
                </nav>
                <div className={css.panel}>
                    <button type="button" className={css.danger}>
                        Тревога
                    </button>
                    <Icon
                        Svg={BellIcon}
                        width={22}
                        height={22}
                        color="#737B7D"
                    />
                    <Link to={routes.profile} className={css.user}>
                        <Icon
                            Svg={UserIcon}
                            width={22}
                            height={22}
                            color="#C3CBCD"
                        />
                    </Link>
                </div>
            </div>
        </header>
    );
}
