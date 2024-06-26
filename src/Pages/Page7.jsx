import "./pages.css";

import { Link } from "react-router-dom";

const Page6 = () => {
  return (
    <div className="text">
      <h2>É algo lindo!!!!!</h2>
      <nav>
        <Link to="/PageImg">Mostra logo!!!! Diogo seu trouxa.</Link>
      </nav>
    </div>
  );
};

export default Page6;
