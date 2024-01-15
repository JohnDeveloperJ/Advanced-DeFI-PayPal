import React from 'react';
import './App.css';
import RegisterUser from './components/RegisterUser';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import Transfer from './components/Transfer';
import Balance from './components/Balance';
import ConnectWallet from './components/ConnectWallet';  // Import ConnectWallet

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Advanced DeFi PayPal</h1>
      </header>
      <main>
        <ConnectWallet />  {/* Use ConnectWallet */}
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
