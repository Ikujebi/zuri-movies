// src/components/SearchBar.js
import React, { useState } from 'react';
import { Input } from 'antd';
import {SearchOutlined} from "@ant-design/icons"


const {Search} = Input

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Trigger the search function with the query
    onSearch(query);
  };

  return (
    <div className=' w-[20rem] px-4 rounded border-white border-[1px] h-8 outline-white flex'>
      <input
        type="text"
        className=' bg-[transparent] text-white w-[17rem]'
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchOutlined className=' text-white mt-2' />
    </div>
  );
}

export default SearchBar;
