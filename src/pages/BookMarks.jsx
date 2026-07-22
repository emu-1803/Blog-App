import { useAtom } from "jotai";
import { bookmarkAtoms } from "@/atoms/bookmarkAtoms";
import BlogCard from "@/components/BlogCard";
function BookMarks() {
  const [bookmarks] = useAtom(bookmarkAtoms);
  return (
    <div>
      <h1 className="flex justify-center items-center m-3 font-extrabold text-6xl">
        Book Marks
      </h1>
      {bookmarks.length === 0 ? (
        <p className="flex justify-center items-center text-2xl font-medium m-6">
          No BookMarks yet!
        </p>
      ) : (
        <BlogCard posts={bookmarks} />
      )}
    </div>
  );
}

export default BookMarks;
