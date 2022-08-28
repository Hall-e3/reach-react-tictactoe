import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Deployer, Game, Home, Players } from "./pages";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Deployer />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/play" element={<Players />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
