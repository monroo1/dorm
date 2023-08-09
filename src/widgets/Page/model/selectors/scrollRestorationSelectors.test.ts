import { StateSchema } from "@/app/providers/StoreProvider";
import { getScrollRestorationsByPath } from "./scrollRestorationSelectors";

describe("scrollRestorationSelectors.test", () => {
	test("should return getScrollRestorationsByPath", () => {
		const state: DeepPartial<StateSchema> = {
			scrollRestoration: {
				scroll: {
					page: 200,
				},
			},
		};
		expect(getScrollRestorationsByPath(state as StateSchema, "page")).toEqual(200);
	});
	test("should return getScrollRestorationsByPath with empty state", () => {
		const state: DeepPartial<StateSchema> = {
			scrollRestoration: {
				scroll: {},
			},
		};
		expect(getScrollRestorationsByPath(state as StateSchema, "page")).toEqual(0);
	});
});
