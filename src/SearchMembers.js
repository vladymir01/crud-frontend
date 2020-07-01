import React from 'react';

const SearchMembers = (props) => {
  return (
    <div className="">
      <input
        
        type='search'
        placeholder='search robots'
        onChange={props.onSearch}
      />
    </div>
  );
}

export default SearchMembers;