import React, { useState } from 'react';
import { ethers } from 'ethers';

const ConnectWallet = () => {
    const [userAccount, setUserAccount] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const connectWalletHandler = async () => {
        if (window.ethereum) {
            try {
                // Request account access
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts',
                });
                setUserAccount(accounts[0]);
            } catch (error) {
                setErrorMessage('Failed to connect wallet');
                console.error(error);
            }
        } else {
            setErrorMessage('Please install MetaMask');
        }
    };

    return (
        <div>
            <button onClick={connectWalletHandler}>
                {userAccount ? 'Wallet Connected' : 'Connect Wallet'}
            </button>
            {userAccount && <p>Connected Account: {userAccount}</p>}
            {errorMessage && <p style={{ color: 'red'
}}>{errorMessage}</p>}
</div>
);
};

export default ConnectWallet;