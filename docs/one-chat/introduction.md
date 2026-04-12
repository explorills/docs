# <span style="color: #ffffff;">ONE</span> <span style="color: #dfdfdf;">chat</span>

<div style="text-align: center; margin: 30px 0;">
  <img src="/assets/images/logo.png" alt="EXPL.ONE Logo" width="125" />
  <p><span style="color: #ffffff;">ONE</span> <span style="color: #dfdfdf; font-size: 1.5em; font-weight: 600;">chat</span></p>
  <p><strong>Ecosystem-wide Real-time Chat</strong></p>
</div>

**ONE chat** is the real-time communication layer for the ONE ecosystem. A WebSocket-based chat system embedded across all ONE projects, so authenticated users can talk without leaving the platform they are on.

**Platform**: [chat.expl.one](https://chat.expl.one){:target="_blank"}

---

## Overview

ONE chat provides multi-channel real-time messaging accessible from any ONE ecosystem project. Users authenticate through ONE id and can send messages, reply, react, mention other users, and track unread state — all in real time.

Key capabilities:

- **Real-time messaging** — WebSocket-based delivery across all connected clients
- **Multiple channels** — Separate channels for general discussion, support, and more
- **Message editing and deletion** — Edit or remove your own messages after sending
- **Reactions** — Emoji reactions on any message, with points credited to the author via ONE loot
- **Replies** — Reply to specific messages with inline previews
- **@mentions** — Mention users with autocomplete search
- **Typing indicators** — See when other users are composing messages
- **Unread tracking** — Per-user, per-channel read state with unread counts and mention notifications
- **Message history** — Cursor-based pagination for scrolling through past messages
- **Discord bridge** — Messages can bridge to Discord channels

---

## Technology Stack

### Backend

- **Runtime**: Bun native server with WebSocket pub/sub
- **Database**: SQLite (WAL mode) for message persistence
- **Authentication**: ONE id token validation (internal HTTP)
- **IDs**: ULID for time-sortable unique message identifiers
- **Integrations**: ONE loot (reaction rewards), ONE notification (ecosystem feed), ONE agent notifier (Discord DMs)

### Frontend (Landing)

- **Framework**: React 19, TypeScript
- **Build Tool**: Bun, Vite
- **Styling**: Tailwind CSS
- **Icons**: Phosphor Icons
- **Authentication**: ONE id via `@explorills/one-ecosystem-ui`

---

## Integration with ONE id

ONE chat uses ONE id as its sole authentication layer. Users must be authenticated through ONE id to connect to the chat WebSocket or access message history. Token validation is handled server-side with a short-lived cache for performance.

No separate login or registration is required — any user with a ONE id account can participate in chat across all ecosystem projects.

---

## Roadmap Status

**Current Status**: In Progress

The backend is deployed and operational. The landing page and embedded chat widget are in active development.

[:octicons-arrow-right-24: View Complete 2026 Roadmap](../roadmap-2026.md)

---

## Additional Resources

- **GitHub**: [ONE chat Repository](https://github.com/explorills/one-chat){:target="_blank"}
- **Support**: [support@expl.one](mailto:support@expl.one)
- **Community**: [Discord](https://discord.com/invite/RetTCVq7tJ){:target="_blank"}

---

!!! info "Powered by EXPL Nodes"
    ONE chat runs on infrastructure operated by EXPL Nodes.

    [:octicons-arrow-right-24: Learn About EXPL Nodes](../nodes/introduction.md)
