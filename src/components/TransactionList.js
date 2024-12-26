import React from 'react';
import '../styles/TransactionList.css';

const TransactionList = ({ transactions }) => {
    const totalAmount = transactions.reduce((total, transaction) => {
        return transaction.type === 'income'
            ? total + transaction.amount
            : total - transaction.amount;
    }, 0);

    return (
        <div>
            <h3>총합: {totalAmount.toLocaleString()}원</h3>
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                        <strong>{transaction.date}</strong> [ {transaction.category} ]
                        {transaction.type === 'income' ? '+' : '-'}
                        {transaction.amount.toLocaleString()}원
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;

