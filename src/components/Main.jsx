import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import VinylGallery from './VinylGallery'; // VinylGallery has problems showing up. Why?
import Avatar from './Avatar';
import SignIn from './SignIn';
import Banner from './Banner';

const Main = () => (
  <main>
    <Switch>
      <Route path='/archive' component={Avatar} />
      <Route path='/albums' component={SignIn} />
      <Route path='/' component={Banner} />
    </Switch>
  </main>
);

export default Main;
