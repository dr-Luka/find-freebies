import { Link } from "react-router-dom";

export default function HomePostCard({ post_id, title, description, photos }) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={photos} alt="Image for this specific post" />
      </div>
      <div className="card__info">
        <h3>{title}</h3>
      </div>
      <div className="card__button">
        <Link to={`details/${post_id}`}>
          <button className="button button--view">View</button>
        </Link>
      </div>
    </div>
  );
}
