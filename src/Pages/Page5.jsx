import "./pages.css";
import { Link } from "react-router-dom";

const Page5 = () => {
  return (
    <div className="text">
      <h2>Mas assim, é muito legal mesmo, você quer ver?</h2>
      <nav>
        <Link to="/PageNo">Não</Link>
        <Link to="/Page6">Sim</Link>
      </nav>
    </div>
  );
};

export default Page5;
