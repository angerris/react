export default function Friends(props) {
  let friends = props.friendsData.map((f) => <div>{f.name}</div>);
  return (
    <div>
      <div>friends</div>
      <div>{friends}</div>
    </div>
  );
}
