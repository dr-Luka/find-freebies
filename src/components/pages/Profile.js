import ProfileRender from "../api/ProfileRender";
import GoBack from "../layout/BackButton";
export default function Profile() {
  return (
    <div className="page">
      <GoBack />
      <ProfileRender />
    </div>
  );
}
