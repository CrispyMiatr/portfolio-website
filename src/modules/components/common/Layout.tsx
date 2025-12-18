import { Outlet } from 'react-router';
import styles from '~styles/app.module.scss';
import { Footer, Header } from '~/components/layout';

export const Layout = () => {

    return (
        <div className={styles['container-wrapper']}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};