import { NavLink } from "react-router-dom";
import pfp from "./../../assets/profpic.avif";

export default function User({
  user,
  followingInProgress,
  unfollowThunk,
  followThunk,
}) {
  return (
    <div>
      <div>
        <NavLink to={"./../profile/" + user.id}>
          {user.photos.small !== null ? (
            <img src={user.photos.small} alt="" width={100} />
          ) : (
            <img src={pfp} alt="" width={100} />
          )}
        </NavLink>
      </div>
      <div>
        {user.followed ? (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollowThunk(user.id);
            }}
          >
            unfollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              followThunk(user.id);
            }}
          >
            follow
          </button>
        )}
      </div>
      <div>{user.name}</div>
      <div>{user.status}</div>
      <div>country</div>
      <div>city</div>
    </div>
  );
}
