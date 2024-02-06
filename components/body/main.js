import MainBtn from "./mainBtn"
import MainHeader from "./mainHeader"
import MainText from "./mainText"
import styles from './main.module.css'
import SectionOne from "../sectionOne/sectionOne"


function Body(){
    return(
        <div className={styles.Body}>
            <div className={styles.backg}>
                <div className={styles.backg2}>
                    <MainHeader/>
                    <MainText/>
                    <MainBtn/>
                </div>
            </div>
            <div className={styles.Body2}>
                <div className={styles.Body2Detail}>
                    <span className={styles.del}>GGGGGGGGGGGGGGGGGGGGGGGG</span>

                </div>
            </div>
            <section>
                <div>
                    <SectionOne/>
                </div>
            </section>
        </div>
    )
}

export default Body