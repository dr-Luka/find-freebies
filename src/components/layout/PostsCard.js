import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import defaultImage from "../../images/defaultImage.png";
export default function PostsCard({ post_id, title, photos }) {
  return (
    <div className="card">
      <div className="card__image">
        {photos ? (
          <img src={photos} alt="How item looks like" />
        ) : (
          <img src={defaultImage} alt="Default" />
        )}
      </div>

      <div className="card__info">{title}</div>
      <div className="card__button">
        <Link to={`/details/${post_id}`}>
          <button className="button button--view">View</button>
        </Link>
      </div>
    </div>
  );
}

PostsCard.propTypes = {
  post_id: PropTypes.number,
  title: PropTypes.string,
  photos: PropTypes.string,
};
