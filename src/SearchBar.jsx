import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input);
    }
  };

  return (
    <div class="search-bar">
      
      <input  class="inp"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name" 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
