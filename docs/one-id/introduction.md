# <span style="color: #ffffff;">ONE</span> <span style="color: #92400e;">id</span>

<div style="text-align: center; margin: 30px 0;">
  <img src="/assets/images/logo.png" alt="EXPL.ONE Logo" width="125" />
  <p><span style="color: #ffffff;">ONE</span> <span style="color: #92400e; font-size: 1.5em; font-weight: 600;">id</span></p>
  <p><strong>Decentralized Biometric Identity for the ONE Ecosystem</strong></p>
</div>

**ONE id** is a biometric identity service. Verify once through client-side facial recognition, associate one or more wallet addresses, and use the resulting credential across every application in the ONE ecosystem.

**Platform**: [id.expl.one](https://id.expl.one){:target="_blank"}

---

## Overview

ONE id solves a core problem in decentralized applications: proving that a user is a unique human without relying on centralized identity providers. It combines browser-based biometric enrollment with on-chain wallet signature verification to produce a single reusable credential.

One verification. Every application. No centralized authority.

---

## How It Works

1. **Scan** — Your device camera captures a facial scan. A 128-dimensional mathematical descriptor is generated entirely in the browser. No raw biometric data leaves your device.
2. **Sign** — Connect one or more EVM-compatible wallets and sign a verification message. The signature cryptographically binds your wallets to your biometric descriptor.
3. **Access** — Your verified identity propagates across the ONE ecosystem. One credential grants access to every application.

---

## Core Features

### Biometric Enrollment

- Client-side facial recognition powered by [face-api.js](https://github.com/justadudewhohacks/face-api.js) (TensorFlow.js-based)
- 128-dimensional mathematical descriptor generated entirely in the browser
- No raw image or video data transmitted or stored
- Three-point consecutive detection for reliable verification

### Wallet Association

- Connect one or more EVM-compatible wallets via [RainbowKit](https://www.rainbowkit.com/)
- Cryptographic signature binds wallet addresses to the biometric descriptor
- Multi-wallet support under a single identity

### Unified Access

- Single verified identity across all ONE ecosystem applications
- Authenticate once, operate everywhere
- Sybil-resistant protocol prevents duplicate accounts

---

## Privacy Model

ONE id implements a privacy-first architecture:

- **Client-side processing** — All facial recognition runs locally in the browser
- **Encrypted descriptors** — Only an encrypted mathematical representation is stored server-side
- **Zero raw data retention** — No face images, video frames, or raw biometric data are retained or transmitted
- **Non-reversible** — The stored descriptor cannot be reversed to reconstruct a facial image
- **Sovereign identity** — Users control their own biometric data

---

## Use Cases

- **Sybil resistance** — Prevent duplicate accounts and bot activity across ONE applications
- **Cross-application identity** — One verification grants access to ONE pump, ONE deal, ONE chat, ONE world, ONE network, and all future projects
- **Trustless verification** — Prove uniqueness without revealing personal information
- **Multi-wallet management** — Associate multiple wallet addresses under one verified identity

---

## Core Philosophy

Like every project in the ONE ecosystem, ONE id is built on three principles:

- **Open Source** — Every line of code is publicly available on GitHub
- **Community-Driven** — Built by and for the community
- **Fair Revenue Model** — 45% to ONE Creators, 45% to EXPL Nodes, 10% to the Foundation

---

## Roadmap Status

**Current Status**: Pre-release

The landing page is deployed at [id.expl.one](https://id.expl.one){:target="_blank"} with verification currently disabled. Backend integration, biometric enrollment, and wallet association are implemented but not yet publicly accessible.

[:octicons-arrow-right-24: View Complete 2026 Roadmap](../roadmap-2026.md)

---

## Get Started

Visit [id.expl.one](https://id.expl.one){:target="_blank"} for more about ONE id and to stay updated on the verification launch.

---

## Additional Resources

- **GitHub**: [ONE id Repository](https://github.com/explorills/one-id){:target="_blank"}
- **Support**: [support@expl.one](mailto:support@expl.one)
- **Community**: [Discord](https://discord.com/invite/RetTCVq7tJ){:target="_blank"}

---

!!! info "Powered by EXPL Nodes"
    ONE id is secured and operated through the ONE ecosystem infrastructure, powered by EXPL Nodes.

    [:octicons-arrow-right-24: Learn About EXPL Nodes](../nodes/introduction.md)
