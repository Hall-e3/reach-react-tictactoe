import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Deployer, Game, Home, Players } from "./pages";
function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route exact path="/deploy" element={<Deployer />} />
        {/* <Route  path="/play" element={<Players />} /> */}
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
