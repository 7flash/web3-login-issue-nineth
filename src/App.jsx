import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { Web3Provider, ConnectWeb3Modal, useWeb3 } from "@buildship/web3-login";

// Wallets that you want to support
const connectors = {
    // Metamask
    injected: {},
    magic: {
        apiKey: "pk_...", // Your Magic api key
        chainId: 1, // The chain ID you want to allow on Magic
    },
    walletconnect: {},
    // Coinbase
    walletlink: {
        appName: "Buildship Example",
        url: "https://buildship.dev", 
        darkMode: false,
    }
}

const App = () => {
    const { address } = useWeb3()
    const [isOpen, setIsOpen] = useState(false)
    
    return <Web3Provider
        supportedChainIds={[1, 4]}
        connectors={connectors}>
            Connected address: {address}    
            <button onClick={() => setIsOpen(true)}>
              Connect wallet
            </button>
            <ConnectWeb3Modal 
              open={isOpen} 
              setOpen={setIsOpen}
            /> 
    </Web3Provider>
}

export default App
