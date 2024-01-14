import React, { useState } from 'react';
import { getContract } from './ethereum';
import contractABI from './contractABI.json';
import contractAddress from './contractAddress';

const Deposit = () => {
    const [amount, setAmount] = useState('');
    const [status, setStatus] = useState('');

    const handleDeposit = async () => {
        try {
            const contract = getContract(contractABI, contractAddress);
            const transaction = await contract.deposit({ value: ethers.utils.parseEther(amount) });
            await transaction.wait();
            setStatus('Deposit successful');
        } catch (error) {
            setStatus('Deposit failed');
            console.error(error);
        }
    };

    return (
        <div>
            <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button onClick={handleDeposit}>Deposit</button>
            <p>Status: {status}</p>
        </div>
    );
};

export default Deposit;
