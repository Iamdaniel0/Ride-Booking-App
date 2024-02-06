import Link from 'next/link'
import styles from './navigation.module.css'

function MainNavigation() {
    return(
        <div className={styles.Navbar}>
            <header className={styles.Nav}>
                <div className={styles.home}>
                    <span className={styles.imgSpan}>
                        <img src='../../shiftLogo.png' className={styles.shiftlogo}></img>
                    </span>
                </div>

                <div className={styles.clicks}>
                    <ul className={styles.maink}> 
                    <li className={styles.Link}><Link href='/services'>Services</Link></li>
                        <li className={styles.Link}><Link href='/safety'>Safety</Link></li>
                    {/* <li className={styles.Link}><Link href='/bookings'>bookings</Link></li> */}
                    <li className={styles.Link}><Link href='/support'>Help</Link></li>

                    <li className={styles.Link}><Link href='/Adminlog'>AdminLog</Link></li>
                    </ul>
                </div>
                <div className={styles.kiil}>
                    <ul className={styles.hhh}>
                    <li className={styles.Ling}><Link href='/donate'>Donate</Link></li>
                    <li className={styles.Lin}><Link href='/earnWithShift'><button className={styles.SUbtn}>SIGN UP</button></Link></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default MainNavigation