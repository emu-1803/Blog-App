import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
        <h1 className="font-bold text-3xl">Daily Thoughts</h1>
        <div className="flex gap-8 font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">
            Home
          </Link>
          <Link to="/bookmarks" className="hover:text-yellow-300 transition">
            BookMarks
          </Link>
          <Link
            to="/create"
            className="bg-yellow-400 text-black px-4 py-1 rounded-lg hover:bg-yellow-300 transition"
          >
            CreatePost
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
