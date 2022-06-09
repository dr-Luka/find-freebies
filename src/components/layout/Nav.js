import logo from "../../images/logo.png";

export default function Nav() {
  return (
    <div className="nav">
      <img
        className="nav__logo"
        src={logo}
        alt="Logo showing illustrated gift and to the right of it the name of the site "
      />
    </div>
  );
}
