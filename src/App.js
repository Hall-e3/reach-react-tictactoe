import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Deployer, Game, Home } from "./pages";
import { store } from "./store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/deploy" element={<Deployer />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
