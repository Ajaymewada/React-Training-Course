import Post from "./Post";
import classes from "./PostList.module.css"
import NewPost from "./NewPost";
function PostList() {
    return (
        <>
            <NewPost />
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