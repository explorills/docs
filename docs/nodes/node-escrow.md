# Node Escrow

!!! info "Non-custodial escrow system"
    EXPL_NodeEscrow is a fully decentralized, non-custodial ERC721 escrow contract designed for secure token storage with automated release. When users mint a Node, it is held in the escrow under the minter's address until release conditions are met.

When users mint a Node on [node.expl.one](https://node.expl.one/#EXPL-Nodes){:target="_blank"}, the Node is stored in escrow under the minter's ownership. Once Nodes 1 through 10,800 are minted, the escrow releases automatically and owners can pull their Nodes to their wallets.

---

## Verify Node ownership

1. Visit [node.expl.one](https://node.expl.one/#EXPL-Nodes){:target="_blank"}
2. Connect your wallet
3. Click **"My Address Info"**
4. Click any Node ID to view it on the blockchain explorer

!!! tip "Early access"
    Before the escrow releases, owners can still use their Nodes directly from escrow to generate EXPL mint permissions and access project events.

---

## EXPL_NodeEscrow contract

Non-custodial ERC721 escrow for EXPL_Nodes token storage with auto-release functionality.

### How it works

1. Stores ERC721 tokens securely until pulling conditions are met
2. Provides read-only access to escrow data
3. Opens the pulling window automatically after 10,800 regular mints
4. Interacts exclusively with the main EXPL_Nodes contract
5. Non-custodial design -- no third party holds your Nodes

---

## View functions

| Function | Description |
|----------|-------------|
| **`a1AddressEscrowHoldings`** | Query detailed escrow holdings for a specific address |
| **`a2EscrowStatus`** | Check current escrow release status |
| **`a3CurrentChainEscrowTotalHoldings`** | Get total tokens held in escrow |
| **`a4RemainingNodesToReleaseEscrow`** | Calculate remaining Nodes before release |

---

## Escrow release conditions

!!! warning "Release mechanism"
    The escrow releases after the first **10,800 Nodes** are minted (regular mint only, not whitelist). The pulling window opens automatically when this threshold is reached.

### Status transitions

=== "Not released"
    **"not released yet"**
    
    Before reaching the 10,800 Nodes threshold.
    
=== "Pulling open"
    **"pulling window is open"**
    
    Threshold reached. Owners can withdraw their Nodes.
    
=== "Completed"
    **"all nodes are already pulled"**
    
    No tokens remaining in escrow.

---

## Build and deployment settings

| Setting | Value |
|---------|-------|
| **Contract name** | EXPL_NodeEscrow |
| **Compiler version** | v0.8.24 |
| **EVM version** | London |
| **Optimization** | Enabled (200 runs) |
| **Networks** | [Ethereum](https://ethereum.org/en/){:target="_blank"}, [Flare](https://flare.network/){:target="_blank"} |

---

## Contract architecture

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

## Additional resources

| Resource | Link |
|----------|------|
| **Contact** | [support@expl.one](mailto:support@expl.one){:target="_blank"} |
| **Security** | [security@expl.one](mailto:security@expl.one){:target="_blank"} |

---

## Contract address

**Address:** `0x9eAEc5DB08E0D243d07A82b8DD54Cc70E745f8b4`

### Verify at:

- [Etherscan.io](https://etherscan.io/address/0x9eAEc5DB08E0D243d07A82b8DD54Cc70E745f8b4#code){:target="_blank"}
- [Flare Explorer](https://flare-explorer.flare.network/address/0x9eAEc5DB08E0D243d07A82b8DD54Cc70E745f8b4?tab=contract){:target="_blank"}
- [Sourcify.dev](https://sourcify.dev/#/lookup/0x9eAEc5DB08E0D243d07A82b8DD54Cc70E745f8b4){:target="_blank"}

### Main contract integration

**Address:** `0x468F1F91fc674e0161533363B13c2ccBE3769981`

**GitHub:** [explorills/nodes](https://github.com/explorills/nodes){:target="_blank"}
