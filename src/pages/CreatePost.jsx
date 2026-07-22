import BlogForm from "../components/BlogForm";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();

  function handleSubmit(blog) {
    const localPosts = JSON.parse(localStorage.getItem("posts")) || [];

    const newPost = {
      id: Date.now(),
      title: blog.title,
      body: blog.content,
      tags: [],
    };

    localPosts.push(newPost);

    localStorage.setItem("posts", JSON.stringify(localPosts));

    navigate("/");
  }

  return (
    <>
      <BlogForm onSubmit={handleSubmit} />
    </>
  );
}

export default CreatePost;
