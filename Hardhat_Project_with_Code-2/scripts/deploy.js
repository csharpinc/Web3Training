//TODO: Import the hardhat package
hard = require("hardhat");

/*TODO: Write the main function
        The function should be able to deploy the contract with the constructor values
        i.e. name, symbol, decimals, totalSupply
        Additionally, it should print the address of the deployed contract to the console
*/
async function main(){
        const MyTok = await hard.ethers.getContractFactory("MyToken");
        const myTok = await MyTok.deploy("MyTok", "MTo", 18, 1000000);

        console.log(`Contract deployed to contract address ${await myTok.target}`);
}

/* TODO: Call the main function
        Add a catch statement to print errors to the console
*/
main().catch((err)=>{
        console.log(err);
        process.exit(1);
})