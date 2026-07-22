import { Bookmark, BookmarkCheck } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { bookmarkAtoms } from "../atoms/bookmarkAtoms";

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bookmarks, setBookmarks] = useAtom(bookmarkAtoms);
  const [comments, setComments] = useState([]);

  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const localPosts = JSON.parse(localStorage.getItem("posts")) || [];

    const localPost = localPosts.find((post) => post.id === Number(id));

    if (localPost) {
      setPost(localPost);
      setLoading(false);
      return;
    } else {
      fetch(`https://dummyjson.com/posts/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch");
          return res.json();
        })
        .then((data) => {
          setPost(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }

    fetch(`https://dummyjson.com/posts/${id}/comments`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setComments(data.comments);
      });
  }, [id]);

  function handleBookmark() {
    if (!post) return;

    const alreadyBookmarked = bookmarks.some((e) => e.id === post.id);

    let updatedBookmarks;

    if (alreadyBookmarked) {
      updatedBookmarks = bookmarks.filter((e) => e.id !== post.id);
    } else {
      updatedBookmarks = [...bookmarks, post];
    }

    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  }
  const isBookmarked = bookmarks.some((e) => e.id === post.id);
  const toggleBookmark = () => {
    if (isBookmarked) {
      setBookmarks(bookmarks.filter((item) => item.id !== post.id));
    } else {
      setBookmarks([...bookmarks, post]);
    }
  };

  function BookmarkButton({ bookmarked, onClick }) {
    return (
      <button onClick={toggleBookmark}>
        <Bookmark
          size={24}
          color="black"
          fill={bookmarked ? "black" : "none"}
        />
      </button>
    );
  }

  function back() {
    navigate("/");
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-8">
      <p className="text-green-700 mb-6">
        Tags: {post.tags?.join(", ") || "No tags"}
      </p>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <p className="text-gray-700 mb-6">{post.body}</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Comments</h2>

      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.id} className="border rounded-lg p-4 mb-3">
            <h3 className="font-semibold">{comment.user.username}</h3>

            <p>{comment.body}</p>
          </div>
        ))
      )}

      <div className="flex gap-4">
        <button
          onClick={back}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Back
        </button>

        <BookmarkButton bookmarked={isBookmarked} onClick={handleBookmark} />
      </div>
    </div>
  );
}

export default BlogDetails;
