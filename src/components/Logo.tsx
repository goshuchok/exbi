import React, { FC } from 'react';
import logo from '../assets/img/logo.png';
import Arrow from '../assets/img/arrow_left.png';

export const Logo: FC = () => {
  return (
    <div className={'header_logo'}>
      <img src={logo} alt="logo" />
      <img className={'arrow'} src={Arrow} alt="arrow" />
    </div>
  );
};
