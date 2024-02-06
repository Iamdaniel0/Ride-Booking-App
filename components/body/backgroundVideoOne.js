import styles from './backgroundVideoOne.module.css'

function BackgroundVideoOne(){
    return(
        <div>
            <video className={styles.video} autoPlay loop muted>
                <source src="../../video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default BackgroundVideoOne