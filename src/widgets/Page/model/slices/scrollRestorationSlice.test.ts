import { ScrollRestorationSchema } from "../types/scrollRestoration";
import { scrollRestorationActions, scrollRestorationReducer } from "./scrollRestorationSlice";

describe("scrollRestorationSlice.test", () => {
	test("test setScrollPosition with created property", () => {
		const state: DeepPartial<ScrollRestorationSchema> = {
			scroll: {
				page: 200,
			},
		};
		expect(scrollRestorationReducer(
			state as ScrollRestorationSchema,
			scrollRestorationActions.setScrollPosition({ path: "page", position: 300 }),
		)).toEqual({
			scroll: {
				page: 300,
			},
		});
	});
	test("test setScrollPosition with not created properties", () => {
		const state: DeepPartial<ScrollRestorationSchema> = {
			scroll: {},
		};
		expect(scrollRestorationReducer(
			state as ScrollRestorationSchema,
			scrollRestorationActions.setScrollPosition({ path: "page", position: 300 }),
		)).toEqual({
			scroll: {
				page: 300,
			},
		});
	});
	test("test setScrollPosition with not created another properties", () => {
		const state: DeepPartial<ScrollRestorationSchema> = {
			scroll: {
				articles: 500,
			},
		};
		expect(scrollRestorationReducer(
			state as ScrollRestorationSchema,
			scrollRestorationActions.setScrollPosition({ path: "page", position: 300 }),
		)).toEqual({
			scroll: {
				articles: 500,
				page: 300,
			},
		});
	});
});
