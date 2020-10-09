import React, { useState } from 'react';

const Search = (props) => {
  const [queryText, setQueryText] = useState('');

  const handleSearch = (e) => {
    setQueryText(e.target.value);
    props.getQuery(queryText);
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
          onChange={handleSearch}
        />
      </form>
    </section>
  );
};

export default Search;
