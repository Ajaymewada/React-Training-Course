import { useState } from "react";
import classes from "./NewPost.module.css";
function NewPost({ onClose, onPostList }) {
    const [bodyText, setbodyText] = useState("");
    const [authorText, setauthorText] = useState("");
    function bodyChangeHandler(event) {
        setbodyText(event.target.value)
    }
    function authorChangeHandler(event) {
        setauthorText(event.target.value);
    }
    function submitPostHandler(event) {
        event.preventDefault();
        let postData = {
            body: bodyText,
            author: authorText
        }
        onClose();
        onPostList(postData)
    }
    return (
        <>
            <form className={classes.form} onSubmit={submitPostHandler}>
                <p>
                    <label htmlFor="text">Body</label>
                    <textarea id="text" rows={5} onChange={bodyChangeHandler}></textarea>
                </p>
                <p>
                    <label htmlFor="Name">Author</label>
                    <input type="text" id="Name" onChange={authorChangeHandler} />
                </p>
                <p className={classes.actions}>
                    <button type="button" onClick={onClose}>Cancel</button>
                    <button type="submit">Submit</button>
                </p>
            </form>
        </>
    )
}

export default NewPost;