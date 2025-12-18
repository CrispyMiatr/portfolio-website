import { Link } from 'react-router';
import styles from '~styles/app.module.scss';
import { useState, useEffect } from 'react';
import { NavButton } from '../ui';

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

            <div className={styles['navbar__nav-buttons']}>
                <NavButton name="Home" link="/" />
                <NavButton name="Projects" link="/projects" />
                <NavButton name="About" link="/about" />
                <NavButton name="Contact" link="/contact" />
            </div>

            <div className={styles['navbar__extra']}>
                <div className={styles['navbar__extra__time']}>
                    <p>{currentTime}</p>
                </div>

                <img className={styles['navbar__extra__icon']} src='./src/assets/globe.svg' alt="" />

            </div>
        </nav>
    );
}