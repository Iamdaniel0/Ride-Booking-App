
import SectionOneIMG from './sectionOneIMG'
import SectionOneTXT from './sectionOneTXT'
import styles from './sectionOne.module.css'

function SectionOne(){
    return(
        <div className={styles.SectionOne}>
            <SectionOneIMG/>
            <SectionOneTXT/>
        </div>
    )
}

export default SectionOne