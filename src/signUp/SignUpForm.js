import React, { useState } from 'react';
import '../styles/SignUpForm.css';
import { useNavigate } from 'react-router-dom';

const SignUpForm = ({ onSignUp }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSignUp({ username, email, password });
        setUsername('');
        setEmail('');
        setPassword('');

        console.log('회원가입 완료! 환영합니다!')
        alert('회원가입 성공! 로그인 해주세요.');
        navigate('/login');
    };

    return (
        <form onSubmit={handleSubmit} className="sign-up-form">
            <h2>SignUp</h2>
            <input
                type="text"
                placeholder="이름"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">SignUp</button>
        </form>
    );
};

export default SignUpForm;
