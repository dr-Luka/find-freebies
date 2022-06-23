import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";

export default function GoBack() {
  const navigate = useNavigate();

  return (
    <button className="backButton" onClick={() => navigate(-1)}>
      <FontAwesomeIcon className="backButton__icon" icon={faCircleLeft} /> Back
    </button>
  );
}
