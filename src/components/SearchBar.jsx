import React, { useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  // Trigger the search when the search icon is clicked
  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <div className='w-[20rem] px-4 rounded border-white border-[1px] h-8  flex'>
      <input
        type="text"
        className='bg-[transparent]  text-white w-[17rem]'
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchOutlined
        className='text-white mt-2 cursor-pointer'
        onClick={handleSearchClick} // Trigger the search on click
      />
    </div>
  );
}

export default SearchBar;