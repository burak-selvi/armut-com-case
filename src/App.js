import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MovieList} />
      <Route path="/detail/:id" component={MovieDetail} />
    </Switch>
  );
}

export default App;