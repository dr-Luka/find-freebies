import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>
          <img
            className="nav__logo"
            src={logo}
            alt="Logo showing illustrated gift and to the right of it the name of the site "
          />
        </div>
      </Link>
    </div>
  );
}
