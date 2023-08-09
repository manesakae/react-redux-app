import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import About from "./app/pages/About";
import Home from "./app/pages/Home";
import Navbar from "./app/components/Navbar";
import HomePure from "./app/pages/HomePure";
import Posts from "./app/pages/Posts";
import Books from "./app/pages/Books";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/homepure" element={<HomePure />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/books" element={<Books />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
