import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profileReducer";
let state = {
  postsData: [
    { id: 1, message: "heyy", likeCount: 2 },
    { id: 21, message: "sasadsad", likeCount: 1 },
  ],
};
it("length of posts should be incremented", () => {
  //1. test data
  let action = addPostActionCreator("hello world");
  // 2. action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.postsData.length).toBe(3);
});

it("length of posts should be decremented", () => {
  //1. test data
  let action = deletePost(1);
  // 2. action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.postsData.length).toBe(1);
});

it("length of posts should'nt be changed if id is incorrect", () => {
  //1. test data
  let action = deletePost(199);
  // 2. action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.postsData.length).toBe(2);
});
