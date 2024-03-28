import React from 'react';
// import { Button } from 'semantic-ui-react';
import Logo from "./Logo";
import style from "./less/header.module.scss";

const Header = () => {
  console.log(style, 'style----->');
  return (
    <>
      <div className={style.headerContainer}>
        <Logo color="white" />
        <ol>
          <li>Gallery</li>
          <li>Prices for services</li>
          <li>About us</li>
          <li>Contact</li>
        </ol>
      </div>
    </>
      
  );
};

export default Header;
