import { createRoot } from "react-dom/client";
import ReactApp from "./App";

test("renders without crashing", () => {
  const container = document.createElement("div");
  const root = createRoot(container);
  root.render(<ReactApp tab="home" />);
  root.unmount();
});
