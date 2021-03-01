import styles from 'styles/LinkIcon.module.scss';

const LinkIcon = ({ href, src, alt }) => (
    <a className={styles.icon} href={href} target="_blank">
        <img src={src} alt={alt} />
    </a>
);

export default LinkIcon;
