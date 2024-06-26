import "./pages.css";
import { Link } from "react-router-dom";

const Page3 = () => {
  return (
    <div className="text">
      <h2>Mas a partir daqui é por sua conta e risco, ok?</h2>
      <nav>
        <Link to="/PageNo">Não</Link>
        <Link to="/Page4">Ok</Link>
      </nav>
    </div>
  );
};

export default Page3;
