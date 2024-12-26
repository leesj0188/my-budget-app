import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import '../styles/SignUpPage.css';

const SignUpPage = () => {

    const handleSignUp = (userData) => {
        console.log('회원가입 데이터:', userData);
    };

    return (
        <div className="sign-up-page">
            <header className="sign-up-header">
                <Link to="/" className="home-link">Home</Link>
                <h1>SignUp</h1>
                <Link to="/login" className="login-link">Are you already a member?</Link>
            </header>
            <SignUpForm onSignUp={handleSignUp} />
        </div>
    );
};

export default SignUpPage;

