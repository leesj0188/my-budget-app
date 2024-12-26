import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Title.css';

const Title = () => (
    <header>
        <div className="title-links">
            <Link to="/" className="home-link">Home</Link>
            <h1 className="title">거지나기</h1>
            <Link to="/login" className="logout-link">Logout</Link>
        </div>
    </header>
);

export default Title;
