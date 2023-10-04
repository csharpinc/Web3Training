// MyToken_test.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
  let myToken;
  let owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();    // getting the signer's details
    const MyToken = await ethers.getContractFactory("MyToken");
    myToken = await MyToken.deploy("MyToken", "MTK", 18, 10000);    // deploying the contract
  });

  it("Should have correct name, symbol, and decimals", async function () {
    expect(await myToken.name()).to.equal("MyToken");
    expect(await myToken.symbol()).to.equal("MTK");
    expect(await myToken.decimals()).to.equal(18);
  });

  it("Should assign the total supply to the deployer", async function () {
    const totalSupply = await myToken.totalSupply();
    const deployerBalance = await myToken.balanceOf(await owner.address);
    expect(deployerBalance).to.equal(totalSupply);
  });
});

describe("Transfer Tokens", function () {
  let myToken;
  let owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();    // getting the signer's details
    const MyToken = await ethers.getContractFactory("MyToken");
    myToken = await MyToken.deploy("MyToken", "MTK", 18, 10000);    // deploying the contract
  });

  it("Should transfer tokens correctly", async function () {
    const initialBalance = await myToken.balanceOf(owner.address);
    const recipient = "0x1234567890123456789012345678901234567890";//some random address
    const amount = BigInt(100);

    await myToken.transfer(recipient, amount);

    const finalBalance = await myToken.balanceOf(owner.address);
    expect(finalBalance).to.equal(initialBalance - amount);

    const recipientBalance = await myToken.balanceOf(recipient);
    expect(recipientBalance).to.equal(amount);
  });

  it("Should fail when transferring zero tokens", async function () {
    try {
      let recipient = "0x1234567890123456789012345678901234567890"         // some random ethereum address
      await myToken.transfer(recipient, 0);
      expect.fail('Transfer of zero tokens should have failed. Transfer amount must be greater than zero');
    }
    catch (error) {
      expect(error.message).to.include('Cannot send 0 tokens');
    }
  });

  it('Should fail when transferring more tokens than sender balance', async () => {
    const senderBalance = await myToken.balanceOf(owner.address);
    const amountToSend = senderBalance + BigInt(459);
    let recipient = "0x1234567890123456789012345678901234567890";
    try {
      await myToken.transfer(recipient, amountToSend);
      expect.fail('Transfer exceeding sender balance should have failed as token holder has Insufficient balance');
    }
    catch (error) {
      expect(error.message).to.include('Insufficient balance');
    }
  });
});

describe("Events work properly", function () {
  let myToken;
  let owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();    // getting the signer's details
    const MyToken = await ethers.getContractFactory("MyToken");
    myToken = await MyToken.deploy("MyToken", "MTK", 18, 10000);    // deploying the contract
  });

  it('should emit Transfer events properly', async () => {
    const amountToSend =  BigInt(459);
    let recipient = "0x1234567890123456789012345678901234567890";

    const TransferTx = await myToken.transfer(recipient, amountToSend);
    await TransferTx.wait(); // Wait for the transaction to be mined
    const TransferEvents = await myToken.queryFilter('Transfer', TransferTx.blockHash);
    expect(TransferEvents.length).to.equal(1);
  });
});