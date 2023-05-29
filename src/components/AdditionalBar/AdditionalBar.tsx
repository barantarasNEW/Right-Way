import { Link, useLocation } from "react-router-dom";
import './AdditionalBar.scss';
import { availableLinksForSearch } from "./constants";

type Props = {
  isSearch: boolean;
  onChangeSearch: () => void;
};

const AdditionalBar: React.FC<Props> = ({ onChangeSearch, isSearch }) => {
  const location = useLocation().pathname;
  const isSearchAvailable = availableLinksForSearch.includes(location);

  return (
    <nav className="additional-bar">
      <ul className="additional-bar__list">
        <li
          className="additional-bar__item"
          style={isSearchAvailable ? {} : { visibility: 'hidden' }}
        >
          <button
            className="additional-bar__link"
            onClick={onChangeSearch}
          >
            {isSearch
              ? <img className="additional-bar__icon" src="./img/svg/cancel.svg" alt="icon" />
              : <img className="additional-bar__icon" src="./img/svg/search.svg" alt="icon" />}
          </button>
        </li>

        <li className="additional-bar__item">
          <Link to="/user" className="additional-bar__link">
            <img className="additional-bar__icon" src="./img/svg/user.svg" alt="icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdditionalBar;