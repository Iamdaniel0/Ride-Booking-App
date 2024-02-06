import styles from './sectionOneTXT.module.css'

function SectionOneTXT(){
    return(
        <div className={styles.entire}>
            <span className={styles.Header}>"Turn Driving into Earnings</span>
            <p className={styles.Text}>
                Drive for Profit, Drive for Freedom<br></br>
                With over 150 million riders, you'll have a constant stream of <br></br>             ride requests. And when demand peaks, so do your earnings.<br></br>
                <br></br>
                Create Your Own Schedule<br></br>
                Drive on your terms, whenever you please. <br></br>Weekdays, weekends,               evenings – tailor your driving to your lifestyle.<br></br>
<br></br>
                Weekly Payouts<br></br>
                Your earnings are delivered to you at the close of each week,   <br></br>            eliminating the wait for payday.<br></br>
                Discover More"
            </p>
            <button className={styles.ExBtn}>Explore our Catering Capabilities</button>
        </div>
    )
}

export default SectionOneTXT