import { Link, useLocation } from 'react-router';
import type { ButtonType } from '~/shared';
import styles from '~styles/app.module.scss';

export const Button = ({ name, link }: ButtonType) => {
    // Check if the current location matches the button's link
    const location = useLocation();
    const isActive = location.pathname === link;

    return (
        <Link to={link} className={`${styles['button']} ${isActive ? styles['button--active'] : ''}`}>
            <p className={styles['button__title']}>{name}</p>
        </Link>
    );
};
