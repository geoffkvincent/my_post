import React from 'react';
import { connect } from 'react-redux';
import { Divider, Header, Image, Container, Table } from 'semantic-ui-react';


const Post = ({ post = {} }) => (
  <Container>
    
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
  </Container>
)

const mapStateToProps = (state, props) => {
  return { post: state.posts.find( p => p.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(Post);