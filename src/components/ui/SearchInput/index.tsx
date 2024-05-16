import React from 'react';
import { IInputPropType } from '../../../lib/types';
import search from '../../../assets/search.svg'


import './index.scss';

const SearchInput: React.FC<IInputPropType> = ({ placeholder, suffix, eventType, ...rest }) => {
  return (
    <div className="search-input-wrapper">
      <input
        className="custom-input"
        placeholder={placeholder}
        type="text"

        {...rest}
      />
      <span>
        <img src={search} alt="" />
      </span>
    </div>
  );
};

export default SearchInput;
