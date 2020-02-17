import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from './SignInForm';
import SignInWithOthers from './SignInWithOthers';

const SignIn = () => {
    return (
        <div>
            <SignInForm />
            <SignInWithOthers />
            <div>
                <h2>아직 캣스냅 회원이 아니신가요?</h2>
                <Link to="/signup" className="btn btn-primary">회원가입</Link>
            </div>
        </div>
    );
};

export default SignIn;
