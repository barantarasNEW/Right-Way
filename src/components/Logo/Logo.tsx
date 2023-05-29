import { Link } from "react-router-dom";
import './Logo.scss';

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src="./img/svg/logo.svg" alt="logo" />
      RAVEL
    </Link>
  );
};

export default Logo;