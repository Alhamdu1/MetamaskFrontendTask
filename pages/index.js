import { useState, useEffect } from "react";
import { ethers } from "ethers";

import atm_abi from "../artifacts/contracts/Metacrafters.sol/Metacrafters.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [message, setMessage] = useState(" ");
  const [favouriteNumber, setFavouriteNumber] = useState();

  const contractAddress = "0x6fcD88B8ee53806ae6b58B8E08eE007191d80926";
  const atmABI = atm_abi.abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const account = await ethWallet.request({ method: "eth_accounts" });
      handleAccount(account);
    }
  };

  const handleAccount = (account) => {
    if (account) {
      console.log("Account connected: ", account);
      setAccount(account);
    } else {
      console.log("No account found");
    }
  };

  const connectAccount = async () => {
    if (!ethWallet) {
      alert("MetaMask wallet is required to connect");
      return;
    }

    const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
    handleAccount(accounts);

    // once wallet is set we can get a reference to our deployed contract
    getATMContract();
  };

  const getATMContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const atmContract = new ethers.Contract(contractAddress, atmABI, signer);

    setATM(atmContract);
  };

  const getBalance = async () => {
    if (atm) {
      setBalance((await atm.getBalance()).toNumber());
    }
  };

  const deposit = async () => {
    if (atm) {
      let tx = await atm.deposit(1);
      await tx.wait();
      getBalance();
    }
  };

  const withdraw = async () => {
    if (atm) {
      let tx = await atm.withdraw(1);
      await tx.wait();
      getBalance();
    }
  };

  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this ATM.</p>;
    }

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return <button onClick={connectAccount}>Connect Metamask Wallet</button>;
    }

    if (balance == undefined) {
      getBalance();
    }

    //Added functionality

    async function SetNumber() {
      if (atm) {
        let tx = await atm.setFavouriteNumber(favouriteNumber);
        await tx.wait();

        alert("Successful");
        setFavouriteNumber();
      }
    }

    async function getMessage() {
      if (atm) {
        let tx = await atm.getFavouriteNumber();

        const name1 = [` Your Favourite Number is ${tx}`];

        setMessage(name1);
      }
    }
    function handleMessageChange(e) {
      setFavouriteNumber(e.target.value);
    }

    return (
      <div>
        <p>Your Account: {account}</p>
        <p>Your Balance: {balance} ETH</p>
        <button onClick={deposit}>Deposit 1 ETH</button>
        <button onClick={withdraw}>Withdraw 1 ETH</button>
        <br />
        <h3>
          <i>Set Favourite Number</i>
        </h3>
        <input
          type="text"
          placeholder="Set Favourite Number"
          value={favouriteNumber}
          onChange={handleMessageChange}
        />
        <br />
        <button onClick={SetNumber}>Set Favourite Number</button>
        <br />

        <br />
        <button onClick={getMessage}>Get Favourite Number</button>
        <h2>{message}</h2>
        <br />
      </div>
    );
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <main className="container">
      <header>
        <h1>Welcome to the Metacrafters ATM!</h1>
      </header>
      {initUser()}
      <style jsx global>{`
        body {
          padding: 0;
          margin: 0;
          min-height: 100vh;
          display: flex;
          width: 100%;
          text-align: center;
          justify-content: center;
          align-items: center;
          background-color: red;
          color: white;
        }
        input[type="text"] {
          border-radius: 10px;
          height: 40px;
          text-align: center;
        }
        button {
          background-color: black;
          padding: 1em;
          border-radius: 10px;
          border: 0;
          margin: 1em;
          color: white;
          font-weight: bold;
        }
      `}</style>
    </main>
  );
}
