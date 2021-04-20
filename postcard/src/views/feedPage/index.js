import React from "react";
import "./index.css";
import Post from "../../base/post";
import data from "../../data";
import { sortByDateFunction, sortByUpVotesFuntion } from "../../utils/";
const FeedPage = () => {
  const [posts, setPosts] = React.useState([]);

  // Set State on mount point.
  React.useEffect(() => {
    setPosts(data);
  }, []);

  // Sort by Date
  const sortByDate = () => {
    let arr = [...posts];
    let sortedPosts = arr.sort(sortByDateFunction);
    setPosts(sortedPosts);
  };

  // Sort by upvotes
  const sortByUpVotes = () => {
    let arr = [...posts];
    let sortedPosts = arr.sort(sortByUpVotesFuntion);
    setPosts(sortedPosts);
  };

  // Format Date to local readable format
  const formatDate = (date) => new Date(date).toLocaleString("en-US");
  return (
    <div className="feeds-container">
      <div>
        <button onClick={() => sortByDate()}>Recent</button>
        <button onClick={() => sortByUpVotes()}>Upvotes</button>
      </div>

      {posts.map((post) => (
        <Post
          heading={post.title}
          publishedOn={formatDate(post.published_on)}
          upVotes={post.upVotes}
          body={post.body}
          key={post.published_on}
        />
      ))}
    </div>
  );
};

export default FeedPage;
