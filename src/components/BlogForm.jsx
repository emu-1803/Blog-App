import { useState } from "react";

function BlogForm({ onSubmit }) {
  const [blog, setBlog] = useState({ title: "", content: "" });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(blog);
      }}
    >
      <h1 className="font-extrabold text-start text-5xl text-emerald-950 p-3 mb-2">
        Write a New Post
      </h1>
      <p className="mb-3 text-start p-2">
        Clear your mind and let your words take center stage. No distractions,
        Just your ideas!
      </p>
      <div className="border-2 p-6 rounded-2xl border-b-emerald-950">
        <h1 className="mb-2 font-bold ml-2">Title</h1>
        <div className="flex justify-center">
          <input
            className="w-full border-2 rounded-lg p-4 mb-6 border-b-emerald-700"
            type="text"
            placeholder="Give your thoughts a name..."
            value={blog.title}
            onChange={(e) =>
              setBlog({
                ...blog,
                title: e.target.value,
              })
            }
          />
        </div>
        <h1 className="font-bold ml-2 mb-3">Content</h1>
        <div>
          <textarea
            className="w-full h-72 border-2 rounded-lg p-4 border-b-emerald-700"
            type="text"
            placeholder="Start writing here. Use the space to find your flow..."
            value={blog.content}
            onChange={(e) =>
              setBlog({
                ...blog,
                content: e.target.value,
              })
            }
          />
        </div>
        <button
          type="submit"
          className="bg-emerald-800 text-white w-20 p-2 m-2 rounded-xl hover:bg-emerald-900"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default BlogForm;
