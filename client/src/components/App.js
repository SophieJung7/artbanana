import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import history from '../history';
import Header from './Header';
import Landing from './Landing';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import MyPage from './MyPage/MyPage';
import ChangePassword from './SignIn/ChangePassword';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <Header />
          <div>
            <Route exact path='/' component={Landing} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/mypage' component={MyPage} />
            <Route exact path='/change-password' component={ChangePassword} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
