import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  const {user} = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home/> : <Register />}/>
        <Route path="/profile/:username" element={<Profile/>}/>
        <Route path="/login" element={user ? <Redirect to="/" /> : <Login/>}/>
        <Route path="/register" element={user ? <Redirect to="/" /> : <Register/>}/>
      </Routes> 
    </BrowserRouter>
  )
}

export default App;