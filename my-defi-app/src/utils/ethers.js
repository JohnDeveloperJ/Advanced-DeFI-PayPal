import { ethers } from 'ethers';

// Connect to the network
let provider = ethers.getDefaultProvider('rinkeby'); // Use 'homestead' for mainnet

// Contract information
const contractAddress = '0xfd27d432e28d719cdc2ce5eaed0556669150eec4';
const contractABI = require('../abi/AdvancedDeFiPayPal.json');

export const advancedDeFiPayPalContract = new ethers.Contract(contractAddress, contractABI
