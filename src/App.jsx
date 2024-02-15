import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Callback from "./components/Callback";
import Layout from "./components/Layout";
import CreatePost from "./components/CreatePost";
import Logout from "./components/Logout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="createpost" element={<CreatePost />} />
          <Route path="callback" element={<Callback />} />
          <Route path="logout" element={<Logout />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
