import React from 'react';
import ConnectWallet from './components/ConnectWallet';
import Registration from './components/Registration';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import Balance from './components/Balance';
import './App.css'; // Assuming you have some CSS for styling

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Advanced DeFi PayPal</h1>
                <ConnectWallet />
            </header>
            <main>
                <Registration />
                <Deposit />
                <Withdraw />
                <Balance />
            </main>
        </div>
    );
}

export default App;
