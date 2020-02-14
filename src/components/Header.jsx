import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default () => {
  let location = useLocation();
  const [url, setUrl] = useState(location.pathname);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <header className="bg-washed-green ">
          <h1 className="dib v-mid sans-serif">{url}</h1>
        </header>
  );
}
