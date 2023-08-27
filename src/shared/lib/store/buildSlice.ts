import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators, createSlice } from "@reduxjs/toolkit";
import { SliceCaseReducers, CreateSliceOptions } from "@reduxjs/toolkit/dist";

export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string,
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
    const slice = createSlice(options);

    const useActions = (): typeof slice.actions => {
        const dispatch = useDispatch();

        // @ts-ignore
        return useMemo(
            // @ts-ignore
            () => bindActionCreators(slice.actions, dispatch),
            [dispatch],
        );
    };

    return {
        ...slice,
        useActions,
    };
}

// export const counterSlice = createSlice({
// 	name: "counter",
// 	initialState,
// 	reducers: {
// 		increment: (state) => {
// 			state.value += 1;
// 		},
// 		decrement: (state) => {
// 			state.value -= 1;
// 		},
// 	},
// });
// export const { actions: counterActions } = counterSlice;
// export const { reducer: counterReducer } = counterSlice;
