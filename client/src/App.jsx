import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import Remaining from "./pages/Remaining";
import NotAnswer from "./pages/NotAnswer";
import Group from "./pages/Group";
import Dailer from "./pages/Dailer";
import Contacts from "./pages/Contacts";
import Agents from "./pages/Agents";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/group" element={<Group />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/dailer" element={<Dailer />} />
        <Route path="/notanswer" element={<NotAnswer />} />
        <Route path="/remaining" element={<Remaining />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
