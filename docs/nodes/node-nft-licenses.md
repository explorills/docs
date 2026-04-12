# EXPL Nodes Overview

!!! info "ERC721 on Ethereum and Flare"
    EXPL Nodes are ERC721 tokens minted through the EXPL_Nodes smart contract, deployed identically on [Ethereum](https://ethereum.org/){:target="_blank"} and [Flare](https://flare.network/){:target="_blank"}. The contract is immutable and fully decentralized. Own a Node to operate network infrastructure, mint EXPL tokens, and participate in all ONE ecosystem projects.

**Purchase**: [node.expl.one](https://node.expl.one){:target="_blank"}

---

## First batch: 12,000 Nodes

The first batch consists of **12,000 Nodes**. Once EXPL launches as an ERC20 token and distribution begins, a second contract will be deployed to bring the total to **100,000 Nodes** across the ecosystem.

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

## EXPL_Nodes contract

ERC721 cross-chain contract with whitelist, dual-escrow system, and backup address support.

### Core features

1. Mints 12,000 unique ERC721 tokens
2. Dual-escrow system (Node escrow + cross-chain escrow)
3. Backup address support for additional security
4. Whitelist minting for reserved allocations
5. Cross-chain transfers and balance management
6. Node escrow auto-activates pulling window after Nodes 1 -- 10,800 are minted

### Main functions

- **`mint`** — Create new Nodes in the Node escrow
- **`whitelistMint`** — Reserved minting for whitelisted addresses
- **`a2SetUpBackUpAddresses`** — Assign additional owner addresses to Nodes in escrow
- **`a3PullMyNodesFromEscrow`** — Release Nodes from escrow to owner (minter or backup address)
- **`a4ReceiveTnftFromUserToOtherChainsSupply`** — Transfer Nodes to cross-chain escrow
- **`a5SendTnftToUserFromOtherChainsSupply`** — Receive Nodes on the opposite network

---

## Supply and tiers

### Total supply: 12,000 Nodes

**Maximum per address:** 100 Nodes

=== "Tier 1 (1 -- 1,000)"
    - **Starting price:** $1
    - **Price step:** +$1 per 100 Nodes
    
=== "Tier 2 (1,001 -- 2,800)"
    - **Starting price:** $15
    - **Price step:** +$5 per 100 Nodes
    
=== "Tier 3 (2,801 -- 10,800)"
    - **Starting price:** $110
    - **Price step:** +$10 per 100 Nodes
    
=== "Whitelist reserve (10,801 -- 12,000)"
    - **1,200 Nodes reserved**
    - Exclusive whitelist allocation

[:octicons-arrow-right-24: Full price tables](node-pricing-structure.md)

---

## Build and deployment settings

| Setting | Value |
|---------|-------|
| **Contract name** | EXPL_Nodes |
| **Compiler version** | v0.8.24 |
| **EVM version** | London |
| **Optimization** | Enabled (200 runs) |
| **Networks** | [Ethereum](https://ethereum.org/en/){:target="_blank"}, [Flare](https://flare.network/){:target="_blank"} |

---

## Contract architecture

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

## Additional resources

| Resource | Link |
|----------|------|
| **Contact** | [support@expl.one](mailto:support@expl.one){:target="_blank"} |
| **Security** | [security@expl.one](mailto:security@expl.one){:target="_blank"} |

---

## Contract addresses

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
