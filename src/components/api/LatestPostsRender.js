import { useEffect, useState } from "react";
import Axios from "axios";
import HomePostCard from "../layout/HomePostCard";
import { token } from "./apiSettings";

export default function LatestPostsRender({ filter }) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await Axios.get(
        "https://trashnothing.com/api/v1.2/posts?per_page=6&types=offer&sources=groups,trashnothing,open_archive_groups&latitude=37.773972&longitude= -122.431297&radius=25000",
        config
      );
      setPosts(response.data.posts);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const applyFilter = async () => {
      setLoading(true);
      const data = await posts.filter((data) =>
        data.title.toLowerCase().startsWith(filter.toLowerCase())
      );
      setDisplayData(data);
      setLoading(false);
    };
    applyFilter();
  }, [filter, posts]);

  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <div className="featuredPosts">
      {displayData.length ? (
        displayData.map(function (Post) {
          const { content, photos, post_id, title, user_id } = Post;
          return (
            <HomePostCard
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
        <div>No filter</div>
      )}
    </div>
  );
}
