// App.js - Main entry point
import React from 'react';
import { WalletConnection } from './components/WalletConnection';
import { Candidates } from './components/Candidates';
import { AddCandidate } from './components/AddCandidate';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <header className="header">
                <h1>Blockchain Voting App</h1>
                <WalletConnection />
                <Candidates />
                <AddCandidate />
            </header>
        </div>
    );
};

export default App;
