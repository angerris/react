import x from "./Users.module.css";
import { NavLink } from "react-router-dom";
import pfp from "./../../assets/profpic.avif";

export default function Users(props) {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    if (pages.length < 10) {
      pages.push(i);
    }
  }
  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && x.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => {
        return (
          <div key={u.id}>
            <div>
              <NavLink to={"./../profile/" + u.id}>
                {u.photos.small !== null ? (
                  <img src={u.photos.small} alt="" width={100} />
                ) : (
                  <img src={pfp} alt="" width={100} />
                )}
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollowThunk(u.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.followThunk(u.id);
                  }}
                >
                  follow
                </button>
              )}
            </div>

            <div>{u.name}</div>
            <div>{u.status}</div>
            <div>country</div>
            <div>city</div>
          </div>
        );
      })}
    </div>
  );
}
