import { useEffect, useState } from "react";
import Axios from "axios";
import PostsCard from "../layout/PostsCard";
import { token } from "./apiSettings";

export default function LatestPostsRender({ filter }) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await Axios.get(
        "https://trashnothing.com/api/v1.2/posts?per_page=6&types=offer&sources=groups,trashnothing,open_archive_groups&latitude=40.73061&longitude=-73.935242&radius=25000",
        config
      );
      setPosts(response.data.posts);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div className="featuredPosts">
      {posts.length ? (
        posts.map(function (Post) {
          const { content, photos, post_id, title, user_id } = Post;
          return (
            <PostsCard
              key={post_id}
              post_id={post_id}
              title={title}
              description={content}
              photos={photos && photos[0].thumbnail}
              user={user_id}
            />
          );
        })
      ) : (
        <p>No Posts to Show</p>
      )}
    </div>
  );
}
