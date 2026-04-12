# TNO Contract

!!! danger "Archived — Contract Paused and Renounced"
    **This page is archived.** The `EXPL.ONE_TNO` smart contract has been permanently deactivated. See the [Archive Overview](../overview.md) for full details on contract status.

---

## Historical Contract Details

`EXPL.ONE_TNO` was an ERC-1155 smart contract deployed on [Ethereum](https://ethereum.org/){:target="_blank"} and [Flare](https://flare.network/){:target="_blank"} networks. The contract architecture is preserved below for reference.

---

## Contract Overview

ERC-1155 cross-chain contract with ERC-20 minting functionality.

### General Functionality

1. Minted four types of NFTs (TNO Cards): Bronze, Silver, Gold, and Diamond
2. Each card tier held a different EXPL value
3. TNO Cards enabled holders to claim EXPL once the token was deployed
4. Supported cross-chain NFT minting, transfers, and balance management

### Main Functions

- **`mint`** — create new TNO Cards
- **`burnTnftForMintTerc20`** — burn TNO Cards to receive ERC-20 EXPL tokens
- **`receiveTnftFromUserToOtherChainsSupply`** — transfer TNO Cards to another chain

---

## Build and Deployment Settings

| Setting | Value |
|---------|-------|
| **Contract Name** | `EXPL.ONE_TNO` |
| **Compiler Version** | v0.8.24 |
| **EVM Version** | London |
| **Optimization** | Enabled (200 runs) |
| **Networks** | [Ethereum](https://ethereum.org/en/){:target="_blank"}, [Flare](https://flare.network/){:target="_blank"} |

---

## Notes

!!! note "Additional Components"
    - This contract was designed to work with a separate ERC-20 token contract.
    - Cross-chain functionality required additional off-chain components.

---

## License

**BSD-3-Clause License**

---

## Additional Resources

| Resource | Link |
|----------|------|
| **Contact** | [support@expl.one](mailto:support@expl.one){:target="_blank"} |
| **Security** | [security@expl.one](mailto:security@expl.one){:target="_blank"} |

---

## Contract Address

**Address:** `0xa255Ea1Ce9D42Ff1AE8D573D1765C49335631059`

### Verify at

- [Sourcify.dev](https://sourcify.dev/#/lookup/0xa255Ea1Ce9D42Ff1AE8D573D1765C49335631059){:target="_blank"}
- [Etherscan.io](https://etherscan.io/address/0xa255Ea1Ce9D42Ff1AE8D573D1765C49335631059#code){:target="_blank"}
- [Flarescan.com](https://flarescan.com/address/0xa255Ea1Ce9D42Ff1AE8D573D1765C49335631059/contract/14/code?chainid=14){:target="_blank"}
- [Flare Explorer](https://flare-explorer.flare.network/address/0xa255Ea1Ce9D42Ff1AE8D573D1765C49335631059?tab=contract#address-tabs){:target="_blank"}
