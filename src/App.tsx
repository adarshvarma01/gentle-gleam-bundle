import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Disorders from "./pages/Disorders";
import RiskAnalysis from "./pages/RiskAnalysis";
import CareGapAnalysis from "./pages/CareGapAnalysis";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/disorders" element={<Disorders />} />
        <Route path="/risk-analysis" element={<RiskAnalysis />} />
        <Route path="/care-gap-analysis" element={<CareGapAnalysis />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
