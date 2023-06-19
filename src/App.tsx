import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { NewRegister } from "./pages/NewRegister";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/new-register" element={<NewRegister />} />
      </Routes>
    </>
  );
}