import { Link } from 'react-router';
import { Icons, NavButton } from '../ui';
import styles from '~styles/app.module.scss';

export const Footer = () => {

    return (
        <nav className={styles['footer']}>
            <Link to="/">
                <img src={'./src/assets/logo.svg'} alt="Logo" className={styles['footer__logo']} />
            </Link>

            <div className={styles['footer__nav-btns']}>
                <NavButton name="Home" link="/" />
                <NavButton name="Projects" link="/projects" />
                <NavButton name="About" link="/about" />
                <NavButton name="Contact" link="/contact" />
            </div>

            <div className={styles['footer__socials']}>
                <a href="" target='_blank' className={styles['footer__socials__icon']}>
                    <Icons.Mail aria-label="Send email" />
                </a>

                <a href="" target='_blank' className={styles['footer__socials__icon']}>
                    <Icons.LinkedIn aria-label="LinkedIn profile" />
                </a>

                <a href="" target='_blank' className={styles['footer__socials__icon']}>
                    <Icons.Instagram aria-label="Instagram profile" />
                </a>
            </div>
        </nav>
    );
};