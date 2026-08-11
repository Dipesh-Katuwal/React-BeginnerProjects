import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

let CreatePost = () => {
  const { addPost } = useContext(PostList);

  const postTitle = useRef();
  const postBody = useRef();
  const postTags = useRef();
  const postReactions = useRef();
  const userId = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    let currentPostList = {
      id: Date.now(),
      title: postTitle.current.value,
      body: postBody.current.value,
      reactions: Number(postReactions.current.value),
      userId: userId.current.value,
      tags: postTags.current.value.split(" "),
    };

    postTitle.current.value = "";
    postBody.current.value = "";
    postReactions.current.value = "";
    userId.current.value = "";
    postTags.current.value = "";

    addPost(currentPostList);
    alert("Post made successfully!!!");
  };

  return (
    <form className="postdata" onSubmit={handleSubmit}>
      <h2>Let's create your post...</h2>
      <br />
      <div className="mb-3">
        <label htmlFor="posttitle" className="form-label">
          Post Title
        </label>
        <input
          ref={postTitle}
          type="text"
          className="form-control"
          id="posttitle"
          placeholder="Enter post title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postbody" className="form-label">
          Post Content
        </label>
        <textarea
          rows="4"
          ref={postBody}
          type="text"
          className="form-control"
          id="postbody"
          placeholder="Enter description"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="posttags" className="form-label">
          Tags
        </label>
        <input
          ref={postTags}
          type="text"
          className="form-control"
          id="posttags"
          placeholder="Enter tags- separated by space"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          className="form-control"
          ref={postReactions}
          id="reactions"
          placeholder="Enter number of reactions"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          UserId
        </label>
        <input
          type="text"
          className="form-control"
          ref={userId}
          id="userid"
          placeholder="Enter your userId"
        />
      </div>
      <button type="submit" className="btn btn-primary postbtn">
        post
      </button>
    </form>
  );
};

export default CreatePost;
