import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './user/pages/Users';
import NewMovie from './movies/pages/NewMovie';
import UserMovies from './movies/pages/UserMovies';
import UpdateMovie from './movies/pages/UpdateMovie';
import Auth from './user/pages/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/movies" exact>
          <UserMovies />
        </Route>
        <Route path="/movies/new" exact>
          <NewMovie />
        </Route>
        <Route path="/movies/:movieId">
          <UpdateMovie />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/movies" exact>
          <UserMovies />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider 
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    > 
    {/* Все потребители, которые являются потомками Provider, будут повторно рендериться, как только проп value изменится */}
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
