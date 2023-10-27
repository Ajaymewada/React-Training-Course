import Post from "./Post";
import classes from "./PostList.module.css"
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";

function PostList() {
    const [isModalVisible, setisModalVisible] = useState(true)
    function closeModalHandler() {
        setisModalVisible(false);
    }
    // let modalContent = null;
    // if (isModalVisible) {
    //     modalContent = <Modal onModalhide={closeModalHandler}>
    //         <NewPost />
    //     </Modal>
    // }
    return (
        <>
            {
                isModalVisible ? <Modal onModalhide={closeModalHandler}>
                    <NewPost />
                </Modal> : null
            }
            <ul className={classes.posts}>
                <Post author="Leela" body="React is an awesome course!" />
                <Post author="Pravalika" body="React is an awesome course!" />
                <Post author="Bharath" body="React is an awesome course!" />
                <Post author="Prasad" body="React is an awesome course!" />
            </ul>
        </>
    )
}

export default PostList;