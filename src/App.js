import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import StakingPage from "./pages/StakingPage";
import ClubsPage from "./pages/ClubsPage";
import MatchesPage from "./pages/MatchesPage";
import MarketplacePage from "./pages/MarketplacePage";
import MorePage from "./pages/MorePage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route index element={<Navigate replace to="/home" />} />
        <Route exact path="/home" element={<HomePage />}></Route>
        <Route exact path="/staking" element={<StakingPage />}></Route>
        <Route exact path="/clubs" element={<ClubsPage />}></Route>
        <Route exact path="/matches" element={<MatchesPage />}></Route>
        <Route exact path="/marketplace" element={<MarketplacePage />}></Route>
        <Route exact path="/more" element={<MorePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
