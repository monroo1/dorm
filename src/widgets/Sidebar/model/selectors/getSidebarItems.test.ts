import { StateSchema } from "@/app/providers/StoreProvider";
import MainIcon from "@/shared/assets/icons/main-20-20.svg";
import AboutIcon from "@/shared/assets/icons/about-20-20.svg";
import ProfileIcon from "@/shared/assets/icons/profile-20-20.svg";
import ArticleIcon from "@/shared/assets/icons/article-20-20.svg";
import { getSidebarItems } from "./getSidebarItems";
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from "@/shared/const/router";

const data = {
    id: "1",
    username: "string",
    avatar: "avatar",
};

describe("getSidebarItem.test", () => {
    test("should return with auth", () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: data,
            },
        };
        expect(getSidebarItems(state as StateSchema)).toEqual([
            {
                path: getRouteMain(),
                Icon: MainIcon,
                text: "главная",
            },
            {
                path: getRouteAbout(),
                Icon: AboutIcon,
                text: "о нас",
            },
            {
                path: getRouteProfile("1"),
                Icon: ProfileIcon,
                text: "профиль",
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: ArticleIcon,
                text: "статьи",
                authOnly: true,
            },
        ]);
    });
    test("should work with no auth", () => {
        const state: DeepPartial<StateSchema> = {
            user: {},
        };
        expect(getSidebarItems(state as StateSchema)).toEqual([
            {
                path: getRouteMain(),
                Icon: MainIcon,
                text: "главная",
            },
            {
                path: getRouteAbout(),
                Icon: AboutIcon,
                text: "о нас",
            },
        ]);
    });
});
