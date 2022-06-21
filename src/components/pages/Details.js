import DetailsRender from "../api/DetailsRender";
import GoBack from "../layout/BackButton";
export default function Details() {
  return (
    <div className="page">
      <GoBack />
      <DetailsRender />
    </div>
  );
}
