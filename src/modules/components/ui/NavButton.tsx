import { Link, useLocation } from 'react-router';
import type { NavButtonType } from '~/shared';
import styles from '~styles/app.module.scss';

export const NavButton = ({ name, link }: NavButtonType) => {
    // Check if the current location matches the button's link
    const location = useLocation();
    const isActive = location.pathname === link;

    return (
        <Link to={link} className={`${styles['nav-button']} ${isActive ? styles['nav-button--active'] : ''}`}>
            <p className={styles['nav-button__title']}>{name}</p>
        </Link>
    );
};
