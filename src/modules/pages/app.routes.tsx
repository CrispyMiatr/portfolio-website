import { createBrowserRouter } from "react-router";
import { Layout } from '~/components';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Projects } from './Projects';
import styles from '~styles/app.module.scss';

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
                {
                    path: "projects",
                    element: <Projects />
                },
                {
                    path: "about",
                    element: <About />
                },
                {
                    path: "contact",
                    element: <Contact />
                },
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
