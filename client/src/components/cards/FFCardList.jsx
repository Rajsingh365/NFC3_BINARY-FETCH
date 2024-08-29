import React from 'react'
import FFCards from './FFCards';

function FFCardList() {
  return (
      <ul className=" flex flex-wrap items-center gap-3">
        {Array.from({ length: 30 }, (_, index) => (
          <FFCards key={index} />
        ))}
      </ul>
  );
}

export default FFCardList
