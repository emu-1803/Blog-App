import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import BookMarks from "./pages/BookMarks";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <div className="w-full min-h-screen bg-green-100">
      <Navbar />
      <div className="max-w-6xl mx-auto px-5 py-6 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/bookmarks" element={<BookMarks />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
