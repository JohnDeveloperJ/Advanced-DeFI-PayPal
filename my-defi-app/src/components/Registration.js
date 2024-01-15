import React, { useState } from 'react';
import { ethers } from 'ethers';
import { advancedDeFiPayPalContract, getSigner } from '../utils/ethers';

const RegisterUser = () => {
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        try {
            setLoading(true);
            setStatus('Initiating transaction... please wait');

            const signer = await getSigner();
            const contractWithSigner = advancedDeFiPayPalContract.connect(signer);

            const tx = await contractWithSigner.register();
            setStatus('Transaction sent. Waiting for confirmation...');

            await tx.wait();
            setStatus('Registration successful!');
        } catch (error) {
            console.error('Error during registration:', error);
            setStatus('Registration failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Register User</h2>
            <button onClick={handleRegister} disabled={loading}>
                {loading ? 'Registering...' : 'Register'}
            </button>
            {status && <p>{status}</p>}
        </div>
    );
};

export default RegisterUser;
