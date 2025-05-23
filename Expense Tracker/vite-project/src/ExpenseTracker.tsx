import { useEffect, useState } from 'react';
import { Transaction } from './Transaction';

export default function ExpenseTracker() {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const savedTran = localStorage.getItem('transaction');
    return savedTran ? JSON.parse(savedTran) : [];
  });

  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    localStorage.setItem('transaction', JSON.stringify(transactions));
  }, [transactions]);

  function addTransaction() {
    if (!text || !amount) return;
    const newTransaction: Transaction = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
    };
    setTransactions([newTransaction, ...transactions]);
    setText('');
    setAmount('');
  }

  function deleteTransaction(id: number) {
    setTransactions(transactions.filter((item) => item.id != id));
  }

  let balance = 0;
  transactions.map((item) => (balance += item.amount));

  let income = 0;
  let expense = 0;
  transactions.map((item) => {
    if (item.amount > 0) {
      income += item.amount;
    } else {
      expense += item.amount;
    }
  });

  return (
    <div>
      <div className='expense-container'>
        <h2>💰 Expense Tracker</h2>
        <h3>Balance: ${balance}</h3>
        <div className='summary'>
          <div className='income'>Income: ${income}</div>
          <div className='expense'>Expense: ${expense}</div>
        </div>
        <div className='add-transaction'>
          <input
            type='text'
            placeholder='Enter description'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type='number'
            placeholder='Enter amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={addTransaction}>Add Transaction</button>
        </div>
        <ul className='transactions'>
          {transactions.map((item, id) => (
            <li className={item.amount > 0 ? 'income' : 'expense'} key={id}>
              {item.text} - {item.amount}
              <button onClick={() => deleteTransaction(item.id)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
