# wrose-metaWithdraw-signer

![Screen Shot 2022-10-13 at 1 54 42 PM](https://user-images.githubusercontent.com/19412160/195670533-c3fff478-5c97-45b0-80ab-371e05aab3b7.png)

## Docs

```javascript
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const wrose = new WROSE(signer);

// get balance of WROSE
const balance = await wrose.balanceOf();

// deposit 0.1 ROSE to get 0.1 WROSE
const txHash = await wrose.deposit(0.1);

// withdraw 0.1 WROSE to get 0.1 ROSE
const txHash = await wrose.withdraw(0.1);

// create a metatransaction hash to send ROSE in a confidental way
const to = "0xbob"; // user's address
const amount = 0.09; // amount to send to user
const reward = 0.01; // reward to send to relayer
const metaWithdrawHash = await wrose.createMetaWithdraw(to, amount, reward);

// sign meta-transaction hash
const signature = await wrose.signMetaWithdraw(metaWithdrawHash);

// relay meta-transaction hash
const txHash = await wrose.relayMetaWithdraw(signature, to, value, reward);
```
