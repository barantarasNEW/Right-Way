import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import './Header.scss';

import { getSearchWith } from '../../helpers/getSearchWith';

import AdditionalBar from "../AdditionalBar/AdditionalBar";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Search from '../Search/Search';

type Props = {
  isSearch: boolean;
  setSearch: (value: boolean) => void;
  setToggleSearch: () => void;
};

const Header: React.FC<Props> = ({ isSearch, setSearch, setToggleSearch }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation().pathname;

  useEffect(() => {
    if (isSearch) {
      setSearch(false);
    }
  }, [location]);

  const onChange = () => {
    setSearchParams(
      getSearchWith(searchParams, { query: null })
    );

    setToggleSearch();
  };

  return (
    <header
      className="header"
      onClick={e => e.stopPropagation()}
    >
      <div className="container">
        <div className="header__wrapper">
          <div className="header__top">
            <Logo />

            <Navbar />

            <AdditionalBar
              isSearch={isSearch}
              onChange={onChange}
            />
          </div>

          <div className="header__bottom">
            {isSearch && (
              <Search />
            )} 
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;