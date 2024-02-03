import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Iframe from "./pages/iframe";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/iframe" element={<Iframe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
