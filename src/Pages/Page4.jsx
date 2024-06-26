import "./pages.css";
import { Link } from "react-router-dom";

const Page4 = () => {
  return (
    <div className="text">
      <h2>Tem certeza que quer ver mesmo?</h2>
      <nav>
        <Link to="/PageNo">Não</Link>
        <Link to="/Page5">Sim</Link>
      </nav>
    </div>
  );
};

export default Page4;
