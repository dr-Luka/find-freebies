import GoBack from "../layout/BackButton";
import { Link } from "react-router-dom";
export default function MessageSent() {
  return (
    <>
      <GoBack />
      <h1>Message Sent</h1>
      <p className="messageSent__p">
        Click button below to go back to homepage
      </p>
      <div className="profile__messageButton">
        <Link to={`/`}>
          <button className="button button--view">Home</button>
        </Link>
      </div>
    </>
  );
}
