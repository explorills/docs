# <span style="color: #ffffff;">ONE</span> <span style="color: #dfdfdf;">chat</span>

<div style="text-align: center; margin: 30px 0;">
  <img src="/assets/images/logo.png" alt="EXPL.ONE Logo" width="125" />
  <p><span style="color: #ffffff;">ONE</span> <span style="color: #dfdfdf; font-size: 1.5em; font-weight: 600;">chat</span></p>
  <p><strong>Ecosystem-wide Real-time Chat</strong></p>
</div>

**ONE chat** is the real-time communication layer for the ONE ecosystem. A WebSocket-based chat system embedded across all ONE projects, enabling authenticated users to communicate without leaving the platform they are using.

**Platform**: [chat.expl.one](https://chat.expl.one){:target="_blank"}

---

## Overview

ONE chat provides a single global chat channel accessible from any ONE ecosystem project. Users authenticate through ONE id and can send messages, reply to others, react with emoji, mention users, and track unread messages — all in real time.

Key capabilities:

- **Real-time messaging** — WebSocket-based instant message delivery across all connected clients
- **Message editing & deletion** — Edit or remove your own messages after sending
- **Reactions** — Add and remove emoji reactions on any message
- **Replies** — Reply to specific messages with inline previews
- **@mentions** — Mention users with autocomplete search
- **Typing indicators** — See when other users are composing messages
- **Unread tracking** — Per-user read state with unread count and mention notifications
- **Message history** — Cursor-based pagination for scrolling through past messages

---

## Core Philosophy

Like every project in the ONE ecosystem, ONE chat is built on three principles:

- **Open Source** — Every line of code is publicly available on GitHub
- **Community-Driven** — Built by and for the community
- **Fair Revenue Model** — 45% to Node owners, 45% to Creators, 10% to founders

---

## Technology Stack

### Backend

- **Runtime**: Bun native server with WebSocket pub/sub
- **Database**: SQLite (WAL mode) for message persistence
- **Authentication**: ONE id token validation (internal HTTP)
- **IDs**: ULID for time-sortable unique message identifiers

### Frontend

- **Framework**: React 19, TypeScript
- **Build Tool**: Bun, Vite
- **Styling**: Tailwind CSS
- **Deployment**: AWS S3 + CloudFront

---

## Integration with ONE id

ONE chat uses ONE id as its sole authentication layer. Users must be authenticated through ONE id to connect to the chat WebSocket or access message history. Token validation is handled server-side with a short-lived cache for performance.

No separate login or registration is required — any user with a ONE id account can participate in chat across all ecosystem projects.

---

## Roadmap Status

**Current Status**: In Progress

ONE chat backend is deployed and operational. The landing page and embedded chat widget are in active development.

[:octicons-arrow-right-24: View Complete 2026 Roadmap](../roadmap-2026.md)

---

## Get Started

Visit [chat.expl.one](https://chat.expl.one){:target="_blank"} to access ONE chat.

---

## Additional Resources

- **GitHub**: [ONE chat Repository](https://github.com/explorills/one-chat-landing){:target="_blank"}
- **Support**: [support@expl.one](mailto:support@expl.one)
- **Community**: [Discord](https://discord.com/invite/RetTCVq7tJ){:target="_blank"}

---

!!! info "Powered by EXPL Nodes"
    ONE chat is secured and operated through the ONE ecosystem infrastructure, powered by EXPL Nodes.

    [:octicons-arrow-right-24: Learn About EXPL Nodes](../nodes/introduction.md)
