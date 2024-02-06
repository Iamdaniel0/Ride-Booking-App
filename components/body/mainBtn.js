import styles from './mainBtn.module.css'

function MainBtn(){
    return(
        <div className={styles.btndiv}>
            <button className={styles.btn}>
                Learn more
            </button>
        </div>
    )
}

export default MainBtn