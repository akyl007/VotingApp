import React, { useState } from 'react';
import { ethers } from 'ethers';
import abi from '../VotingContractABI.json';

const CONTRACT_ADDRESS = "<YOUR_CONTRACT_ADDRESS_HERE>";

export const AddCandidate = () => {
    const [newCandidate, setNewCandidate] = useState('');

    const addCandidate = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

                const addTxn = await contract.addCandidate(newCandidate);
                await addTxn.wait();
                setNewCandidate('');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="add-candidate">
            <h2>Add Candidate</h2>
            <input
                type="text"
                value={newCandidate}
                onChange={(e) => setNewCandidate(e.target.value)}
                placeholder="Candidate name"
            />
            <button className="btn" onClick={addCandidate}>
                Add
            </button>
        </div>
    );
};
