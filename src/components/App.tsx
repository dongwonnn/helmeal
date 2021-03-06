import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import AuthPage from 'pages/AuthPage';
import DetailPage from 'pages/DetailPage';
import ProfilePage from 'pages/ProfilePage';
import SubscribePage from 'pages/SubscribePage';
import SubscribeOptionPage from 'pages/SubscribeOptionPage';
import AddressPage from 'pages/AddressPage';
import SubscribeCompletePage from 'pages/SubscribeCompletePage';
import MenuDetailPage from 'pages/MenuDetailPage';
import GlobalStyles from './GlobalStyles';
import OrderHistoryPage from 'pages/OrderHistoryPage';
import SetAddressPage from 'pages/SetAddressPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/detail" component={DetailPage} />

        <Route path="/subscribe-option" component={SubscribeOptionPage} />
        <Route path="/subscribe" component={SubscribePage} />
        <Route path="/address" component={AddressPage} />
        <Route path="/set-address" component={SetAddressPage} />
        <Route path="/subscribe-complete" component={SubscribeCompletePage} />
        <Route path="/menu-detail/:id" component={MenuDetailPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/order-history" component={OrderHistoryPage} />
        <Route path="/auth" component={AuthPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
      <GlobalStyles />
    </>
  );
};

export default App;
