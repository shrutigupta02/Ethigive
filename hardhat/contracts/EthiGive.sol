// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract EthiGive {
    struct Donation {
        string donor;
        string message;
        uint256 timestamp;
        address from;
    }

    Donation[] donations;
    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function giveDonation(string memory donor, string memory message) public payable {
        require(msg.value > 0, "Please pay greater than 0 ether");
        owner.transfer(msg.value);
        donations.push(Donation(donor, message, block.timestamp, msg.sender));
    }

    function getDonations() public view returns (Donation[] memory) {
        return donations;
    }
}
