import "./styles/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/layout/Nav";

import Home from "./components/pages/Home";
import Message from "./components/pages/Message";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/message" element={<Message />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
