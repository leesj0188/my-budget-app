import React, { useState } from 'react';
import '../styles/ExpenseForm.css';

const ExpenseForm = ({ onAddTransaction }) => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTransaction({ type: 'expense', amount: parseFloat(amount), category, date });
        setAmount('');
        setCategory('');
        setDate('');
    };

    return (
        <form onSubmit={handleSubmit} className="transaction-form">
            <h3>지출 입력</h3>
            <input
                type="number"
                placeholder="금액"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="카테고리"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <button className="expensebutton" type="submit">지출 추가</button>
        </form>
    );
};

export default ExpenseForm;
