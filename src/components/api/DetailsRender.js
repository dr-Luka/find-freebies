import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import { token, baseURL } from "./apiSettings";

export default function DetailsRender() {
  const [PostDetails, setPostDetails] = useState([]);
  const [AuthorDetails, setAuthorDetails] = useState([]);
  const [PostImages, setPostImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const url = baseURL + "posts/" + id + "/display";

        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const response = Axios.get(url, config);
        if (response) {
          const json = await response;
          const data = json.data;
          setPostDetails(data.post);
          setAuthorDetails(data.author);
          setPostImages(data.post.photos && data.post.photos[0]);
        }
      } catch (error) {
        setError("An error occured");
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
    <div className="details">
      <div className="details__image">
        <img src={PostImages && PostImages.url} alt="Item look" />
      </div>
      <div className="details__title">{PostDetails.title}</div>
      <div className="details__description">{PostDetails.content}</div>
      <div className="author">
        <div className="flex">
          <div className="author__image">
            <img src={AuthorDetails.profile_image} alt="User Look" />
          </div>
          <div className="author__info">
            <div>{AuthorDetails.username}</div>
            <div>from {AuthorDetails.country}</div>
          </div>
        </div>
        <div>
          <Link to={`/profile/${AuthorDetails.user_id}`}>
            <button className="button button--view">View User</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
