import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Routes로 변경
import Home from './components/Home';
import BudgetApp from './components/BudgetApp';
import SignUpPage from './signUp/SignUpPage';
import LoginPage from './login/LoginPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/budget-app" element={<BudgetApp />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    );
};

export default App;

