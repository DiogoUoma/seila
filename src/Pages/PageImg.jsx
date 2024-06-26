import "./pages.css";

import fotolegal from "../assets/fotolegal.jpg";
import { Link } from "react-router-dom";

const PageImg = () => {
  return (
    <div>
      <img src={fotolegal} />
      <h3>Não falei que era lindo!!!!!!!!! S2</h3>
      <nav>
        <Link to="/PageArara">Vai se ferrar Diogo!</Link>
      </nav>
    </div>
  );
};

export default PageImg;
