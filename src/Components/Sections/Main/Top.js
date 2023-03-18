import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

function Top() {
  return (
    <div className="top">
          <div className="arrow">
              <i>
                  <MdArrowBack/>
              </i>
              <i>
                  <MdArrowForward/>
              </i>
          </div>
          
      <div className="search">
        <input type="text" placeholder="Search for artists, songs and..." />
        <i>
          <BiSearch />
        </i>
      </div>
    </div>
  );
}

export { Top };