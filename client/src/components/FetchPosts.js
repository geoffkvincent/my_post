import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Posts from './Posts';
import Post from './Post';
import { getPosts } from '../reducers/posts';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class FetchApps extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    this.props.dispatch(getPosts(this.setLoaded))
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <div>
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/posts/:id" component={Post} />
        </div>
      )
    } else {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default connect()(FetchApps);