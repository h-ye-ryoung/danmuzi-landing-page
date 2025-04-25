import { BrowserRouter } from "react-router-dom";
import MainRouter from "@/route/route";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
