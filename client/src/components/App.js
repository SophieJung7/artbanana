import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import Header from './Header';
import Landing from './Landing';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import MyPage from './MyPage/MyPage';

class App extends Component {
    render() {
        return (
            <div>
                <Router history={ history }>
                    <Header />
                    <div>
                        <Route exact path="/" component={ Landing } />
                        <Route exact path="/signin" component={ SignIn } />
                        <Route exact path="/signup" component={ SignUp } />
                        <Route exact path="/mypage" component={ MyPage } />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
