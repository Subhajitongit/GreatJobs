import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllJobs from "./pages/AllJobs";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<AllJobs />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
