import classes from "./MainHeader.module.css"
import { FaFacebookMessenger, FaPlusCircle } from "react-icons/fa";
function MainHeader() {
    return(
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <FaFacebookMessenger />
                Twitter Post
            </h1>
            <p>
                <button className={classes.button}>
                    New Post
                    <FaPlusCircle />
                </button>
            </p>
        </header>
    )
}

export default MainHeader;