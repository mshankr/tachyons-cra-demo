import React, { useState } from 'react';
import {
  IoMdMore,
  IoIosAnalytics,
  IoIosArchive,
  IoIosAlbums,
  IoIosBug
} from 'react-icons/io';
import { NavLink } from 'react-router-dom';

export default function AppDrawer () {

  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const styleNavLink = `black no-underline pointer grow`
  const styleAppDrawerIcon = `f3 app-drawer ${!open && 'closed'}`;

  return (
    <div>
      <nav className="vh-100 bg-washed-green mr5">
        <div className="flex flex-column">
          <IoMdMore className={`h2-ns w2-ns h1 w1 ${styleAppDrawerIcon}`}
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            />
          <NavLink exact to='/' activeClassName="bg-light-yellow" className={styleNavLink}>
            <IoIosAnalytics className={styleAppDrawerIcon} aria-label="analytics"/>
          </NavLink>
          <NavLink to='/archive' activeClassName="bg-light-yellow" className={styleNavLink}>
            <IoIosArchive className={styleAppDrawerIcon} aria-label="archive"/>
          </NavLink>
          <NavLink to='/albums' activeClassName="bg-light-yellow" className={styleNavLink}>
            <IoIosAlbums className={styleAppDrawerIcon} aria-label="albums"/>
          </NavLink>
          <IoIosBug className={styleAppDrawerIcon} aria-label="report bugs"/>
        </div>
      </nav>
    </div>
  )
};
