import "./pages.css";
import { Link } from "react-router-dom";

const Page6 = () => {
  return (
    <div className="text">
      <h2>Eu particularmente amo, você quer continuar?</h2>
      <nav>
        <Link to="/PageNo">Não</Link>
        <Link to="/Page7">Sim</Link>
      </nav>
    </div>
  );
};

export default Page6;
