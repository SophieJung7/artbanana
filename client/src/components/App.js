import React, { Component } from 'react';
import '../css/bootstrap/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div>
                CatSnap
                <a href="/auth/google">Sign In with Google</a>
            </div>
        );
    }
}

export default App;
