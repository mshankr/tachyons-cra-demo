import React, { useState } from 'react';
import {
  IoMdMore,
  IoIosAnalytics,
  IoIosArchive,
  IoIosAlbums,
  IoIosBug
} from 'react-icons/io';
import { Link } from 'react-router-dom';
import './AppDrawer.css';

export default function AppDrawer () {

  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const styleAppDrawerIcons = `f3 pointer hover-bg-pink:hover app-drawer ${!open && 'closed'}`;

  return (
    <div>
      <nav className="vh-100 bg-washed-green mr5">
        <div className="flex flex-column">
          <IoMdMore className={`h2-ns w2-ns h1 w1 ${styleAppDrawerIcons}`}
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            />
          <Link to='/'>
            <IoIosAnalytics className={styleAppDrawerIcons} aria-label="analytics"/>
          </Link>
          <Link to='/archive'>
            <IoIosArchive className={styleAppDrawerIcons} aria-label="archive"/>
          </Link>
          <Link to='/albums'>
            <IoIosAlbums className={styleAppDrawerIcons} aria-label="albums"/>
          </Link>
          <IoIosBug className={styleAppDrawerIcons} aria-label="report bugs"/>
        </div>
      </nav>
    </div>
  )
};
