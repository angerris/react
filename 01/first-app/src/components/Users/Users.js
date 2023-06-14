import axios from "axios";
export default function Users(props) {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((res) => {
        props.setUsers(res.data.items);
      });
  }
  return (
    <div>
      {props.users.map((u) => {
        return (
          <div key={u.id}>
            <div>
              <img
                src={
                  u.photos.small !== null
                    ? u.photos.small
                    : "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg"
                }
                alt=""
                width={100}
              />
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
