import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import PublicRoutes from "./app/routes/PublicRoutes";
import PrivateRoutes from "./app/routes/PrivateRoutes";
import Main from "./app/pages/Main";
import Login from "./app/pages/Login";
import About from "./app/pages/About";
import Books from "./app/features/books/Books";
import Posts from "./app/features/posts/Posts";
import Home from "./app/features/home/Home";
import BookPure from "./app/features/books/BookPure";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Main />} exact>
            <Route index element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/books" element={<Books />} />
            <Route path="/bookpure" element={<BookPure />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
