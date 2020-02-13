import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import VinylGallery from './VinylGallery'; // VinylGallery has problems showing up. Why?
import Avatar from './Avatar';
import SignIn from './SignIn';
import Banner from './Banner';

const Main = () => (
  <main>
    <Switch>
<<<<<<< HEAD
      <Route path='/archive' component={Avatar} />
      <Route path='/albums' component={SignIn} />
        <Route path='/' component={Banner} />
=======
      <Route exact path='/' component={Banner} />
      <Route path='/archive' component={Avatar} />
      <Route path='/albums' component={SignIn} />
>>>>>>> c97e287523a585e1c48c6acaf3d9c6771ca267e8
    </Switch>
  </main>
);

export default Main;
