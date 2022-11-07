import React, { useEffect, useState } from 'react';

type DropDownProps = {
  menus: { id: number; title: string; icon: JSX.Element }[];
  showDropDown: boolean;
  toggleDropDown: Function;
  menuSelection: Function;
};

const DropDown: React.FC<DropDownProps> = ({
  menus,
  menuSelection,
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const onClickHandler = (menu: string): void => {
    menuSelection(menu);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
        {menus.map((menu) => {
          return (
            <p
              key={menu.id}
              onClick={(): void => {
                onClickHandler(menu.title);
              }}
            >
              {menu.icon}
              {menu.title}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default DropDown;
