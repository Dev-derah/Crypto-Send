import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/onboarding/Login";
import  Welcome from "./pages/onboarding/Welcome";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import SendPage from "./pages/Dashboard/SendPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path = "signup" element={<Welcome/>} />
          
        </Route>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/send" element={<SendPage />} />
      </Routes>
    </Router>
  );
}

export default App;
