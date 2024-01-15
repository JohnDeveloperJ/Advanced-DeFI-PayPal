import React from 'react';
import './App.css';
import RegisterUser from './components/RegisterUser';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import Transfer from './components/Transfer';
import Balance from './components/Balance';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Advanced DeFi PayPal</h1>
      </header>
      <main>
        <RegisterUser />
        <Deposit />
        <Withdraw />
        <Transfer />
        <Balance />
      </main>
    </div>
  );
}

export default App;
