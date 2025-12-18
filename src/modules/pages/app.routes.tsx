import styles from '~styles/app.module.scss';
import { createBrowserRouter } from "react-router";
import { Home } from './Home';
import { Layout } from '~/components';

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                // {
                //     path: "name",
                //     element: <module-name />
                // },
                {
                    path: "*",
                    element: (
                        <div className={styles['error']}>
                            <h1 className={styles['error__h1']}>404 Page not found</h1>
                        </div>
                    ),
                },
            ],
        },
    ],
);
