import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

import LatestPostsRender from "../api/LatestPostsRender";

export default function Home() {
  const [filter, setFilter] = useState("");
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
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          ></input>
          <div className="searchButton">
            <FontAwesomeIcon
              className="searchButton__icon"
              icon={faMagnifyingGlass}
            />
            <span className="searchButton__text">Search</span>
          </div>
        </div>
        <h2>Latest Posts in New York</h2>
        <LatestPostsRender filter={filter} />
      </main>
    </div>
  );
}
