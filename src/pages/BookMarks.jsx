import { useAtom } from "jotai";
import { bookmarksAtom } from "@/atoms/bookmarkAtoms";
import BlogCard from "@/components/BlogCard";
function BookMarks() {
  const [bookmarks] = useAtom(bookmarksAtom);
  return (
    <div>
      <h1>Book Marks</h1>
      {bookmarks.length === 0 ? (
        <p>No BookMarks yet!</p>
      ) : (
        <BlogCard posts={bookmarks} />
      )}
    </div>
  );
}

export default BookMarks;
