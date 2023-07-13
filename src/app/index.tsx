import { Suspense, useEffect } from "react";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { classNames } from "shared/lib/classNames/classNames";
import { useDispatch, useSelector } from "react-redux";
import { getUserInited, userActions } from "entities/User";
import { useTheme } from "app/providers/ThemeProvider";

function App() {
	const { theme } = useTheme();
	const dispatch = useDispatch();
	const inited = useSelector(getUserInited);

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);

	return (
		<div className={classNames("app", {}, [theme])}>
			<Suspense fallback="">
				<Navbar />
				<div className="content-page">
					<Sidebar />
					{inited && <AppRouter />}
				</div>
			</Suspense>
		</div>
	);
}

export default App;
