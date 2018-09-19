import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from '../reducers/posts';
import { Container, Grid, Header, Card, Image } from 'semantic-ui-react';

class Posts extends React.Component {
  componentDidMount() {
    this.props.dispatch(getPosts())
  }

  posts = () => {
    return this.props.posts.map( post =>
      <Card key={post.id}>
        
        <Card.Content>
          <Card.Header>
            {post.name}
          </Card.Header>
          <Card.Description>
            {post.category}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/posts/${post.id}`}>
            View Post
          </Link>
        </Card.Content>
      </Card>
    )
  }

  render() {
    return (
      <Container>
        <Header as="h3" textAlign="center">Posts</Header>
          <Card.Group itemsPerRow={4}>
           { this.posts() }
          </Card.Group>
        </Container>
      )
    }
  }

  const mapStateToProps = (state) => {
    return { posts: state.posts }
  }

export default connect(mapStateToProps)(Posts);