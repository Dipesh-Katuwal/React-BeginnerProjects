import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData} from "../store/post-list-store";

let PostList = () => {
  const {postList} = useContext(PostListData);
  return (
    <div className="posts">
      {
        postList.map((post)=>{
          return <Post key={post.id} post={post}></Post>
        })
      }
    </div>
  );
};
export default PostList;
