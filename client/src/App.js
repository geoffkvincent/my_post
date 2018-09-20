import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import FetchPosts from './components/FetchPosts';
import NavBar from './components/NavBar';
import NoMatch from './components/NoMatch';

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/posts" component={FetchPosts} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
)


export default App;