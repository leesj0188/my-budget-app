import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import '../styles/LoginPage.css';

const LoginPage = () => {
    const handleLogin = (userData) => {
        console.log('로그인 데이터:', userData);
    };

    return (
        <div className="login-page">
            <header className="login-header">
                <Link to="/" className="home-link">Home</Link>
                <h1>Login</h1>
                <Link to="/sign-up" className="signup-link">SignUp</Link>
            </header>
            <LoginForm onLogin={handleLogin} />
        </div>
    );
};

export default LoginPage;
