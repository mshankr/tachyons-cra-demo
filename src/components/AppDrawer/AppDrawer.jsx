import React, { useState, Fragment } from 'react';
import {
  IoMdMore,
  IoIosAnalytics,
  IoIosArchive,
  IoIosAlbums,
  IoIosBug
} from 'react-icons/io';
import './AppDrawer.css';

export default function AppDrawer () {

  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const styleAppDrawerIcons = `f3 pointer hover-bg-pink:hover app-drawer ${!open && 'closed'}`;

  return (
    <div>
      <header className="bg-washed-green ">
        <IoMdMore className={`h2-ns w2-ns h1 w1 pointer tl v-mid app-drawer ${!open && 'closed'}`}
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          />
        <h1 className="dib v-mid sans-serif">Spotify</h1>
      </header>
      <nav className="dib vh-100 bg-washed-green">
        <div className="flex flex-column">
          <IoIosAnalytics className={styleAppDrawerIcons} aria-label="analytics"/>
          <IoIosArchive className={styleAppDrawerIcons} aria-label="archive"/>
          <IoIosAlbums className={styleAppDrawerIcons} aria-label="albums"/>
          <IoIosBug className={styleAppDrawerIcons} aria-label="report bugs"/>
        </div>
      </nav>
    </div>
  )
};
