import { ethers } from 'ethers';

let provider;
if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
}

export const getContract = (abi, contractAddress) => {
    if (!provider) return;
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, abi, signer);
};
