import { ethers } from 'ethers';

// Connect to the Goerli test network
let provider = ethers.getDefaultProvider('goerli');

// Your contract's information
const contractAddress = '0xfd27d432e28d719cdc2ce5eaed0556669150eec4';
const contractABI = require('../abi/AdvancedDeFiPayPal.json');

export const advancedDeFiPayPalContract = new ethers.Contract(contractAddress, contractABI, provider);

// Function to get a signer for transactions
export const getSigner = async () => {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    let userProvider = new ethers.providers.Web3Provider(window.ethereum);
    return userProvider.getSigner();
};
