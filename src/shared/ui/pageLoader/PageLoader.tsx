import clsx from "clsx";

import css from "./PageLoader.module.scss";

export function PageLoader() {
    return <div className={clsx(css.PageLoader)}>loading</div>;
}
