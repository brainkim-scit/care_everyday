import {Routes, Route} from "react-router-dom";
import {Dash} from "./components/dash/dash";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Dash/>}/>
      </Routes>
  );
}

export default App;
