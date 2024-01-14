import React, { useState } from 'react';
import { getContract } from './ethereum';
import contractABI from './contractABI.json';
import contractAddress from './contractAddress';

const Registration = () => {
    const [status, setStatus] = useState('');

    const register = async () => {
        try {
            const contract = getContract(contractABI, contractAddress);
            const transaction = await contract.register();
            await transaction.wait();
            setStatus('Registration successful');
        } catch (error) {
            setStatus('Registration failed');
            console.error(error);
        }
    };

    return (
        <div>
            <button onClick={register}>Register</button>
            <p>Status: {status}</p>
        </div>
    );
};

export default Registration;
