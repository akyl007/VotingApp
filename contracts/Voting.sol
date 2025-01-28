// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        string name;
        uint voteCount;
    }

    mapping(address => bool) public hasVoted;
    Candidate[] public candidates;
    address public owner;

    event CandidateAdded(string name);
    event Voted(address indexed voter, uint candidateId);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addCandidate(string memory name) public onlyOwner {
        candidates.push(Candidate({name: name, voteCount: 0}));
        emit CandidateAdded(name);
    }

    function vote(uint candidateId) public {
        require(!hasVoted[msg.sender], "You have already voted");
        require(candidateId < candidates.length, "Invalid candidate ID");

        candidates[candidateId].voteCount++;
        hasVoted[msg.sender] = true;

        emit Voted(msg.sender, candidateId);
    }

    function getCandidates() public view returns (Candidate[] memory) {
        return candidates;
    }
}
