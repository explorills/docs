# EXPL.ONE Documentation

Official docs for the ONE ecosystem — a community-driven infrastructure powered by EXPL Nodes. This repo covers everything: network operations, tokenomics, distribution mechanics, and the projects we're building.

## Overview

ONE isn't another blockchain project making empty promises. We're building decentralized infrastructure that actually works, powered by community-operated EXPL Nodes. No venture capital. No profit-extraction. Just transparent, community-owned technology where Node operators mint EXPL tokens, secure the network, and share in the ecosystem's success.

**Live Documentation:** [docs.expl.one](https://docs.expl.one)

## Documentation Structure

The docs are organized into focused sections:

- **2026 Roadmap:** Development timeline and launch milestones
- **EXPL Nodes:** How the infrastructure works — operations, escrow, pricing, purchase
- **ONE Projects:** Our ecosystem projects (pump, network, world, and more)
- **TNO Cards:** Transitional NFT offering before ERC20 launch
- **Tokenomics:** EXPL supply model and distribution mechanics
- **Distribution Framework:** How EXPL flows through Nodes and direct channels
- **Get Involved:** Ways to contribute, collaborate, and build with us

## Development

This documentation runs on [MkDocs](https://www.mkdocs.org/) with the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme.

### Requirements

- Python 3.8+
- pip

### Local Development

Clone and install:

```bash
git clone https://github.com/explorills/docs.git
cd docs
pip install mkdocs-material
```

Run the dev server:

```bash
mkdocs serve
```

The site will be live at `http://127.0.0.1:8000`.

### Building

Generate static files:

```bash
mkdocs build
```

Output lands in `./site/`.

## Contributing

We welcome contributions that improve clarity, accuracy, and completeness. Here's how:

1. Fork this repo
2. Create a feature branch: `git checkout -b improve-docs`
3. Edit files in `docs/` directory
4. Test locally: `mkdocs serve`
5. Commit with clear messages
6. Open a pull request

### Writing Guidelines

- **Be accurate** — verify all technical details
- **Be clear** — avoid jargon when plain language works
- **Be consistent** — follow existing patterns and structure
- **Be helpful** — include examples and real use cases
- **Check your links** — make sure everything works
- **Respect the hierarchy** — don't break navigation structure

## Repository Structure

```
docs/                          # Source markdown files
├── index.md                   # Homepage
├── roadmap-2026.md            # Development roadmap
├── nodes/                     # Node documentation
├── tno-cards/                 # TNO Cards docs
├── tokenomics/                # Token economics
├── distribution-framework/    # Distribution mechanics
├── get-involved/              # Contribution guides
├── additional-information/    # Supplementary info
└── assets/                    # Images and static files
mkdocs.yml                     # MkDocs config
overrides/                     # Theme customization
site/                          # Build output (generated)
```

## Deployment

Docs auto-deploy via GitHub Actions on every push to `main`. The pipeline publishes to S3 with CloudFront distribution.

## License

See [LICENSE](LICENSE) for details.

This documentation is open source and available under the [MIT License](LICENSE).

## Contact

- **Website:** [EXPL.ONE](https://EXPL.ONE)
- **Email:** support@expl.one
- **Discord:** [discord.com/invite/RetTCVq7tJ](https://discord.com/invite/RetTCVq7tJ)
- **GitHub:** [github.com/explorills](https://github.com/explorills)

For technical support or documentation inquiries, please use the Discord server or email support.
