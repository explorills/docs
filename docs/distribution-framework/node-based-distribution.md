# Node-Based Distribution

!!! info "Operator-Driven Distribution"
    EXPL tokens only enter circulation when a Node operator initiates a mint. Each mint triggers automated allocation across all designated escrows at fixed, contract-enforced ratios.

---

## Daily Minting Permission

Each EXPL Node generates a daily minting permission of **574.30 EXPL** (or **591.40 EXPL** if purchased via referral code). This includes **10 EXPL** designated as Founding Contributors Royalty.

Operators can mint daily or accumulate permissions and mint later. Until minted, the tokens do not exist in the ecosystem.

---

## Distribution Breakdown

When an operator mints, the **574.30 EXPL** distributes automatically:

| Destination | Amount | Share |
|---|---|---|
| ONE venture escrow | 171 EXPL | 29.77% |
| ONE care escrow | 171 EXPL | 29.77% |
| Node operator reward | 171 EXPL | 29.77% |
| Community Grants escrow | 34.2 EXPL | 5.96% |
| Developer Incentives escrow | 17.1 EXPL | 2.98% |
| Founding Contributors Royalty | 10 EXPL | 1.74% |

The two largest escrows -- ONE venture and ONE care -- each receive 171 EXPL, matching the operator reward. Community Grants and Developer Incentives receive smaller allocations directed at ecosystem growth.

---

## Founding Contributors Royalty

Each Node generates an additional **+10 EXPL daily** as royalty for founding contributors. This allocation replaces the former TNO Cards program and distributes the same 1.38% of total supply (771,000,000 EXPL) gradually through Nodes over **731 days** across all **100,000 Nodes**.

This gradual distribution model:

- Eliminates large one-time mints that create sell pressure
- Aligns founder incentives with long-term ecosystem health
- Maintains predictable token economics
- Ensures daily-paced release instead of lump-sum distribution

---

## Referral Bonus

If a Node was purchased via referral code, daily minting increases to **591.40 EXPL** (574.30 + 17.1). The extra **17.1 EXPL** goes directly to the referrer's address.

---

<div style="text-align: center; margin: 40px 0;">
  <figure style="display: inline-block;">
    <img src="../../assets/images/nodeBasedDistro.png" alt="EXPL Node-Based Distribution" style="max-width: 100%; height: auto;" />
    <figcaption><em>EXPL Node-Based Distribution</em></figcaption>
  </figure>
</div>

---

## Allocation Summary

=== "Standard Node (574.30 EXPL/day)"
    | Destination | Daily Amount | Share |
    |---|---|---|
    | ONE venture escrow | 171 EXPL | 29.77% |
    | ONE care escrow | 171 EXPL | 29.77% |
    | Node operator reward | 171 EXPL | 29.77% |
    | Community Grants escrow | 34.2 EXPL | 5.96% |
    | Developer Incentives escrow | 17.1 EXPL | 2.98% |
    | Founding Contributors Royalty | 10 EXPL | 1.74% |

=== "Node with Referral (591.40 EXPL/day)"
    | Destination | Daily Amount | Share |
    |---|---|---|
    | ONE venture escrow | 171 EXPL | 28.91% |
    | ONE care escrow | 171 EXPL | 28.91% |
    | Node operator reward | 171 EXPL | 28.91% |
    | Community Grants escrow | 34.2 EXPL | 5.78% |
    | Developer Incentives escrow | 17.1 EXPL | 2.89% |
    | Founding Contributors Royalty | 10 EXPL | 1.69% |
    | Referral address | 17.1 EXPL | 2.89% |

---

## Design Principles

<div class="grid cards" markdown>

-   :material-timer-sand:{ .lg .middle } **Flexible Minting**

    ---

    Operators mint daily or accumulate permissions with no expiration. No time pressure to claim.

-   :material-account-lock:{ .lg .middle } **Non-Custodial Escrows**

    ---

    All escrow allocations are automated and transparent. No intermediary holds funds.

-   :material-account-network:{ .lg .middle } **Referral Rewards**

    ---

    Nodes purchased via referral generate an additional 17.1 EXPL/day, paid directly to the referrer.

-   :material-shield-check:{ .lg .middle } **Immutable Ratios**

    ---

    Allocation percentages are fixed in the smart contract. No admin can change them post-deployment.

</div>

---

[:octicons-arrow-right-24: Next: Direct Mint Channels](direct-mint-channels.md)
