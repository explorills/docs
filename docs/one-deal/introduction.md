# <span style="color: #ffffff;">ONE</span> <span style="color: #06b6d4;">deal</span>

<div style="text-align: center; margin: 30px 0;">
  <img src="/assets/images/logo.png" alt="EXPL.ONE Logo" width="125" />
  <p><span style="color: #ffffff;">ONE</span> <span style="color: #06b6d4; font-size: 1.5em; font-weight: 600;">deal</span></p>
  <p><strong>NFT Marketplace</strong></p>
</div>

**ONE deal** is the NFT marketplace for the ONE ecosystem. Buy, sell, send, and receive digital assets across EVM-compatible networks through a fixed-price model — no auctions, no bidding.

**Platform**: [deal.expl.one](https://deal.expl.one){:target="_blank"}

---

## Overview

ONE deal handles digital asset exchange within the ecosystem. The interface supports listing, purchasing, and peer-to-peer transfers. Users authenticate through ONE id, so a single identity works across all ONE projects.

Key capabilities:

- **Buy / Sell** — Fixed-price NFT transactions
- **Send / Receive** — Direct wallet-to-wallet transfers from your profile
- **Collection browsing** — Explore collections with filtering and sorting
- **Profile management** — View holdings, track activity, manage assets
- **Cross-ecosystem identity** — ONE id authentication; one account, all platforms

---

## Technology Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Bun, Vite
- **Styling**: Tailwind CSS
- **Icons**: Phosphor Icons
- **Animations**: Framer Motion
- **Routing**: React Router
- **Notifications**: Sonner
- **Authentication**: ONE id via `@explorills/one-ecosystem-ui`
- **Wallet**: wagmi, viem, Reown AppKit

---

## Architecture

```
one-deal/
├── src/
│   ├── components/
│   │   ├── layout/       # Page layout shell
│   │   ├── nft/          # NFT cards, grids
│   │   ├── search/       # Search and filtering
│   │   └── ui/           # Shared primitives
│   ├── pages/            # Route-level page components
│   ├── lib/              # Utilities, constants, contracts
│   └── styles/           # Global styles
├── .github/workflows/    # CI/CD pipeline
└── package.json
```

Authentication is delegated to the shared `@explorills/one-ecosystem-ui` package. ONE deal wraps the application in `OneIdProvider` and does not implement wallet connection or session logic directly.

---

## Integration with ONE id

ONE deal uses ONE id as its authentication layer. Users connect their wallet through the ecosystem-wide ONE id widget, which handles:

- Wallet discovery via Reown AppKit
- Signature-based authentication
- User registration and session management

No additional wallet configuration is required in ONE deal.

---

## Roadmap Status

**Current Status**: In Progress

The marketplace interface is deployed at [deal.expl.one](https://deal.expl.one){:target="_blank"} with the frontend operational. Backend integration for on-chain transactions is planned for a subsequent phase.

[:octicons-arrow-right-24: View Complete 2026 Roadmap](../roadmap-2026.md)

---

## Additional Resources

- **GitHub**: [ONE deal Repository](https://github.com/explorills/one-deal){:target="_blank"}
- **Support**: [support@expl.one](mailto:support@expl.one)
- **Community**: [Discord](https://discord.com/invite/RetTCVq7tJ){:target="_blank"}

---

!!! info "Powered by EXPL Nodes"
    ONE deal runs on infrastructure operated by EXPL Nodes.

    [:octicons-arrow-right-24: Learn About EXPL Nodes](../nodes/introduction.md)
