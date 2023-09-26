import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import MainIconDeprecated from "@/shared/assets/icons/main-20-20.svg";
import AboutIconDeprecated from "@/shared/assets/icons/about-20-20.svg";
import ProfileIconDeprecated from "@/shared/assets/icons/profile-20-20.svg";
import ArticleIconDeprecated from "@/shared/assets/icons/article-20-20.svg";
import MainIcon from "@/shared/assets/icons/Home-redesigned.svg";
import AboutIcon from "@/shared/assets/icons/Info-redesigned.svg";
import ProfileIcon from "@/shared/assets/icons/Avatar-redesigned.svg";
import ArticleIcon from "@/shared/assets/icons/Doc-redesigned.svg";
import { SidebarItemType } from "../types/sidebar";
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from "@/shared/const/router";
import { toggleFeatures } from "@/shared/lib/features";

export const useSidebarItems = () => {
    const userData = useSelector(getUserAuthData);
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: toggleFeatures({
                name: "isAppRedesigned",
                off: () => MainIconDeprecated,
                on: () => MainIcon,
            }),
            text: "главная",
        },
        {
            path: getRouteAbout(),
            Icon: toggleFeatures({
                name: "isAppRedesigned",
                off: () => AboutIconDeprecated,
                on: () => AboutIcon,
            }),
            text: "о нас",
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: toggleFeatures({
                    name: "isAppRedesigned",
                    off: () => ProfileIconDeprecated,
                    on: () => ProfileIcon,
                }),
                text: "профиль",
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: toggleFeatures({
                    name: "isAppRedesigned",
                    off: () => ArticleIconDeprecated,
                    on: () => ArticleIcon,
                }),
                text: "статьи",
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
};
