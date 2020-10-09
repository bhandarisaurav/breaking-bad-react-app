import React, { useState } from 'react';

const Search = (props) => {
  const [queryText, setQueryText] = useState('');

  const handleSearch = (query) => {
    setQueryText(query);
    props.getSearchQuery(queryText);
  };

  return (
    <section className='search'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type='text'
          className='form-control'
          placeholder='Search Breaking Bad Characters'
          autoFocus
          value={queryText}
          onChange={(event) => handleSearch(event.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
