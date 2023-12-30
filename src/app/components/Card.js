import styles from './Card.module.css';
const Card = ({children}) => {
    return(
        <div className={styles['conatiner']}>
            {children}
        </div>
    )
}

export default Card;