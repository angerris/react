import ComingSoon from "../common/comingSoon";
// import Pagination from "./Pagination";
// import User from "./User";

export default function Users({
  users,
  followThunk,
  followingInProgress,
  unfollowThunk,
  // ...props
}) {
  return (
    <div>
      {/* <Pagination {...props} />
      {users.map((u) => (
        <User
          user={u}
          followingInProgress={followingInProgress}
          unfollowThunk={unfollowThunk}
          followThunk={followThunk}
          key={u.id}
        />
      ))} */}
      <ComingSoon />
    </div>
  );
}
