# <span style="color: #ffffff;">ONE</span> <span style="color: #06b6d4;">deal</span>

<div style="text-align: center; margin: 30px 0;">
  <img src="/assets/images/logo.png" alt="EXPL.ONE Logo" width="125" />
  <p><span style="color: #ffffff;">ONE</span> <span style="color: #06b6d4; font-size: 1.5em; font-weight: 600;">deal</span></p>
  <p><strong>EVM-Compatible NFT Marketplace</strong></p>
</div>

**ONE deal** is the NFT marketplace within the ONE ecosystem. It provides a straightforward interface for buying, selling, sending, and receiving digital assets across EVM-compatible networks.

**Platform**: [deal.expl.one](https://deal.expl.one){:target="_blank"}

---

## Overview

ONE deal serves as the primary marketplace for digital asset exchange within the ONE ecosystem. The platform supports standard NFT operations — listing, purchasing, and peer-to-peer transfers — without the complexity of auction or bidding mechanics. Users authenticate through ONE id, maintaining a single identity across all ecosystem projects.

Key capabilities:

- **Buy / Sell** — List and purchase NFTs with fixed-price transactions
- **Send / Receive** — Transfer assets directly between wallets from your profile
- **Collection browsing** — Explore and discover collections with filtering and sorting
- **Profile management** — View holdings, track activity, and manage assets tied to your address
- **Cross-ecosystem identity** — Authentication handled by ONE id; one account, all platforms

---

## Core Philosophy

Like every project in the ONE ecosystem, ONE deal is built on three principles:

- **Open Source** — Every line of code is publicly available on GitHub
- **Community-Driven** — Built by and for the community
- **Fair Revenue Model** — 45% to Node owners, 45% to Creators, 10% to founders

---

## Technology Stack

ONE deal is built with modern web technologies for optimal performance:

- **Frontend**: React 19, TypeScript
- **Build Tool**: Bun, Vite
- **Styling**: Tailwind CSS
- **Icons**: Phosphor Icons
- **Animations**: Framer Motion
- **Authentication**: @explorills/one-id-auth (ONE id integration)
- **Wallet Support**: wagmi, viem, WalletConnect
- **Deployment**: AWS S3 + CloudFront

---

## Architecture

ONE deal follows the standard ONE ecosystem frontend architecture:

```
one-deal/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── layout/       # Header, Footer, Layout
│   │   ├── nft/          # NFT cards, grids
│   │   └── ui/           # Buttons, inputs, shared primitives
│   ├── pages/            # Route-level page components
│   ├── data/             # Mock data (pre-backend)
│   ├── lib/              # Utilities, constants
│   └── types/            # TypeScript type definitions
├── .github/workflows/    # CI/CD pipeline
└── package.json
```

Authentication is fully delegated to the `@explorills/one-id-auth` package. ONE deal does not implement any wallet connection or session logic directly — it wraps the application in `OneIdProvider` and renders the `OneIdAuth` component in the header.

---

## Integration with ONE id

ONE deal uses ONE id as its authentication layer. Users connect their wallet through the ONE id widget, which handles:

- Wallet discovery (EIP-6963 browser wallets)
- WalletConnect for mobile wallets
- Signature-based authentication
- User registration and session management

No additional wallet configuration is required in ONE deal. The `@explorills/one-id-auth` package manages all connection logic internally.

---

## Roadmap Status

**Current Status**: In Progress

ONE deal is currently in active development. The marketplace interface is deployed at [deal.expl.one](https://deal.expl.one){:target="_blank"} with core buy/sell and send/receive functionality. Backend integration for on-chain transactions is planned for a subsequent phase.

[:octicons-arrow-right-24: View Complete 2026 Roadmap](../roadmap-2026.md)

---

## Get Started

Visit [deal.expl.one](https://deal.expl.one){:target="_blank"} to explore the marketplace interface and connect your wallet through ONE id.

---

## Additional Resources

- **GitHub**: [ONE deal Repository](https://github.com/explorills/one-deal){:target="_blank"}
- **Support**: [support@expl.one](mailto:support@expl.one)
- **Community**: [Discord](https://discord.com/invite/RetTCVq7tJ){:target="_blank"}

---

!!! info "Powered by EXPL Nodes"
    ONE deal is secured and operated through the ONE ecosystem infrastructure, powered by EXPL Nodes.

    [:octicons-arrow-right-24: Learn About EXPL Nodes](../nodes/introduction.md)
