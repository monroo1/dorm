import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";

export const getScrollRestorations = (state: StateSchema) =>
    state.scrollRestoration.scroll;
export const getScrollRestorationsByPath = createSelector(
    getScrollRestorations,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
