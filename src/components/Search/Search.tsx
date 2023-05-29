import { useSearchParams } from 'react-router-dom';
import './Search.scss';
import { getSearchWith } from '../../helpers/getSearchWith';
import { ChangeEvent, useEffect, useRef } from 'react';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
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
        value={query}
        onChange={onChangeQuery}
      />

      <button className="search__btn" onClick={onClickCancel}>
        <img className="search__icon" src="./img/svg/cancel.svg" alt="icon" />
      </button>
    </div>
  );
};

export default Search;