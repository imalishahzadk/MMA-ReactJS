import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/User/Dashboard";
import PrivateRoute from "./components/Route/Private";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import MoviesList from "./pages/User/MovieList";
import MovieDetails from "./pages/User/MovieDetails";
import Favorites from "./pages/User/Favorites";

function App() {
  return (
    <>
      <Routes>
        {/* if nested, we need to use opening and closing tag here */}
        <Route path="/" element={<HomePage />} />

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/movies" element={<MoviesList />} />
          <Route path="user/movies/:movieId" element={<MovieDetails />} />
          <Route path="user/favorites" element={<Favorites />} />

        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
