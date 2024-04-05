Assessment Contract Readme
This repository contains a Solidity smart contract named Assessment designed for handling basic financial transactions and storing entity information. Below are the details of the contract's functionalities:

Contract Overview
Purpose
The Assessment contract serves two primary purposes:

Financial Transactions: It allows for depositing and withdrawing funds, maintaining an account balance.
Entity Information: It enables storing and retrieving information about an entity, including its name and age.
Functionalities
Deposit: Owners can deposit funds into the contract.
Withdraw: Owners can withdraw funds from the contract, given they have sufficient balance.
Update Name and Age: Owners can update the entity's name and age.
Get Balance: Retrieve the current balance of the contract.
SetFavouriteNumber: Sets the users Favourite number stored
GetFavouriteNumber: Retrieve the users Favourite number stored
Usage
Prerequisites
Solidity Environment: Ensure you have a Solidity development environment set up.
Owner Account: You need an Ethereum account to interact with this contract, specifically the owner's account to execute functions like deposit, withdraw, update name, and update age.
Deployment
Compile the Assessment.sol file using a Solidity compiler compatible with version ^0.8.9.
Deploy the compiled contract to an Ethereum-compatible blockchain network of your choice.
Upon deployment, specify an initial balance for the contract.
Interacting with the Contract
Once deployed, interact with the contract using the following functions:

Deposit: Execute the deposit function to deposit funds into the contract.
Withdraw: Execute the withdraw function to withdraw funds from the contract.
Update Name: Call the updateName function to update the entity's name.
Update Age: Call the updateAge function to update the entity's age.
Get Balance: Call the getBalance function to retrieve the current balance of the contract.
Get Entity Details: Call the getEntityDetails function to retrieve the entity's name and age.
Events
Deposit: The Deposit event is emitted upon successful deposit of funds.
Withdraw: The Withdraw event is emitted upon successful withdrawal of funds.
Error Handling
Insufficient Balance: If an attempt is made to withdraw an amount exceeding the contract's balance, an InsufficientBalance error is reverted.
License
This contract is provided under the UNLICENSED license. Feel free to use, modify, and distribute it as needed.

Disclaimer
This contract is provided as-is without any warranty. Use it at your own risk.
FRONTEND
Open your web browser and navigate to localhost:3000 to view the application.
Usage
Connect MetaMask Wallet:

Click the "Connect MetaMask Wallet" button to connect your MetaMask wallet. You will be prompted to sign in and grant access to the application.
Deposit Funds:

Click the "Deposit 1 ETH" button to deposit 1 ETH into the contract.
Withdraw Funds:

Click the "Withdraw 1 ETH" button to withdraw 1 ETH from the contract.
Set Name:

Enter your desired name in the input field labeled "Set Name".
Click the "Set Name" button to update your name on the contract.
Set Age:

Enter your desired age in the input field labeled "Set Age".
Click the "Set Age" button to update your age on the contract.
Get Message:

Click the "Get Message" button to retrieve your updated name and age from the contract.
View Account Details:

Your account address and current balance will be displayed on the screen.
Additional Notes
Ensure MetaMask is installed and configured in your browser.
Make sure MetaMask is connected to the appropriate Ethereum network where the contract is deployed.
Review and verify all transactions before confirming them in MetaMask.
