import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Posts from './Posts';
import Profile from './Profile';
import PostForm from './PostForm';
import SinglePost from './SinglePost';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
        <Container>
          <Switch>
            <ProtectedRoute exact path='/' component={Home} />
            <ProtectedRoute exact path='/profile' component={Profile} />
            <ProtectedRoute exact path='/posts' component={Posts} />
            <ProtectedRoute exact path='/posts/postform' component={PostForm} />
            <ProtectedRoute exact path='/posts/:id/' component={SinglePost} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
     
          </Switch>
          </Container>
        </FetchUser>
      </div>
    );
  }
}

export default App;
