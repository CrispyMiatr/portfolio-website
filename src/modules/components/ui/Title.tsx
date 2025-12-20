import type { TitleType } from '~/shared';
import styles from '~styles/app.module.scss';

export const Title = ({ name, color }: TitleType) => {

    return (
        <div className={styles['title-wrap']}>
            <h1
                className={styles['title-wrap__title']}
                style={{ '--title-bg': color } as React.CSSProperties}
            >
                {name}
            </h1>
        </div>
    );
};
