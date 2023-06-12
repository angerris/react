import StoreContext from "../../StoreContext";
export default function Friends() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let friends = store
          .getState()
          .messagesPage.dialogsData.map((f) => <div>{f.name}</div>);
        return (
          <div>
            <div>friends</div>
            <div>{friends}</div>
          </div>
        );
      }}
    </StoreContext.Consumer>
  );
}
