import React from 'react';
import { connect } from 'react-redux';
import { Divider, Header, Image, Container, Table, Button } from 'semantic-ui-react';
import PostForm from './PostForm'


class Post extends React.Component {
  state = { showForm: false }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }
  render() {
    const { showForm } = this.state;
    const { post = {} } = this.props;
    return (
      <Container>
         <Button onClick={this.toggleForm}>
           { showForm ? 'Cancel' : 'Edit' }
         </Button>
           { showForm ?
         <PostForm {...post} closeForm={this.toggleForm} />
            :
        <div>
         <Header as="h3" textAlign="center">{post.name}</Header>
    
         <Table definition>
         <Table.Header>
        
        </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Description</Table.Cell>
          <Table.Cell>{post.body}</Table.Cell>
        </Table.Row>
        
        <Table.Row>
          <Table.Cell>Category</Table.Cell>
          <Table.Cell>{post.category}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </div>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { post: state.posts.find( p => p.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(Post);