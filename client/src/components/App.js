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
import ShowProducts from './Products/ShowProducts';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>아트바나나 | 사진을 작품으로 만드세요!</title>
          {/* <link rel="canonical" href="https://www.interviewon.com" /> */}
          <meta
            name='description'
            content='대기업, 외국계기업, 공기업 출신의 선배들에게 이력서, 자소서 첨삭 및 취업속성과외를 받으세요!'
          />
        </Helmet>
        <Router history={history}>
          <Header />
          <div>
            <Route exact path='/' component={Landing} />
            {/* Authentication */}
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
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
            <Route exact path='/products' component={ShowProducts} />
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
