import React, { FC, useState } from 'react';
import DropDown from './DropDown';
import { ReactComponent as DashboardLogo } from '../../assets/img/house.svg';
import { ReactComponent as SettingsLogo } from '../../assets/img/settings.svg';
import { ReactComponent as SupportLogo } from '../../assets/img/support.svg';
import './DropDown.scss';

export const DropDownMenu: FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectMenu, setSelectMenu] = useState<string>('');

  const menu = [
    { id: 1, title: 'El store official', icon: <DashboardLogo /> },
    { id: 2, title: 'Birddrib store', icon: <SettingsLogo /> },
    { id: 3, title: 'Helth store', icon: <SupportLogo /> },
  ];

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  const menuSelection = (menu: string): void => {
    setSelectMenu(menu);
  };

  return (
    <div className="dropDown">
      <button
        className={showDropDown ? 'active' : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <h2>{selectMenu ? selectMenu : 'El store off...'} </h2>
        {showDropDown && (
          <DropDown
            menus={menu}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            menuSelection={menuSelection}
          />
        )}
      </button>
    </div>
  );
};
