import { Link } from "react-router-dom";

function BlogCard({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {posts.map((post) => (
        <Link key={post.id} to={`/blog/${post.id}`}>
          <div className="border-2 rounded-2xl p-3 transition-all duration-300 hover:-translate-y-1">
            {post.tags?.map((tag, index) => (
              <span
                key={index}
                className="text-sm text-green-600 font-medium mr-2"
              >
                #{tag}
              </span>
            ))}
            <h2 className="text-xl font-bold mb-3 text-green-800">
              {post.title}
            </h2>
            <p className="line-clamp-3 text-gray-700 mb-4">{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogCard;
