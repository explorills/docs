# <span style="color: #ffffff;">ONE</span> <span style="color: #92400e;">id</span>

<div style="text-align: center; margin: 30px 0;">
  <img src="/assets/images/logo.png" alt="EXPL.ONE Logo" width="125" />
  <p><span style="color: #ffffff;">ONE</span> <span style="color: #92400e; font-size: 1.5em; font-weight: 600;">id</span></p>
  <p><strong>Decentralized Biometric Identity for the ONE Ecosystem</strong></p>
</div>

**ONE id** is a biometric identity service that allows users to verify their identity once through client-side facial recognition and associate it with one or more wallet addresses. The resulting credential is reusable across all applications in the ONE ecosystem.

**Platform**: [id.expl.one](https://id.expl.one){:target="_blank"}

---

## Overview

ONE id addresses a common problem in decentralized applications: proving that a user is a unique human without relying on centralized identity providers. It combines browser-based biometric enrollment with on-chain wallet signature verification to produce a single reusable identity credential.

One verification. Every application. No centralized authority.

---

## Core Features

### Biometric Enrollment

- Client-side facial recognition powered by [face-api.js](https://github.com/justadudewhohacks/face-api.js) (TensorFlow.js-based)
- Generates a 128-dimensional mathematical descriptor entirely in the browser
- No raw image or video data is transmitted or stored
- Three-point consecutive detection for reliable verification

### Wallet Association

- Connect one or more EVM-compatible wallets via [RainbowKit](https://www.rainbowkit.com/)
- Supported chains: Ethereum, Polygon, Arbitrum, Optimism, Base
- Cryptographic signature binds wallet addresses to the biometric descriptor
- Multi-wallet support under a single identity

### Unified Access

- A single verified identity propagates across all ONE ecosystem applications
- Authenticate once, operate everywhere
- Sybil-resistant identity protocol prevents duplicate accounts

---

## How It Works

1. **Scan**: The client captures a facial scan using your device camera. A mathematical descriptor is generated entirely in the browser — no raw biometric data leaves your device.
2. **Sign**: Connect one or more EVM-compatible wallets and sign a verification message. The signature cryptographically binds your wallets to your biometric descriptor.
3. **Access**: Your verified identity propagates across the ONE ecosystem. One credential grants access to every application.

---

## Privacy Model

ONE id implements a privacy-first architecture:

- **Client-side processing** — All facial recognition runs locally in the browser
- **Encrypted descriptors** — Only an encrypted mathematical representation is stored server-side
- **Zero raw data retention** — No face images, video frames, or raw biometric data are retained or transmitted
- **Non-reversible** — The stored descriptor cannot be reversed to reconstruct a facial image
- **Sovereign identity** — Users control their own biometric data

---

## Technology Stack

ONE id is built with modern web technologies for optimal performance:

- **Frontend**: React 19, TypeScript
- **Build Tool**: Bun, Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Wallet Integration**: wagmi + viem + RainbowKit
- **Biometrics**: face-api.js (TensorFlow.js-based)
- **Animations**: Framer Motion

---

## Use Cases

ONE id enables a range of identity-dependent features across the ecosystem:

- **Sybil resistance** — Prevent duplicate accounts and bot activity across ONE applications
- **Cross-application identity** — A single verification grants access to ONE pump, ONE world, ONE network, and all future projects
- **Trustless verification** — Prove uniqueness without revealing personal information
- **Multi-wallet management** — Associate multiple wallet addresses under one verified identity

---

## Roadmap Status

**Current Status**: Pre-release

The landing page is deployed at [id.expl.one](https://id.expl.one){:target="_blank"} with verification currently disabled. Backend integration, biometric enrollment, and wallet association are implemented but not yet publicly accessible.

[:octicons-arrow-right-24: View Complete 2026 Roadmap](../roadmap-2026.md)

---

## Get Started

Visit [id.expl.one](https://id.expl.one){:target="_blank"} to learn more about ONE id and stay updated on the verification launch.

---

## Additional Resources

- **GitHub**: [ONE id Repository](https://github.com/explorills/one-id){:target="_blank"}
- **Support**: [support@expl.one](mailto:support@expl.one)
- **Community**: [Discord](https://discord.com/invite/RetTCVq7tJ){:target="_blank"}

---

!!! info "Powered by EXPL Nodes"
    ONE id is secured and operated through the ONE ecosystem infrastructure, powered by EXPL Nodes.

    [:octicons-arrow-right-24: Learn About EXPL Nodes](../nodes/introduction.md)
