import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Header, Card, Dropdown, Divider, Button } from 'semantic-ui-react';
import PostForm from './PostForm'

class Posts extends React.Component {

  state = { category: '', showForm: false }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }

  categoryOptions = () => {
    const { categories } = this.props
    return categories.map( (c) => { return { key: c, text: c, value: c } } )
  }

  posts = () => {
    const { posts } = this.props
    const { category } = this.state

    let visible = posts

    if (category) 
      visible = posts.filter( p => p.category === category )
    return visible.map( post =>
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
    let { category, showForm } = this.state;
    return (
      <Container>
        <Header as="h3" textAlign="center">Posts</Header>
        <Button onClick={this.toggleForm}>
          { showForm ? 'Back' : 'New Post' }
        </Button>
        { showForm ?
          <PostForm closeForm={this.toggleForm} />
          :
          <div>
        <Dropdown
          placeholder="Filter by category"
          fluid
          selection
          options={this.categoryOptions()}
          onChange={ (e, data) => this.setState({ category: data.value }) }
          value={category}
        />
       { category && <Button fluid basic onClick={ () => this.setState({ category: '' }) }>Clear Filter: {category}</Button> }
       <Divider />
          <Card.Group itemsPerRow={4}>
           { this.posts() }
          </Card.Group>
          </div>
        }
        </Container>
      )
    }
  }

  const mapStateToProps = (state) => {
    const posts = state.posts;
    const categories = [...new Set(posts.map( p => p.category ))]
    return { posts, categories}
  }
  

export default connect(mapStateToProps)(Posts);