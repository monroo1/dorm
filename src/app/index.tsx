
import "./styles/index.scss";
import { Link, RouterProvider } from "atomic-router-react";
import { Pages } from "@/pages";
import { router } from "@/shared/config/routing";

interface IndexProps {
    className?: string;
}

export const App = (props: IndexProps) => {
    const { className } = props;

    //

    // RoutesView;
    // const { data: asdasd, pending } = useUnit(getDormRequest);

    // useEffect(() => {
    //     getDormRequest.start();
    // }, []);

    // console.log(asdasd, "sdasdas");
    // console.log(pending, "pending");

    return (
        <RouterProvider router={router}>
                <header>header</header>
                <Link to="/">main</Link>
                <Link to="/signin">signin</Link>
                <Link to="/signup">signup</Link>
                <main>
                    <Pages />
                </main>
                <footer>footer</footer>
            </RouterProvider>
    );
};
