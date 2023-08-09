import { StateSchema } from "@/app/providers/StoreProvider";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import MainIcon from "@/shared/assets/icons/main-20-20.svg";
import AboutIcon from "@/shared/assets/icons/about-20-20.svg";
import ProfileIcon from "@/shared/assets/icons/profile-20-20.svg";
import ArticleIcon from "@/shared/assets/icons/article-20-20.svg";
import { getSidebarItems } from "./getSidebarItems";

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
				path: RoutePath.main,
				Icon: MainIcon,
				text: "главная",
			},
			{
				path: RoutePath.about,
				Icon: AboutIcon,
				text: "о нас",
			},
			{
				path: `${RoutePath.profile}1`,
				Icon: ProfileIcon,
				text: "профиль",
				authOnly: true,
			},
			{
				path: RoutePath.articles,
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
				path: RoutePath.main,
				Icon: MainIcon,
				text: "главная",
			},
			{
				path: RoutePath.about,
				Icon: AboutIcon,
				text: "о нас",
			},
		]);
	});
});
