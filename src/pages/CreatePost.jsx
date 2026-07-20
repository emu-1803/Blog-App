import BlogForm from "../components/BlogForm";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();
  const HandleClick = (event) => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <>
      <BlogForm onSubmit={HandleClick} />
    </>
  );
}

export default CreatePost;
