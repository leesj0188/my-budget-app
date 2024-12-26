import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import '../styles/LoginForm.css'

const LoginForm = ({ onLogin }) => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({ email, password });
        setEmail('');
        setPassword('');

        console.log('로그인 성공!', email, password);
        alert( `로그인 성공! 환영합니다! ${email}님`);
        navigate ('/budget-app');


    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Login</h2>
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
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
