import Post from "./Post";
import classes from "./PostList.module.css"
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";

function PostList({ isPopupShowHide, hideModalHandler }) {
    // let modalContent = null;
    // if (isModalVisible) {
    //     modalContent = <Modal onModalhide={closeModalHandler}>
    //         <NewPost />
    //     </Modal>
    // }
    const [posts, setpostsList] = useState([]);
    function postListHandler(postData) {
        setpostsList((existingPosts) => [postData, ...existingPosts]);
    }
    return (
        <>
            {
                isPopupShowHide ? <Modal onModalhide={hideModalHandler}>
                    <NewPost onClose={hideModalHandler} onPostList={postListHandler}/>
                </Modal> : null
            }
            <ul className={classes.posts}>
                { 
                    posts.length > 0 ? posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />) : <h1>No Posts</h1>
                }
                {/* <Post author="Leela" body="React is an awesome course!" />
                <Post author="Pravalika" body="React is an awesome course!" />
                <Post author="Bharath" body="React is an awesome course!" />
                <Post author="Prasad" body="React is an awesome course!" /> */}
            </ul>
        </>
    )
}

export default PostList;