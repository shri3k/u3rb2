import React from 'react';

import {Link} from 'react-router';

let Header = (props) => {
  return (
    <div id="menu">
        <h1> My Menu!! </h1>
        <ul>
          <li><Link to="/">Todo</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        {props.children}
      </div>
  );
};

export default Header;
