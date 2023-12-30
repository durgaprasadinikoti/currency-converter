import styles from './InputWrapper.module.css';
const InputWrapper = ({children}) => {
    return (
        <div className={styles['conatiner']}>
            {children}
        </div>
    )

}

export default InputWrapper;