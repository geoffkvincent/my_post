import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Posts from './components/Posts';
import Post from './components/Post';
import NavBar from './components/NavBar';
import NoMatch from './components/NoMatch';

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/posts/:id" component={Post} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
)


export default App;