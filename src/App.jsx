import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page6 from "./Pages/Page6";
import Page7 from "./Pages/Page7";
import PageNo from "./Pages/PageNo";
import PageArara from "./Pages/PageArara";
import PageImg from "./Pages/PageImg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
          <Route path="/Page4" element={<Page4 />} />
          <Route path="/Page5" element={<Page5 />} />
          <Route path="/Page6" element={<Page6 />} />
          <Route path="/Page7" element={<Page7 />} />
          <Route path="/PageImg" element={<PageImg />} />
          <Route path="/PageNo" element={<PageNo />} />
          <Route path="/PageArara" element={<PageArara />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
