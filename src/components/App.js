import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './Common/NavBar';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import DetailPage from '../pages/DetailPage';
import ProfilePage from '../pages/ProfilePage';
import SubscribePage from '../pages/SubscribePage';
import SubscribeOptionPage from '../pages/SubscribeOptionPage';
import './App.scss';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/subscribe-option" component={SubscribeOptionPage} />
        <Route path="/subscribe" component={SubscribePage} />
        <>
          <NavBar />

          <Route path="/" exact={true} component={HomePage} />
          <Route path="/detail" component={DetailPage} />
          <Route path="/profile" component={ProfilePage} />
        </>
      </Switch>
    </>
  );
};

export default App;
