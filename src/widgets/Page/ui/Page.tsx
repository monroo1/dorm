import { classNames } from "shared/lib/classNames/classNames";
import {
	MutableRefObject, ReactNode, UIEvent, memo, useRef,
} from "react";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useLocation } from "react-router-dom";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useSelector } from "react-redux";
import { StateSchema } from "app/providers/StoreProvider";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";
import cls from "./Page.module.scss";
import { scrollRestorationActions } from "../model/slices/scrollRestorationSlice";
import { getScrollRestorationsByPath } from "../model/selectors/scrollRestorationSelectors";

interface PageProps {
    className?: string;
    children: ReactNode;
	onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
	const { className, children, onScrollEnd } = props;
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();

	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
	const scrollPosition = useSelector(
		(state: StateSchema) => getScrollRestorationsByPath(state, pathname),
	);

	const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
		dispatch(scrollRestorationActions.setScrollPosition({
			position: e.currentTarget.scrollTop,
			path: pathname,
		}));
	}, 500);

	useInitialEffect(() => {
		wrapperRef.current.scrollTop = scrollPosition;
	});

	useInfiniteScroll({
		triggerRef,
		wrapperRef,
		callback: onScrollEnd,
	});

	return (
		<section
			ref={wrapperRef}
			className={classNames(cls.Page, {}, [className])}
			onScroll={onScroll}
		>
			{children}
			{onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}

		</section>
	);
});
