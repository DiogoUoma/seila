import { Link } from "react-router-dom";

import otacu from "../assets/otacu.jpg";
import "./pages.css";

const PageNo = () => {
  return (
    <div className="text">
      <h2>Você não deveria estar aqui!! Sua unica opção é ir pro pau.</h2>
      <img src={otacu} />
      <nav>
        <Link to="/Page1">IR PRO PAU!!!!</Link>
      </nav>
    </div>
  );
};

export default PageNo;
