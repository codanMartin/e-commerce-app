import { Routes, Route } from "react-router-dom"
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import Authentification from "./routes/authentification/Authentication.jsx";

const Shop = () => {
  return (
    <h1>I am the shop page</h1>
  )
}

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentification />} />
      </Route>
    </Routes>
  );
};

export default App;
