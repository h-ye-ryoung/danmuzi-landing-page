import LandingPage from "@/page/landing/page";
import { Route, Routes } from "react-router-dom";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}
