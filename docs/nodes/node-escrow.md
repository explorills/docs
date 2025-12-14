# Node Escrow

!!! info "Non-Custodial Escrow System"
    The Nodes escrow is a fully decentralized, non-custodial ERC721 escrow contract, "EXPL_NodeEscrow" designed for token storage with automated release functionality. The following page details how it works along with the complete contract architecture.

When users mint a Node on [node.expl.one/#EXPL-Nodes](https://node.expl.one/#EXPL-Nodes){:target="_blank"}, it is stored in the Nodes escrow under the minter address ownership. Once Nodes with IDs from **1 to 10,800** are minted, the escrow is automatically released, allowing users to pull their Nodes.

---

## Verify Nodes Ownership

1. Visit: [node.expl.one/#EXPL-Nodes](https://node.expl.one/#EXPL-Nodes){:target="_blank"}
2. Connect wallet
3. Click **"My Address Info"**
4. Click on any Node ID
   - It redirects to the corresponding EXPL Node page on the blockchain

!!! success "Early Access Benefits"
    Even before the Node escrow is released, owners can regularly use their Nodes directly from the escrow to generate mint permissions for $EXPL and gain access to all project events.

---

## EXPL_NodeEscrow Contract

Non-custodial ERC721 escrow contract for EXPL_Nodes tokens storage, with auto-release functionality

### General Functionality

1. Stores ERC721 tokens securely until pulling conditions are met
2. Provides read-only access to escrow data
3. Enables automatic pulling window after 10,800 regular mints
4. Exclusive interaction with main EXPL_Nodes contract
5. Non-custodial design for enhanced security

---

## View Functions

| Function | Description |
|----------|-------------|
| **`a1AddressEscrowHoldings`** | Query detailed escrow holdings for a specific address |
| **`a2EscrowStatus`** | Check current escrow release status |
| **`a3CurrentChainEscrowTotalHoldings`** | Get total tokens held in escrow |
| **`a4RemainingNodesToReleaseEscrow`** | Calculate remaining nodes before release |

---

## Escrow Release Conditions

!!! warning "Release Mechanism"
    Release triggers after first **10,800 Nodes** are minted (by regular mint)
    
    Pulling window opens automatically upon reaching threshold

### Status Transitions

=== "Not Released"
    **"not released yet"**
    
    Before reaching 10,800 nodes threshold
    
=== "Pulling Open"
    **"pulling window is open"**
    
    After threshold reached, tokens available for withdrawal
    
=== "Completed"
    **"all nodes are already pulled"**
    
    No tokens remaining in escrow

---

## Build and Deployment Settings

| Setting | Value |
|---------|-------|
| **Contract Name** | EXPL_NodeEscrow |
| **Compiler Version** | v0.8.24 |
| **EVM Version** | London |
| **Optimization** | Enabled (200 runs) |
| **Networks** | [Ethereum](https://ethereum.org/en/){:target="_blank"}, [Flare](https://flare.network/){:target="_blank"} |

---

## Contract Architecture

```
EXPL_NodeEscrow
├── View Functions
│   ├── Address Holdings
│   │   └── a1AddressEscrowHoldings
│   ├── Escrow Status
│   │   └── a2EscrowStatus
│   ├── Total Holdings
│   │   └── a3CurrentChainEscrowTotalHoldings
│   └── Release Information
│       └── a4RemainingNodesToReleaseEscrow
└── Storage
    ├── Constants
    │   ├── TIER3_END
    │   └── MAX_SUPPLY
    └── Contract References
        └── NODE_MAIN_CONTRACT
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

## Contract Address

**Address:** `0x9eAEc5DB08E0D243d07A82b8DD54Cc70E745f8b4`

### Verify at:

- [Etherscan.io](https://etherscan.io/address/0x9eAEc5DB08E0D243d07A82b8DD54Cc70E745f8b4#code){:target="_blank"}
- [Flare Explorer](https://flare-explorer.flare.network/address/0x9eAEc5DB08E0D243d07A82b8DD54Cc70E745f8b4?tab=contract){:target="_blank"}
- [Sourcify.dev](https://sourcify.dev/#/lookup/0x9eAEc5DB08E0D243d07A82b8DD54Cc70E745f8b4){:target="_blank"}

### Main Contract Integration

**Address:** `0x468F1F91fc674e0161533363B13c2ccBE3769981`

**GitHub:** [explorills/nodes](https://github.com/explorills/nodes){:target="_blank"}

---

!!! success "Next Section"
    The next page will detail the tiered pricing model for EXPL Nodes
