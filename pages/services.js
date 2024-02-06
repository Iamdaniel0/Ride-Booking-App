import styles from './services.module.css'

function Services(){
    return(
        <div>
            <section className={styles.sec}>
                <div className={styles.ppp}>
                    <h2 className={styles.hhh}>OUR SERVICES</h2>
                </div>
            </section>
            <section className={styles.sec}>
                <div className={styles.ooo}>
                    <div className={styles.der}>
                        <img src='../../pexels-fritz-dela-cruz-5138268.jpg' className={styles.www}></img>
                    </div>
                    <span className={styles.lll}>.  </span>
                    <div className={styles.der}>
                        <img src='../../pexels-ketut-subiyanto-4246109.jpg'  className={styles.www}></img>
                    </div>
                    <span className={styles.lll}>.  </span>
                    <div className={styles.der}>
                        <img src='../../pexels-norma-mortenson-4393426.jpg'  className={styles.www}></img>
                    </div>
                    <span className={styles.lll}>.  </span>
                    <div className={styles.der}>
                        <img src='../../pexels-sam-lion-5709656.jpg'  className={styles.www}></img>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services