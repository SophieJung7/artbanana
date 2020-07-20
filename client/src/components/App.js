import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import * as actions from '../actions';
import history from '../history';
import Header from './Headers/Header';
import Footer from './Footer/Footer';
import Landing from './Landing';

// Authentication
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import EmailVerify from './SignUp/EmailVerifyMessage';
import EmailVerified from './SignUp/EmailVerified';
import MyPage from './MyPage/MyPage';
import ChangePassword from './SignIn/ChangePassword';
import ChangePasswordSuccess from './SignIn/Notification/ChangePasswordSuccess';

// Artists
import ArtistRegister from './Artists/Register/Register';
import ArtistsList from './Artists/Show/ArtistsList';
import ArtistPage from './Artists/Show/ArtistPage';
import ArtistEdit from './Artists/Edit/ArtistEdit';

// Etc.
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
          <meta charSet='utf-8' />
          <title>아트바나나 | 아티스트 사진 드로잉</title>
          <link rel='canonical' href='https://www.artbanana.co.kr' />
          <meta
            name='description'
            content='아티스트플랫폼 아트바나나에서 추억이 담긴 사진을 시간을 초월하는 예술작품으로 바꿔보세요.'
          />
        </Helmet>
        <Router history={history}>
          <Header />
          <div>
            <Route exact path='/' component={Landing} />
            {/* Authentication */}
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/verify-email-sent' component={EmailVerify} />
            <Route exact path='/verify/email/:id' component={EmailVerified} />
            <Route exact path='/mypage' component={MyPage} />
            <Route exact path='/change-password' component={ChangePassword} />
            <Route
              exact
              path='/change-password/success'
              component={ChangePasswordSuccess}
            />
            {/* Artists */}
            <Route exact path='/artists/register' component={ArtistRegister} />
            <Route exact path='/artists' component={ArtistsList} />
            <Route exact path='/artists/show/:id' component={ArtistPage} />
            <Route exact path='/artists/edit/:id' component={ArtistEdit} />
            {/* Etc. */}
            <Route exact path='/aboutus' component={CompanyIntro} />
            <Route exact path='/contactus' component={ContactUs} />
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
