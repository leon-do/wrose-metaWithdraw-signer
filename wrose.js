class WROSE {
  constructor(_signer) {
    const contractAddress = "0x1a6f25f437b8ed02a49cf84598b120303710fb6e";
    // prettier-ignore
    const abi =[  { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "src", "type": "address" }, { "indexed": true, "internalType": "address", "name": "guy", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "wad", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "guy", "type": "address" }, { "internalType": "uint256", "name": "wad", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "deposit", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "dst", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "wad", "type": "uint256" } ], "name": "Deposit", "type": "event" }, { "constant": false, "inputs": [ { "internalType": "bytes", "name": "signature", "type": "bytes" }, { "internalType": "address payable", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "wad", "type": "uint256" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "internalType": "uint256", "name": "reward", "type": "uint256" } ], "name": "metaWithdraw", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "dst", "type": "address" }, { "internalType": "uint256", "name": "wad", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "src", "type": "address" }, { "indexed": true, "internalType": "address", "name": "dst", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "wad", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "src", "type": "address" }, { "internalType": "address", "name": "dst", "type": "address" }, { "internalType": "uint256", "name": "wad", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "src", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "wad", "type": "uint256" } ], "name": "Withdrawal", "type": "event" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "wad", "type": "uint256" } ], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "bytes32", "name": "_hash", "type": "bytes32" }, { "internalType": "bytes", "name": "_signature", "type": "bytes" } ], "name": "getSigner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "wad", "type": "uint256" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "internalType": "uint256", "name": "reward", "type": "uint256" } ], "name": "metaWithdrawHash", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "replayNonce", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" } ]
    this.contract = new ethers.Contract(contractAddress, abi, _signer);
  }

  async balanceOf() {
    const signerAddress = await signer.getAddress();
    const balance = await this.contract["balanceOf"](signerAddress);
    return ethers.utils.formatEther(balance);
  }

  async deposit(_amount) {
    const receipt = await this.contract["deposit"]({ value: ethers.utils.parseEther(_amount) });
    return receipt.hash;
  }

  async withdraw(_amount) {
    const receipt = await this.contract["withdraw"](ethers.utils.parseEther(_amount));
    console.log(receipt);
    return receipt.hash;
  }

  async createMetaWithdraw(_to, _value, _reward) {
    const value = ethers.utils.parseEther(_value);
    const reward = ethers.utils.parseEther(_reward);
    const signerAddress = await signer.getAddress();
    const nonce = await this.contract["replayNonce"](signerAddress);
    const hash = await this.contract["metaWithdrawHash"](_to, value, nonce, reward);
    console.log({ hash });
    return hash;
  }

  async signMetaWithdraw(_hash) {
    const signature = await signer.signMessage(ethers.utils.arrayify(_hash));
    console.log({ signature });
    return signature;
  }

  async relayMetaWithdraw(_signature, _to, _value, _reward) {
    const value = ethers.utils.parseEther(_value);
    const reward = ethers.utils.parseEther(_reward);
    const signerAddress = await signer.getAddress();
    const nonce = await this.contract["replayNonce"](signerAddress);
    const receipt = await this.contract["metaWithdraw"](_signature, _to, value, nonce, reward);
    return receipt;
  }
}
