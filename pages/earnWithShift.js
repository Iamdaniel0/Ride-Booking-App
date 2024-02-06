import EarnForm from '@/components/userForm/earnForm'
import styles from './earnWithShift.module.css'

function Earn(){
    return(
        <div className={styles.index}>
            <section className={styles.cover}>
            <div className={styles.tras}>
                <div className={styles.text}>
                    <h3 className={styles.Detailed}>Make money driving with Bolt in Nigeria</h3>
                    <p>Become a Bolt driver, set your schedule and earn money by driving!</p>
                </div>
                <div>
                    <EarnForm/>
                </div>
            </div>
            </section>
            <div className={styles.Earnads}>
                <h4>Wisokyburgh</h4>
            </div>
            <section>
                <div>
                    <div>

                    </div>
                    <div className={styles.first}>
                        <div className={styles.firstImg}>
                            <img src='../../timemomey.jpg'className={styles.EarnImages}></img>
                        </div>
                        <div className={styles.firstDetails}>
                            <p className={styles.EarnText}>
                            Certainly! At your company, employees can expect to be part of a vibrant and inclusive workplace culture that prioritizes collaboration and open communication. The organization's commitment to employee development includes ongoing training programs, mentorship opportunities, and a clear career progression path. Additionally, the company values its employees' well-being and promotes a healthy work-life balance through flexible scheduling and various wellness initiatives.
                            </p>
                        </div>
                        
                    </div>
                    <div className={styles.first}>
                        <div className={styles.firstImg}>
                        <img src='../../timemomey.jpg'className={styles.EarnImages}></img>
                        </div>
                        <div className={styles.firstDetails}>
                        <p className={styles.EarnText}>
                            Certainly! At your company, employees can expect to be part of a vibrant and inclusive workplace culture that prioritizes collaboration and open communication. The organization's commitment to employee development includes ongoing training programs, mentorship opportunities, and a clear career progression path. Additionally, the company values its employees' well-being and promotes a healthy work-life balance through flexible scheduling and various wellness initiatives.
                            </p>
                        </div>
                        
                    </div>
                    <div className={styles.first}>
                        <div className={styles.firstImg}>
                        <img src='../../timemomey.jpg'className={styles.EarnImages}></img>
                        </div>
                        <div className={styles.firstDetails}>
                        <p className={styles.EarnText}>
                            Certainly! At your company, employees can expect to be part of a vibrant and inclusive workplace culture that prioritizes collaboration and open communication. The organization's commitment to employee development includes ongoing training programs, mentorship opportunities, and a clear career progression path. Additionally, the company values its employees' well-being and promotes a healthy work-life balance through flexible scheduling and various wellness initiatives.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Earn