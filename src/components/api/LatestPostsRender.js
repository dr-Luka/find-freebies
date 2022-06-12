import { useEffect, useState } from "react";
import Axios from "axios";
import HomePostCard from "../layout/HomePostCard";
import { token } from "./apiSettings";

export default function LatestPostsRender() {
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    Axios.get(
      "https://trashnothing.com/api/v1.2/posts?per_page=6&types=offer&sources=groups,trashnothing,open_archive_groups&latitude=37.773972&longitude= -122.431297&radius=25000",
      config
    ).then(function (response) {
      setDisplayData(response.data.posts);
    });
  }, []);

  return (
    <div className="featuredPosts">
      {displayData.map(function (Post) {
        const { content, photos, post_id, title, user_id } = Post;
        return (
          <HomePostCard
            key={post_id}
            post_id={post_id}
            title={title}
            description={content}
            photos={photos[0].thumbnail}
            user={user_id}
          />
        );
      })}
    </div>
  );
}
