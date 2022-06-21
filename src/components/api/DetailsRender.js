import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import { token } from "./apiSettings";

export default function DetailsRender() {
  const [PostDetails, setPostDetails] = useState([]);
  const [AuthorDetails, setAuthorDetails] = useState([]);

  const { id } = useParams();
  const url = "https://trashnothing.com/api/v1.2/posts/" + id + "/display";
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    Axios.get(url, config).then(function (response) {
      setPostDetails(response.data.post);
      setAuthorDetails(response.data.author);
    });
  }, []);

  return (
    <div className="details">
      <div className="details__image"></div>
      <div className="details__title">{PostDetails.title}</div>
      <div className="details__description">{PostDetails.content}</div>
      <div className="author">
        <div className="flex">
          <div className="author__image">
            <img src={AuthorDetails.profile_image} alt="Profile Image" />
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
