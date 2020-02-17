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

  const [open, setOpen] = useState(true);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const styleNavLink = `black no-underline pointer tr db`
  // const styleAppDrawerIcon = `f3 app-drawer ${!open && 'app-drawer--closed'}`;
  // const styleNavLabel = `f5 label dib ${!open && 'label--closed'}`;
  const styleAppDrawerIcon = `f3 pa3 dib`;
  const styleNavLabel = 'ph3 f4 dib v-top';

  return (
    <div className={`app-drawer ${!open && "app-drawer--closed"}`}>
      <nav className="vh-100 bg-washed-green mr5 tr">
        <div>
          <IoMdMore className={`h2-ns w2-ns h1 w1 tr pointer ${styleAppDrawerIcon}`}
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            />
          <NavLink exact to='/' activeClassName="bg-green" className={styleNavLink}>
            <p className={styleNavLabel}>Analytics</p>
            <IoIosAnalytics className={styleAppDrawerIcon} aria-label="analytics"/>
          </NavLink>
          <NavLink to='/archive' activeClassName="bg-green" className={styleNavLink}>
            <p className={styleNavLabel}>Archive</p>
            <IoIosArchive className={styleAppDrawerIcon} aria-label="archive"/>
          </NavLink>
          <NavLink to='/albums' activeClassName="bg-green" className={styleNavLink}>
            <p className={styleNavLabel}>Albums</p>
            <IoIosAlbums className={styleAppDrawerIcon} aria-label="albums"/>
          </NavLink>
          <NavLink to='/bugs' activeClassName="bg-green" className={styleNavLink}>
            <p className={styleNavLabel}>Report bugs</p>
          <IoIosBug className={styleAppDrawerIcon} aria-label="report bugs"/>
        </NavLink>
        <p className="invisible" />
        </div>
      </nav>
    </div>
  )
};
