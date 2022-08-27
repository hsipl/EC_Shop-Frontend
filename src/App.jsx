import { Button } from "antd";
import { useRoutes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";

function App() {
  const content = useRoutes(routes);

  return (
    <div>
      <Button type="primary">antd button</Button>
      {content}
    </div>
  );
}

export default App;
