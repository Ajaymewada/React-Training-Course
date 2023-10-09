import { useState } from "react";
import classes from "./NewPost.module.css";
function NewPost() {
    const [CommentText, setCommentText] = useState("");
    console.log(CommentText);
    console.log(setCommentText);
    function commentTextHandler(event) {
        console.log(event.target.value);
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