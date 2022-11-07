import { useEffect, useRef, useState, FC } from 'react';
import './Sidebar.scss';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as OrderLogo } from '../../assets/img/order.svg';
import { ReactComponent as BalanceLogo } from '../../assets/img/balanc.svg';
import { ReactComponent as DrawLogo } from '../../assets/img/draw.svg';
import { ReactComponent as DashboardLogo } from '../../assets/img/house.svg';
import { ReactComponent as SettingsLogo } from '../../assets/img/settings.svg';
import { ReactComponent as SupportLogo } from '../../assets/img/support.svg';
import { DropDownMenu } from '../dropDown';
import { Logo } from '../Logo';

const sidebarNavItems = [
  {
    display: 'Dashboard',
    icon: <DashboardLogo fill="white" stroke="black" />,
    to: '/',
    section: '',
  },
  {
    display: 'Orders',
    icon: <OrderLogo fill="white" stroke="black" />,
    to: '/order',
    section: 'order',
  },
  {
    display: 'Balances',
    icon: <BalanceLogo fill="white" stroke="black" />,
    to: '/balances',
    section: 'balances',
  },
  {
    display: 'Withdrawal',
    icon: <DrawLogo fill="white" stroke="black" />,
    to: '/withdrawal',
    section: 'withdrawal',
  },
  {
    display: 'Company settings',
    icon: <SettingsLogo fill="white" stroke="black" />,
    to: '/settings',
    section: 'settings',
  },
  {
    display: 'Support',
    icon: <SupportLogo fill="white" stroke="black" />,
    to: '/support',
    section: 'support',
  },
];

export const Sidebar: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const indicatorRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(
        '.sidebar__menu__item'
      );
      if (sidebarItem != null) {
        indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
        setStepHeight(sidebarItem.clientHeight);
      }
    }, 50);
  }, []);

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split('/')[1];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Logo />
      </div>
      <DropDownMenu />
      <div ref={sidebarRef} className="sidebar__menu">
        <div
          ref={indicatorRef}
          className="sidebar__menu__indicator"
          style={{
            transform: `translateX(-50%) translateY(${
              activeIndex * stepHeight
            }px)`,
          }}
        ></div>
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index}>
            <div
              className={`sidebar__menu__item ${
                activeIndex === index ? 'active' : ''
              }`}
            >
              <div className="sidebar__menu__item__icon">{item.icon}</div>
              <div className="sidebar__menu__item__text">{item.display}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
