import React, { useState } from 'react';
import { advancedDeFiPayPalContract, getSigner } from '../utils/ethers';

const RegisterUser = () => {
    const [status, setStatus] = useState('');

    const handleRegister = async () => {
        try {
            const signer = await getSigner();
            const contractWithSigner = advancedDeFiPayPalContract.connect(signer);

            const tx = await contractWithSigner.register();
            setStatus('Transaction sent. Waiting for confirmation...');

            await tx.wait();
            setStatus('Registration successful!');
        } catch (error) {
            setStatus('Registration failed: ' + error.message);
        }
    };

    return (
        <div>
            <h2>Register User</h2>
            <button onClick={handleRegister}>Register</button>
            {status && <p>{status}</p>}
        </div>
    );
};

export default RegisterUser;
