import React from 'react';
import ConnectWallet from './components/ConnectWallet'; // Update the path if different
import Registration from './components/Registration'; // Update the path if different
import Deposit from './components/Deposit'; // Update the path if different
import Withdraw from './components/Withdraw'; // Update the path if different
import Balance from './components/Balance'; // Update the path if different
import './App.css'; // Assuming you have an App.css for styling

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Advanced DeFi PayPal</h1>
                <ConnectWallet />
            </header>
            <div className="App-body">
                <Registration />
                <Deposit />
                <Withdraw />
                <Balance />
            </div>
        </div>
    );
}

export default App;
