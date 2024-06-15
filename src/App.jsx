import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<HomePage />} path="/home" />
          <Route element={<SignInPage />} path="/sign-in" />
          <Route element={<SignUpPage />} path="/sign-up" />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
