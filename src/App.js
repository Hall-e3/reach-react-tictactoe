import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Deployer, Game, Home } from "./pages";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Deployer />} />
        <Route exact path="/play" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
