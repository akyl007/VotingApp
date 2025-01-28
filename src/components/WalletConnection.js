import React, { useState } from 'react';
import { ethers } from 'ethers';

export const WalletConnection = () => {
    const [currentAccount, setCurrentAccount] = useState(null);

    const connectWallet = async () => {
        try {
            const { ethereum } = window;

            if (!ethereum) {
                alert("Install MetaMask!");
                return;
            }

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setCurrentAccount(accounts[0]);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="wallet-connection">
            {!currentAccount ? (
                <button className="btn" onClick={connectWallet}>
                    Connect Wallet
                </button>
            ) : (
                <p>Connected: {currentAccount}</p>
            )}
        </div>
    );
};
