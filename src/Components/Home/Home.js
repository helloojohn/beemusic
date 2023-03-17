import React from 'react';
import "../Home/Home.css"

import { LeftMenu } from "../Sections/Menu/LeftMenu";

function Home() {
  return (
      <div className='home'>
          <LeftMenu />
    </div>
  )
}

export { Home };