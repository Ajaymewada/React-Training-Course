import { useState } from "react";
import classes from "./NewPost.module.css";
function NewPost() {
    const [CommentText, setCommentText] = useState("");
    function commentTextHandler(event) {
        setCommentText(event.target.value);
    }
    return (
        <>
            <form className={classes.form}>
                <p>
                    <label htmlFor="text">Text</label>
                    <textarea id="text" rows={5} onChange={commentTextHandler}></textarea>
                </p>
                <p>{CommentText}</p>
                <p>
                    <label htmlFor="Name">Author Name</label>
                    <input type="text" id="Name" />
                </p>
            </form>
        </>
    )
}

export default NewPost;