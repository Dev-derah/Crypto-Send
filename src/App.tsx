import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Welcome from "./pages/onboarding/Welcome";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import SendPage from "./pages/Dashboard/SendPage";
import TransferHistory from "./pages/Dashboard/TransferHistory";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="signup" element={<Welcome />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="send" element={<SendPage />} />
          <Route path="transfer-history" element={<TransferHistory />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
