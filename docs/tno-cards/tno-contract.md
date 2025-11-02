# TNO Contract

!!! info "ERC-1155 TNO Cards"
    TNO Cards, ERC-1155 tokens, are publicly available through the cross-chain and immutable "explorills_TNO" smart contract on [Ethereum](https://ethereum.org/) and [Flare](https://flare.network/) networks. Early adopters can obtain $EXPL via TNO Cards, enabling them to mint $EXPL as an ERC-20 token upon deployment. The contract architecture is detailed below.

---

## explorills_TNO Contract

ERC1155 cross-chain contract with ERC20 minting functionality

### General Functionality

1. Mints four types of NFTs (TNO Cards): Bronze, Silver, Gold, and Diamond
2. Each type of TNO card holds a different value relative to explorills' native currency $EXPL
3. TNO cards will enable users to claim $EXPL once it's deployed
4. Cross-chain NFT minting, transfers, and balance management are supported

### Main Functions

- **`mint`**: Create new NFTs (TNO cards)
- **`burnTnftForMintTerc20`**: Burn TNO cards to get ERC20 tokens $EXPL
- **`receiveTnftFromUserToOtherChainsSupply`**: Transfer TNO cards to another chain

---

## Build and Deployment Settings

| Setting | Value |
|---------|-------|
| **Contract Name** | explorills_TNO |
| **Compiler Version** | v0.8.24 |
| **EVM Version** | London |
| **Optimization** | Enabled (200 runs) |
| **Networks** | [Ethereum](https://ethereum.org/en/), [Flare](https://flare.network/) |

---

## Notes

!!! note "Additional Components"
    - This contract is designed to work with a separate ERC20 token contract
    - Cross-chain functionalities require additional off-chain components

---

## License

**BSD-3-Clause License**

---

## Contact

| | |
|---|---|
| **Main** | [explorills.com](https://explorills.com/) |
| **Mint** | [mint.explorills.com](https://mint.explorills.com/) |
| **Contact** | [info@explorills.com](mailto:info@explorills.com) |
| **Security** | [info@explorills.ai](mailto:info@explorills.ai) |

---

## Contract Address

**Address:** `0xa255Ea1Ce9D42Ff1AE8D573D1765C49335631059`

### Verify at:

- [Sourcify.dev](https://sourcify.dev/#/lookup/0xa255Ea1Ce9D42Ff1AE8D573D1765C49335631059)
- [Etherscan.io](https://etherscan.io/address/0xa255Ea1Ce9D42Ff1AE8D573D1765C49335631059#code)
- [Flarescan.com](https://flarescan.com/address/0xa255Ea1Ce9D42Ff1AE8D573D1765C49335631059/contract/14/code?chainid=14)
- [Flare Explorer](https://flare-explorer.flare.network/address/0xa255Ea1Ce9D42Ff1AE8D573D1765C49335631059?tab=contract#address-tabs)

---

!!! success "Next Section"
    The next page will provide a detailed breakdown of the TNO Cards pricing model → [TNO Cards Pricing](tno-cards-pricing.md)
