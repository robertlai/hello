import classnames from 'classnames';
import styles from 'styles/ContentSection.module.scss';

const ContentSection = ({ children, title, imageSrc, imageAltText, alt }) => (
    <section className={classnames(styles.container, { [styles.alt]: alt })}>
        <div className={styles.imageBox} style={{ backgroundImage: `url("${imageSrc}")` }}>
            <h1 className={classnames(styles.heading)}>
                {title}
            </h1>
            <img src={imageSrc} alt={imageAltText} />
        </div>
        <div className={styles.contentBox}>
            {children}
        </div>
    </section>
);

export default ContentSection;
