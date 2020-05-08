import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
import Professional from './Landing/ProPage/Professional';
import Type0 from './Sorry/Type0';
import Type1 from './Sorry/Type1';
import Type2 from './Sorry/Type2';
import Type3 from './Sorry/Type3';
import CompanyIntro from './CompanyIntro/CompanyIntro';
import ContactUs from './ContactUs/ContactUs';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>캣스냅 | 인생스냅은 캣스냅에서!</title>
          {/* <link rel="canonical" href="https://www.interviewon.com" /> */}
          <meta
            name="description"
            content="대기업, 외국계기업, 공기업 출신의 선배들에게 이력서, 자소서 첨삭 및 취업속성과외를 받으세요!"
          />
        </Helmet>
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
            <Route exact path="/pro/:id" component={Professional} />

            {/* Sorry Pages based on the prices */}
            <Route exact path="/sorry/type0" component={Type0} />
            <Route exact path="/sorry/type1" component={Type1} />
            <Route exact path="/sorry/type2" component={Type2} />
            <Route exact path="/sorry/type3" component={Type3} />
            <Route exact path="/aboutus" component={CompanyIntro} />
            <Route exact path="/contactus" component={ContactUs} />
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
