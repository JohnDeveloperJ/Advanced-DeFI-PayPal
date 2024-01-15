import React, { useState } from 'react';
import { ethers } from 'ethers';
import { advancedDeFiPayPalContract, getSigner } from '../utils/ethers';

const Deposit = () => {
    const [amount, setAmount] = useState('');
    const [status, setStatus] = useState('');

    const handleDeposit = async () => {
        if (!amount) {
            setStatus('Please enter an amount to deposit.');
            return;
        }

        try {
            setStatus('Initiating deposit...');
            const signer = await getSigner();
            const contractWithSigner = advancedDeFiPayPalContract.connect(signer);

            const tx = await contractWithSigner.deposit({ value: ethers.utils.parseEther(amount) });
            setStatus('Transaction sent. Waiting for confirmation...');

            await tx.wait();
            setStatus(`Deposit of ${amount} ETH successful!`);
            setAmount('');  // Reset amount after successful deposit
        } catch (error) {
            console.error('Error during deposit:', error);
            setStatus('Deposit failed: ' + error.message);
        }
    };

    return (
        <div>
            <h2>Deposit ETH</h2>
            <input 
                type="text" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount in ETH"
            />
            <button onClick={handleDeposit}>Deposit</button>
            {status && <p>{status}</p>}
        </div>
    );
};

export default Deposit;
