export default function Users(props) {
  return (
    <div>
      {props.users.map((u) => {
        return (
          <div key={u.id}>
            <div>
              <img src={u.photoURL} alt="" width={100} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  follow
                </button>
              )}
            </div>

            <div>{u.fullName}</div>
            <div>{u.status}</div>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </div>
        );
      })}
    </div>
  );
}
