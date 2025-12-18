import { Link } from 'react-router';
import styles from '~styles/app.module.scss';
import { Button } from '../ui';

export const Header = () => {

    return (
        <nav className={styles['navbar']}>
            <Link to="/">
                <img src={'./src/assets/react.svg'} alt="Logo" className={styles['navbar__logo']} />
            </Link>

            <div className={styles['navbar__nav-buttons']}>
                <Button name="Home" link="/" />
            </div>
        </nav>
    );
}