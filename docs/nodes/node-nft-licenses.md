# EXPL Nodes Overview

!!! success "ERC721 EXPL Nodes"
    EXPL Nodes are ERC721 tokens available for public purchase via the fully decentralized and immutable smart contract "EXPL_Nodes," deployed on [Ethereum](https://ethereum.org/){:target="_blank"} and [Flare](https://flare.network/){:target="_blank"} Networks. EXPL Nodes empower users to operate network infrastructure, granting them mint permissions for EXPL and participation in all ONE ecosystem projects. The full contract architecture is outlined below.

**Purchase**: [node.expl.one](https://node.expl.one){:target="_blank"}

---

## First Batch: 12,000 EXPL Nodes

This is the first batch of EXPL Nodes, limited to **12,000**. Once EXPL distribution begins as an ERC20 token through these initial Nodes, a new contract will be deployed for the second batch, bringing the total to **100,000 EXPL Nodes** across the entire ONE ecosystem.

<div style="display: flex; gap: 20px; justify-content: center; align-items: center; margin: 30px 0; flex-wrap: wrap;">
  <figure style="text-align: center;">
    <img src="../../assets/images/node01.png" alt="EXPL Node ID 1" width="375" />
    <figcaption><em>EXPL Node ID 1</em></figcaption>
  </figure>
  <figure style="text-align: center;">
    <img src="../../assets/images/node12000.png" alt="EXPL Node ID 12000" width="375" />
    <figcaption><em>EXPL Node ID 12000</em></figcaption>
  </figure>
</div>

---

## EXPL_Nodes Contract

ERC721 cross-chain contract with whitelist functionality, dual-escrow system and backup address support

### General Functionality

1. Mints 12,000 unique ERC721 tokens
2. Features dual-escrow system (Nodes and cross-chain escrows)
3. Supports backup address functionality for enhanced security
4. Includes whitelist functionality for reserved minting
5. Enables cross-chain transfers and balance management
6. The Node Escrow automatically activates the pulling window once 1-10,800 Nodes have been minted

### Main Functions

- **`mint`**: Create new Nodes in the Node escrow
- **`whitelistMint`**: Reserved minting for whitelisted addresses
- **`a2SetUpBackUpAddresses`**: Assign additional owner addresses to the Nodes in Escrow
- **`a3PullMyNodesFromEscrow`**: Release Nodes from escrow to owner (minter or backup address)
- **`a4ReceiveTnftFromUserToOtherChainsSupply`**: Transfer Nodes to cross-chain escrow
- **`a5SendTnftToUserFromOtherChainsSupply`**: Receive Nodes on opposite network

---

## Supply and Tiers

### Total Supply: 12,000 Nodes

**Maximum per address:** 100 Nodes

=== "Tier 1 (1-1,000)"
    - **Starting Price:** 1 USD
    - **Price Step:** +1 USD per 100 Nodes
    
=== "Tier 2 (1,001-2,800)"
    - **Starting Price:** 15 USD
    - **Price Step:** +5 USD per 100 Nodes
    
=== "Tier 3 (2,801-10,800)"
    - **Starting Price:** 110 USD
    - **Price Step:** +10 USD per 100 Nodes
    
=== "Whitelist Reserve (10,801-12,000)"
    - **1,200 nodes reserved**
    - Exclusive whitelist allocation

---

## Build and Deployment Settings

| Setting | Value |
|---------|-------|
| **Contract Name** | EXPL_Nodes |
| **Compiler Version** | v0.8.24 |
| **EVM Version** | London |
| **Optimization** | Enabled (200 runs) |
| **Networks** | [Ethereum](https://ethereum.org/en/){:target="_blank"}, [Flare](https://flare.network/){:target="_blank"} |

---

## Contract Architecture

```
EXPL_Nodes
├── Main Functions
│   ├── Minting Operations
│   │   ├── mint
│   │   ├── whitelistMint
│   │   └── safeBatchTransferFrom
│   ├── Backup System
│   │   ├── setUpBackUpAddresses
│   │   └── checkBackUpAddresses
│   ├── Pulling Operations
│   │   ├── pullMyNodesFromEscrow
│   │   └── setPullPaused
│   ├── Cross-chain Operations
│   │   ├── receiveTnftFromUserToOtherChainsSupply
│   │   └── sendTnftToUserFromOtherChainsSupply
│   └── Administrative
│       ├── setOneTimeNodeEscrow
│       ├── setOneTimeCrossChainEscrow
│       └── setCrossChainOperator
├── View Functions
│   ├── Price Information
│   │   ├── getCurrentPriceInUSD
│   │   └── getBatchPriceInUSD
│   ├── Escrow Status
│   │   ├── addressEscrowHoldings
│   │   ├── getEscrowTokens
│   │   └── remainingNodesToMint
│   ├── Supply Management
│   │   ├── getTotalCurrentSupply
│   │   └── totalSupply
│   └── Whitelist Information
│       ├── getWhitelistStatus
│       └── whitelistMintAllowance
└── Storage
    ├── Token Management
    │   ├── currentChainTnftSupply
    │   ├── otherChainsTnftSupply
    │   └── totalMintedCurrentChain
    ├── Escrow System
    │   ├── nodesEscrowAddress
    │   └── crossChainEscrowAddress
    └── Whitelist Management
        ├── whitelistAllowance
        └── hasWhitelistMinted
```

---

## License

**BSD-3-Clause License**

---

## Additional Resources

| **Resource** | **Link** |
|--------------|----------|
| **Contact** | [support@expl.one](mailto:support@expl.one){:target="_blank"} |
| **Security** | [security@expl.one](mailto:security@expl.one){:target="_blank"} |

---

## Contract Addresses

### EXPL_Nodes

**Address:** `0x468F1F91fc674e0161533363B13c2ccBE3769981`

**Verify at:**

- [Etherscan.io](https://etherscan.io/address/0x468F1F91fc674e0161533363B13c2ccBE3769981#code){:target="_blank"}
- [Flare Explorer](https://flare-explorer.flare.network/address/0x468F1F91fc674e0161533363B13c2ccBE3769981?tab=contract){:target="_blank"}
- [Sourcify.dev](https://sourcify.dev/#/lookup/0x468F1F91fc674e0161533363B13c2ccBE3769981){:target="_blank"}

### EXPL_NodeEscrow

**Address:** `0x9eAEc5DB08E0D243d07A82b8DD54Cc70E745f8b4`

**GitHub:** [explorills/node-escrow](https://github.com/explorills/node-escrow/tree/main){:target="_blank"}

### EXPL_BridgeEscrow

**Address:** `0x129D9dce2326492d073D147762230e60c01e0f97`

**GitHub:** [explorills/node-bridge-escrow](https://github.com/explorills/node-bridge-escrow/tree/main){:target="_blank"}

---

!!! success "Next Section"
    The upcoming page will explain the escrow functionality of EXPL Nodes
