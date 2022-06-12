import "./styles/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import Message from "./components/pages/Message";
import Profile from "./components/pages/Profile";
import PostDetails from "./components/pages/PostDetails";
import SearchResults from "./components/pages/SearchResults";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/message" element={<Message />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/details/:id" element={<PostDetails />} />
          <Route path="/results" element={<SearchResults />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;