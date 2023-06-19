import {
  Routes,
  Route,
} from "react-router-dom";
import DemoCompany from "./pages/DemoCompany";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DemoCompany />} />
    </Routes>
  );
}
export default App;
