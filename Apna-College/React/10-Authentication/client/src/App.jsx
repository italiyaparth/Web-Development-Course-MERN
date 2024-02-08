import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import Home from "../components/Home";
import ForgotPassword from "../components/ForgotPassword";
import ResetPassword from "../components/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Home />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
