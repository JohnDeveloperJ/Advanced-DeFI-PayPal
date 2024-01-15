import React, { useState } from 'react';
import { ethers } from 'ethers';
import { advancedDeFiPayPalContract, getSigner } from '../utils/ethers';

const Transfer = () => {
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [status, setStatus] = useState('');

    const handleTransfer = async () => {
        if (!recipient || !amount) {
            setStatus('Please enter a recipient and an amount.');
            return;
        }

        try {
            setStatus('Initiating transfer...');
            const signer = await getSigner();
            const contractWithSigner = advancedDeFiPayPalContract.connect(signer);

            const tx = await contractWithSigner.transfer(recipient, ethers.utils.parseEther(amount));
            setStatus('Transaction sent. Waiting for confirmation...');

            await tx.wait();
            setStatus(`Transfer of ${amount} ETH to ${recipient} successful!`);
            setRecipient('');
            setAmount('');  // Reset fields after successful transfer
        } catch (error) {
            console.error('Error during transfer:', error);
            setStatus('Transfer failed: ' + error.message);
        }
    };

    return (
        <div>
            <h2>Transfer ETH</h2>
            <input 
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="Recipient Address"
            />
            <input 
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount in ETH"
            />
            <button onClick={handleTransfer}>Transfer</button>
            {status && <p>{status}</p>}
        </div>
    );
};

export default Transfer;
