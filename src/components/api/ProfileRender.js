import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import { token } from "./apiSettings";
import PostsCard from "../layout/PostsCard";

export default function ProfileRender() {
  const [AuthorDetails, setAuthorDetails] = useState([]);
  const [AuthorPosts, setAuthorPosts] = useState([]);

  const { id } = useParams();
  const url = "https://trashnothing.com/api/v1.2/users/" + id + "/display";
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    Axios.get(url, config).then(function (response) {
      setAuthorDetails(response.data.user);
      setAuthorPosts(response.data.posts);
    });
  }, []);

  return (
    <>
      <div className="profile">
        <div className="profile__image">
          <img src={AuthorDetails.profile_image} alt="Profile Image" />
        </div>
        <div className="profile__username">{AuthorDetails.username}</div>
        <div className="profile__country">{AuthorDetails.country}</div>
        <div className="profile__messageButton">
          <Link to={`/message`}>
            <button className="button button--view">Contact</button>
          </Link>
        </div>
      </div>
      <h2>User Posts</h2>
      <div className="profilePosts">
        {AuthorPosts.length ? (
          AuthorPosts.map(function (Post) {
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
    </>
  );
}
