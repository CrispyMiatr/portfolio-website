import { NavLink } from 'react-router';
import type { NavButtonType } from '~/shared';
import styles from '~styles/app.module.scss';

export const NavButton = ({ name, link }: NavButtonType) => {

    return (
        <NavLink to={link} className={({ isActive }) => isActive ? `${styles['nav-btn']} ${styles['nav-btn--active']}` : styles['nav-btn']}>
            {name}
        </NavLink>
    );
};
