import {
  ChangeEvent,
  useDeferredValue,
  useEffect,
  useRef,
  useMemo,
} from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import './Search.scss';

import { getSearchWith } from '../../helpers/getSearchWith';
import { useAppSelector } from '../../hooks/useRedux';

const Search = () => {
  const { names } = useAppSelector(state => state.names);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const deferredQuery = useDeferredValue(query);
  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation().pathname;
  const validLocation = location === '/' ? '/home' : location;

  const visibleCountries = useMemo(() =>  {
    const reg = new RegExp(`${deferredQuery}.+$`, 'i');

    return names.filter(name => {
      return name.search(reg) !== -1;
    });
  }, [deferredQuery, names]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams(
      getSearchWith(searchParams, { query: e.target.value || null })
    );
  };

  const onClickCancel = () => {
    setSearchParams(
      getSearchWith(searchParams, { query: null })
    );

    inputRef.current?.focus();
  };

  return (
    <div className="search">
      <input
        ref={inputRef}
        type="text"
        className="search__input"
        value={deferredQuery}
        onChange={onChange}
      />

      <button className="search__btn" onClick={onClickCancel}>
        <img
          className="search__icon"
          src="./img/svg/cancel.svg"
          alt="icon"
        />
      </button>

      <ul className="search__list">
        {visibleCountries.map(name => (
          <li key={name} className="search__item">
            <Link to={`${validLocation}/${name}`} className="search__link">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;