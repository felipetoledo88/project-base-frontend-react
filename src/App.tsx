import { Routes, Route } from "react-router-dom";
import { NewRegister } from "./pages/NewRegister";
import { Home } from "./pages/Home";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/new-register" element={<NewRegister />} />
      </Routes>
    </>
  );
}