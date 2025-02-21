import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" elements={<Body />}>
            <Route path="/login" elements={<Login />} />
            <Route path="/profile" elements={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
