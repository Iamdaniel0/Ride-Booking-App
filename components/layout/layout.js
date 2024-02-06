const { Fragment } = require("react");
const { default: MainNavigation } = require("../navigation/navigation");
const { default: Footer } = require("../footer/footer");
import classes from './layout.module.css'


function Layout(props) {
    return(
        <Fragment>
            <MainNavigation/>
            <main className={classes.body}>
                {props.children}
            </main>
            <Footer/>
        </Fragment>
    )
}

export default Layout;