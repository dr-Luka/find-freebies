import "./styles/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Message from "./components/pages/Message";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/message" element={<Message />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
