import { Link } from "react-router-dom";

import "./pages.css";

const Page1 = () => {
  return (
    <div className="text">
      <h2>Você se chama Joyce Nascimento Oliveira?</h2>
      <nav>
        <Link to="/PageNo">Não</Link>
        <Link to="/Page2">Sim</Link>
      </nav>
    </div>
  );
};

export default Page1;
