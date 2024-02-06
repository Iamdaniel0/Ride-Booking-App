import styles from './mainText.module.css'

function MainText(){
    return(
        <div className={styles.Para}>
            <p className={styles.Ptext}>
            <span className={styles.ttt}>Shift</span> is your ultimate mobility companion. <br></br>Experience swift pickups by top-rated drivers,ensuring a pleasant journey <br></br>to your destination. <br></br>Alternatively, effortlessly navigate through traffic with <br></br>our cutting-edge scooters for a smoother commute.
            </p>
        </div>
    )
}

export default MainText