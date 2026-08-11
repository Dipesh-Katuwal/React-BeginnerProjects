import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import {PostList} from "../store/post-list-store";

let Post = ({ post }) => {
  const {deletePost}=useContext(PostList);
  return (
    <div className="card card-post" style={{ width: "30rem" }}>
      <div className="delete">
        <button type="button" className="btn btn-danger delete" onClick={()=>deletePost(post.id)}>
          <MdDelete />
        </button>
      </div>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag,index) => {
          return <span key={`${post.id}-${tag}-${index}`} className="badge text-bg-primary tags">{tag}</span>;
        })}
      </div>
       <div className="reactions">
        <hr/>
          <span className="position top start-100 translate-middle badge rounded-pill bg-info reaction">
            {post.reactions }
          </span>

        </div>
    </div>
  );
};
export default Post;
