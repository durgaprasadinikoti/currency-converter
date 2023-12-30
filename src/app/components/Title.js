import styles from './Title.module.css';
const Title = () => {
    return (
        <h1 className={styles["hero-head"]}>
             $CURRENCY <span className={styles["hero-head-span"]}> CONVERTER </span>
        </h1>
    )
}

export default Title;