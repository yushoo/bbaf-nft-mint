import React, { useEffect, useState } from "react";
import CandyMachine from "../CandyMachine";
import {
  MintSectionContainer,
  MintSectionContent,
  MintBtn,
  MintHeader,
  HeaderTitle,
  HeaderSubText,
} from "./MintSectionElements";

const MintSection = () => {
  // State
  const [walletAddress, setWalletAddress] = useState(null);

  // Check if phantom injected solana object
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;
      if (solana) {
        if (solana.isPhantom) {
          console.log("Phantom wallet found!");

          /**
           * The solana object give us a function that will allow us to connect directly with the user's wallet
           */
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            "Connected with Public Key:",
            response.publicKey.toString()
          );

          /**
           * set the user's publicKey in state to be used later
           */
          setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert("Solana object not found! Get phantom Wallet");
      }
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * We want to render this UI when the user hasn't connected their wallet to our app yet
   */
  const renderNotConnectedContainer = () => (
    <MintBtn onClick={connectWallet}>Connect to Wallet</MintBtn>
  );

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      console.log("Connected with Public Key:", response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };

  /**
   * When our component first mounts, let's check to see if wee have connected Phantom Wallet
   */
  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);
  return (
    <MintSectionContainer>
      <MintSectionContent>
        <MintHeader>
          <HeaderTitle>13 Days of ____</HeaderTitle>
          <HeaderSubText>Mint your christmas gift</HeaderSubText>
          {/** Render connect to wallet button */}
          {!walletAddress && renderNotConnectedContainer()}
        </MintHeader>
        {/* Check for walletAddress and then pass in walletAddress */}
        {walletAddress && <CandyMachine walletAddress={window.solana} />}
      </MintSectionContent>
    </MintSectionContainer>
  );
};

export default MintSection;
