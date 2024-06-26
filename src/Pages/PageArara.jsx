import "./pages.css";

import arara from "../assets/arara.jpg";
import { Link } from "react-router-dom";

const PageArara = () => {
  return (
    <div>
      <img src={arara} />
      <h3>Arara</h3>
      <nav>
        <Link to="/Page1">Arara</Link>
      </nav>
    </div>
  );
};

export default PageArara;
