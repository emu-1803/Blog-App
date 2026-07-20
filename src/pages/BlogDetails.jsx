import BookmarkButton from "../components/BookmarkButton";

function BlogDetails() {
  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom);
  function handleBookmark() {
    const alreadyBookmarked = bookmarks.find((b) => b.id === post.id);
    if (!alreadyBookmarked) {
      setBookmarks((prev) => [...prev, post]);
    }
  }
  return (
    <>
      <button onClick={handleBookmark}>Bookmark</button>
      <BookmarkButton onClick={handleBookmark} />
    </>
  );
}

export default BlogDetails;
