import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { advancedDeFiPayPalContract } from '../utils/ethers';

const Balance = () => {
    const [balance, setBalance] = useState('');

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                // Assuming you are using MetaMask or similar which injects window.ethereum
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                const contractBalance = await advancedDeFiPayPalContract.balanceOf(address);

                setBalance(ethers.utils.formatEther(contractBalance));
            } catch (error) {
                console.error('Error fetching balance:', error);
            }
        };

        fetchBalance();
    }, []);

    return (
        <div>
            <h2>Your Balance</h2>
            <p>{balance ? `${balance} ETH` : 'Loading...'}</p>
        </div>
    );
};

