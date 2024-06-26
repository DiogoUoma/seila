import "./pages.css";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <div className="text">
      <h2>Gostaria de ver algo legal?</h2>
      <nav>
        <Link to="/PageNo">Não</Link>
        <Link to="/Page3">Sim</Link>
      </nav>
    </div>
  );
};

export default Page2;
