import { Button } from '~/components';
import styles from '~styles/pages/home.module.scss';

export const Home = () => {

    return (
        <div className={styles['home-container']}>
            {/* <div className={styles['home-container__bg']} /> */}
            <img className={styles['home-container__bg']} src="./src/assets/logo.svg" alt="" />
        </div>
    );
};
