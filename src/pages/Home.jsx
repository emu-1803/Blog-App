import { useState, useEffect } from "react";
import BlogCard from "@/components/BlogCard";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=10")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        const localPosts = JSON.parse(localStorage.getItem("posts")) || [];

        setPosts([...localPosts, ...data.posts]);
        // ← the list is inside data.posts
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading Card...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <Link to="/create" className="ml-auto flex justify-end ">
        <button className="flex bg-green-600 py-3 px-3 rounded-xl m-2 font-medium underline hover:bg-emerald-400">
          <Plus size={25} />
          Create Post
        </button>
      </Link>
      <div className="bg-green-700 text-white text-center py-5 rounded-xl">
        <h2 className="text-3xl font-bold">WELCOME, What's New Today🧐</h2>
      </div>
      <BlogCard posts={posts} />
    </>
  );
}

export default Home;
