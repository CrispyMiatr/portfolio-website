import type { ButtonType } from '~/shared';
import styles from '~styles/app.module.scss';

export const Button = ({ name }: ButtonType) => {

    return (
        <div className={styles['btn']}>
            <p className={styles['btn__title']}>{name}</p>
        </div>
    );
};
