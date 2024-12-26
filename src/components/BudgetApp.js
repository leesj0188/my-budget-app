import React, { useState } from 'react';
import Title from './Title';
import IncomeForm from '../menu/IncomeForm';  
import ExpenseForm from '../menu/ExpenseForm';  
import TransactionList from './TransactionList';  
import '../styles/BudgetApp.css';

const BudgetApp = () => {
    const [transactions, setTransactions] = useState([]);
    const [selectedMenu, setSelectedMenu] = useState('list'); // 기본은 리스트 화면

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

    const renderContent = () => {
        switch (selectedMenu) {
            case 'income':
                return <IncomeForm onAddTransaction={addTransaction} />;
            case 'expense':
                return <ExpenseForm onAddTransaction={addTransaction} />;
            case 'list':
            default:
                return <TransactionList transactions={transactions} />;
        }
    };

    return (
        <div className="budget-app-container">
            <Title />
            <div className="menu-and-content">
                <div className="menu">
                    <button onClick={() => setSelectedMenu('income')}>수입 입력</button>
                    <button onClick={() => setSelectedMenu('expense')}>지출 입력</button>
                    <button onClick={() => setSelectedMenu('list')}>리스트</button>
                </div>
                <div className="content">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default BudgetApp;

