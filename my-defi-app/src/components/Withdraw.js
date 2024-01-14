import React, { useState } from 'react';
import { ethers } from 'ethers';
import { getContract } from '../ethereum'; // Adjust the import path based on your project structure
import contractABI from '../contractABI.json'; // Adjust the import path based on your project structure
import contractAddress from '../contractAddress'; // Adjust the import path based on your project structure

const Withdraw = () => {
    const [amount, setAmount] = useState('');
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');

    const handleWithdraw = async () => {
        try {
            // Reset status and error
            setStatus('');
            setError('');

            if (!amount) throw new Error("Amount is required");

            const contract = getContract(contractABI, contractAddress);
            const parsedAmount = ethers.utils.parseEther(amount);
            const transaction = await contract.withdraw(parsedAmount);
            await transaction.wait();
            setStatus('Withdrawal successful');
            setAmount(''); // Reset the amount after successful withdrawal
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h3>Withdraw Funds</h3>
            <input 
                type="text" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                placeholder="Amount in ETH" 
            />
            <button onClick={handleWithdraw}>Withdraw</button>
            {status && <p>{status}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Withdraw;
