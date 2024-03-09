import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/nopage/NoPage";

import Login from "./pages/registration/Signup";
import Signup from "./pages/registration/Login";
import MyState from "./context/MyState";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
    <MyState>
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
        
      </Router>
      <ToastContainer />
    </MyState>
     
    </div>
  );
}

export default App;