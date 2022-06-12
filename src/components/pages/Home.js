import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import LatestPostsRender from "../api/LatestPostsRender";

export default function Home() {
  return (
    <div className="page">
      <header className="fade">
        <h1 className="header__heading">Welcome</h1>
        <p className="header__text">
          Find items that are given away and help minimize trash on our planet!
        </p>
      </header>
      <main>
        <div className="search fade">
          <input
            className="search__input"
            type="text"
            placeholder=" Try BBQ, Yoga Mat, Painting ..."
          ></input>
          <FontAwesomeIcon className="search__icon" icon={faMagnifyingGlass} />
        </div>
        <h2>Latest Posts in San Francisco</h2>
        <LatestPostsRender />
      </main>
    </div>
  );
}
