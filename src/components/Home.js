import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/sign-up'); 
    };

    return (
        
        <div className="home-container">
            <div className="home-inner-container">
                <h1 className="home-header">'거지나기'</h1>
                <div className="home-description-wrapper">
                    <p className="home-description">스마트한 거지탈출 프로젝트</p>
                </div>
                <button className="home-button" onClick={handleStartClick}>
                    START!
                </button>
            </div>
        </div>
    );
};

export default Home;


