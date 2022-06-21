import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";

export default function GoBack() {
  const navigate = useNavigate();

  return (
    <>
      <FontAwesomeIcon className="icon" icon={faCircleLeft} />
      <button className="backButton" onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
}
