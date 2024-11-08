import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";

const Post = () => {
  const { userId } = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  console.log(userId);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((res) => res.json())
      .then((posts) => {
        setPost(posts[0]);
        setIsLoading(false);
      });
  }, [userId]);

  return (
    <div className="user-post">
      {isLoading && <p>Loading...</p>}
      {!isLoading && <Link to="/">Back</Link>}
      <h2>{post.title || <Skeleton />}</h2>
      <p>{post.body || <Skeleton count={3} />}</p>
    </div>
  );
};

export default Post;
