import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [balance, setBalance] = useState<number>(0);

  const handleDeposit = (amount: number) => {
    setBalance(balance + amount);
  };

  const handleCustomDeposit = () => {
    const amount = parseFloat(prompt("Enter deposit amount:") || "0");
    if (amount > 0) {
      setBalance(balance + amount);
    } else {
      alert("Invalid amount!");
    }
  };

  const handleWithdraw = () => {
    const amount = parseFloat(prompt("Enter withdrawal amount:") || "0");
    if (amount <= balance) {
      setBalance(balance - amount);
    } else {
      alert("Insufficient funds!");
    }
  };

  return (
    <div className="app-container">
      <h1>ATM</h1>
      <p className="balance">Balance: ${balance.toFixed(2)}</p>
      <div className="buttons">
        <button className="deposit" onClick={() => handleDeposit(10)}>Deposit $10</button>
        <button className="deposit" onClick={() => handleDeposit(20)}>Deposit $20</button>
        <button className="deposit" onClick={() => handleDeposit(50)}>Deposit $50</button>
        <button className="deposit" onClick={() => handleDeposit(100)}>Deposit $100</button>
        <button className="deposit" onClick={() => handleDeposit(200)}>Deposit $200</button>
        <button className="deposit" onClick={() => handleDeposit(500)}>Deposit $500</button>
        <button className="deposit" onClick={() => handleDeposit(1000)}>Deposit $1000</button>
        <button className="deposit" onClick={handleCustomDeposit}>Custom Deposit</button>
        <button className="withdraw" onClick={handleWithdraw}>Withdraw</button>
      </div>
    </div>
  );
};

export default App;