import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { Icons, NavButton } from '../ui';
import styles from '~styles/app.module.scss';

export const Header = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const currentTime = time.toLocaleTimeString();

    return (
        <nav className={styles['navbar']}>
            <Link to="/">
                <img src={'./src/assets/logo.svg'} alt="Logo" className={styles['navbar__logo']} />
            </Link>

            <div className={styles['navbar__nav-btns']}>
                <NavButton name="Home" link="/" />
                <NavButton name="Projects" link="/projects" />
                <NavButton name="About" link="/about" />
                <NavButton name="Contact" link="/contact" />
            </div>

            <div className={styles['navbar__extra']}>
                <div className={styles['navbar__extra__time']}>
                    <p>{currentTime}</p>
                </div>

                <div className={styles['navbar__extra__icon']}>
                    <Icons.Globe />
                </div>
            </div>
        </nav>
    );
};