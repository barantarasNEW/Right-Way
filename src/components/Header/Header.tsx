import './Header.scss';

import AdditionalBar from "../AdditionalBar/AdditionalBar";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from 'react';
import Search from '../Search/Search';
import { useLocation } from 'react-router';

const Header = () => {
  const location = useLocation().pathname;
  const [isSearch, setSearch] = useState(false);

  useEffect(() => {
    if (isSearch) {
      setSearch(false);
    }
  }, [location]);

  const onChangeSearch = () => {
    setSearch(currSearch => !currSearch);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__top">
            <div className="header__left">
              <Logo />
            </div>
  
            <div className="header__middle">
              <Navbar />
            </div>
  
            <div className="header__right">
              <AdditionalBar
                isSearch={isSearch}
                onChangeSearch={onChangeSearch}
              />
            </div>
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