import styles from './support.module.css'

function Company () {
    return(
        <section>
            <div className={styles.cover}>
                <div className={styles.details}>
                    SUPPORT
                </div>
            </div>
            <div className={styles.maimDetail}>
                <h3>17b Rood B, chinwo Avenue
                    Lagos,Nigeria
                    +2348088800088
                </h3>
            </div>
        </section>
    )
}

export default Company