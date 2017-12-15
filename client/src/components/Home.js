import React, { Component } from 'react';
import { Header, Card, Icon, Button, Image, Segment, Grid} from 'semantic-ui-react';
import axios from 'axios';
import { setHeaders } from '../actions/headers';
import { connect } from 'react-redux';


class Home extends Component {
  state = { friends: [], added: false }
  
  componentDidMount() {
    axios.get('/api/friends')
      .then( res => {
        this.props.dispatch(setHeaders(res.headers))
        this.setState({ friends: res.data })
      })
  }

  addFriend = (id) => {
    const { friends } = this.state;
    debugger
    // axios.put(`/api/friend/${id}`)
    //   .then( res => {
    //     this.props.dispatch(setHeaders(res.headers));
    //     this.setState({ friends: friends.filter( c => c.id !== id ) }) 
      // })
  }

  toggleFriend = () => {
    // this.setState({ added: !this.state.added });
    //   if(this.state.added)
    //   return( 
    //       <Button basic onClick={this.toggleFriend}> Delete Friend </Button>
    //   );
    // else
    //   return( 
    //     <Button basic onClick={this.toggleFriend}> Add Friend </Button>
    // );
    // }
  }


  render() {
    return (
    <Segment basic> 
      <Header as='h1' textAlign='center'>Welcome to FakeSpace </Header>
      <Grid relaxed columns={4}>
      { this.state.friends.map( friend =>
        <Grid.Column> 
      <Card 
        key={friend.id} 
       > 
      <Header size='medium' textAlign='center'>{friend.name}</Header>
          <Image src={friend.avatar} />
          <i>{friend.bio}</i>
          <p>Age: {friend.age}</p>
          <Button onClick={ () => this.addFriend(friend.id)}> Add Friend </Button> 
      </Card> 
      </Grid.Column>
         )
         }
      </Grid>
      </Segment> 
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user.id }
}

export default connect(mapStateToProps)(Home);
