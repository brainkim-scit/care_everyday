import {Routes, Route} from "react-router-dom";
import {Dash} from "./components/dash/dash";
import {Error} from "./components/common/error";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Dash/>}/>
          <Route path="*" element={<Error/>}/>
      </Routes>
  );
}

export default App;
