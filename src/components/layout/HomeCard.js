import { Link } from "react-router-dom";

export default function HomePostCard({ id, name, description, image }) {
  return (
    <div className="card">
      <div className="card-info">
        <h5>{name}</h5>
        <p className="card-p">{description}</p>
      </div>
      <Link to={`Details/${id}`}>
        <button className="BtnConfirm">Book</button>
      </Link>
    </div>
  );
}
