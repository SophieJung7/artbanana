import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import history from '../history';
import Header from './Headers/Header';
import Footer from './Footer/Footer';
import Landing from './Landing';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import MyPage from './MyPage/MyPage';
import ChangePassword from './SignIn/ChangePassword';
import ChangePasswordSuccess from './SignIn/Notification/ChangePasswordSuccess';
import ProNew from './ProRest/ProNew';
import Professional from './ProPage/Professional';
import Type0 from './Sorry/Type0';
import Type1 from './Sorry/Type1';
import Type2 from './Sorry/Type2';
import Type3 from './Sorry/Type3';
import CompanyIntro from './CompanyIntro/CompanyIntro';

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
            <Route exact path="/" component={Landing} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/mypage" component={MyPage} />
            <Route exact path="/change-password" component={ChangePassword} />
            <Route
              exact
              path="/change-password/success"
              component={ChangePasswordSuccess}
            />
            <Route exact path="/create/pro" component={ProNew} />
            <Route exact path="/pro/:id" component={Professional} />
            {/* Sorry Pages based on the prices */}
            <Route exact path="/sorry/type0" component={Type0} />
            <Route exact path="/sorry/type1" component={Type1} />
            <Route exact path="/sorry/type2" component={Type2} />
            <Route exact path="/sorry/type3" component={Type3} />
            <Route exact path="/aboutus" component={CompanyIntro} />
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
