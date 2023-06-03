import { useNavigate } from "react-router-dom";
import './BreadCrumbs.scss';

const BreadCrumbs = () => {
  const navigate = useNavigate();
  
  return (
    <button
      className="bread-crumbs__btn"
      onClick={() => navigate(-1)}
    >
      <img
        className="bread-crumbs__icon"
        src="./img/svg/back.svg"
        alt="icon"
      />

      Back
    </button>
  );
};

export default BreadCrumbs;