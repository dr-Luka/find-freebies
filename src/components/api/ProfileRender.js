import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import { baseURL, token } from "./apiSettings";
import PostsCard from "../layout/PostsCard";

export default function ProfileRender() {
  const [AuthorDetails, setAuthorDetails] = useState([]);
  const [AuthorPosts, setAuthorPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const url = baseURL + "users/" + id + "/display";
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const response = Axios.get(url, config);
        if (response) {
          const json = await response;
          const data = json.data;
          setAuthorDetails(data.user);
          setAuthorPosts(data.posts);
        }
      } catch (error) {
        setError(error.toString());
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

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

  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return (
    <>
      <div className="profile">
        <div className="profile__image">
          <img src={AuthorDetails.profile_image} alt="How does user look" />
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
