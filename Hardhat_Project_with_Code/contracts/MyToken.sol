// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract MyToken {
    // TODO: Add necessary variables: name, symbol, decimals, initialSupply/totalSupply
    string public name;
    string public symbol;
    uint8 public decimal;
    uint256 public totalSupply;

    //TODO: Add mapping to store each address balance
    mapping(address => uint256) public balanceOf;

    //TODO: Add event to log all transfers
    event Transfer(address indexed from, address indexed to, uint256 value);

    /*TODO: Add constructor to set name, symbol, decimals and totalSupply of the token
            Add balance to the address that deploys the contract
    */
    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimal,
        uint256 _totalSupply
    ) {
        name = _name;
        symbol = _symbol;
        decimal = _decimal;
        totalSupply = _totalSupply * 10 ** uint256(_decimal);
        balanceOf[msg.sender] = totalSupply;
    }

    /*TODO: Add function to transfer tokens to another address
            Check for 0 value transfers and insufficient balance
    */
    function transfer(address to, uint256 value) external {
        if (value == 0) {
            revert("Zero amount transfer is not possible");
        }

        if (balanceOf[msg.sender] < value) {
            revert("Insufficient balance");
        }
        balanceOf[msg.sender] -= value; //balanceOf[msg.sender] = balanceOf[msg.sender] - value;
        balanceOf[to] += value; //balanceOf[to] = balanceOf[to] + value;
        emit Transfer(msg.sender, to, value);
    }
}
