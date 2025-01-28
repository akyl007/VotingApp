import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import abi from '../VotingContractABI.json';

const CONTRACT_ADDRESS = "<YOUR_CONTRACT_ADDRESS_HERE>";

export const Candidates = () => {
    const [candidates, setCandidates] = useState([]);

    const fetchCandidates = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

                const candidateList = await contract.getCandidates();
                setCandidates(candidateList);
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchCandidates();
    }, []);

    return (
        <div className="candidates">
            <h2>Candidates</h2>
            {candidates.length > 0 ? (
                candidates.map((candidate, index) => (
                    <div key={index} className="candidate">
                        <p>{candidate.name} - Votes: {candidate.voteCount}</p>
                    </div>
                ))
            ) : (
                <p>No candidates yet.</p>
            )}
        </div>
    );
};
