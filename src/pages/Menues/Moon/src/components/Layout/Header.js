import { Fragment } from 'react';
import React from 'react';
import {Link} from 'react-router-dom';


import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/moon.jpg';
import classes from './Header.module.css';
import Back from './../../../../../../images/return-logo.png';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        {/* <Link to="/resturaunt"> */}
          <img className={classes.back} src={Back} alt='Return to previous page' />
        {/* </Link> */}
        <h1>Moon Sushi Bar</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
