# EXPL.ONE Documentation

Official documentation repository for the ONE ecosystem, powered by EXPL Nodes and the EXPL token. This repository contains comprehensive technical documentation covering the network infrastructure, EXPL Nodes operations, tokenomics model, distribution framework, and ONE ecosystem projects.

## Overview

The ONE ecosystem is built on a foundation of EXPL Nodes that enable community-driven network operations and automated token distribution. EXPL Nodes are the living brand and core infrastructure that power all ONE ecosystem projects. The ecosystem establishes a transparent, incentive-driven infrastructure where participants operate nodes, secure the network, mint EXPL through immutable smart contracts, and contribute to a unified decentralized economy.

**Live Documentation:** [docs.expl.one](https://docs.expl.one)

## Documentation Structure

The documentation is organized into the following sections:

- **2026 Roadmap:** Development milestones and launch timeline
- **EXPL Nodes:** The foundation of the ONE ecosystem - operations, escrow, pricing, and purchase
- **ONE Projects:** ONE pump, ONE network, ONE world, and ecosystem projects overview
- **TNO Cards:** Tokenized NFT Offering (transitional phase)
- **Tokenomics:** EXPL ERC20 token supply, allocation, and distribution model
- **Distribution Framework:** EXPL Nodes-based distribution and direct mint channels
- **Get Involved:** Contribution guidelines, collaboration opportunities, and venture programs

## Development

This documentation is built with [MkDocs](https://www.mkdocs.org/) using the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme.

### Requirements

- Python 3.8 or higher
- pip package manager

### Local Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/explorills/docs.git
cd docs
pip install mkdocs-material
```

Start the development server:

```bash
mkdocs serve
```

### Building

Generate the static site:

```bash
mkdocs build
```

Output files are created in the `./site/` directory.

## Contributing

Contributions to improve documentation accuracy, clarity, and completeness are welcome. Please follow these guidelines:

1. Fork this repository
2. Create a feature branch (`git checkout -b improve-documentation`)
3. Edit documentation files in the `docs/` directory
4. Test changes locally using `mkdocs serve`
5. Commit with clear, descriptive messages
6. Submit a pull request with a summary of changes

### Writing Guidelines

- Maintain technical accuracy and verify all information
- Use clear, precise language appropriate for technical documentation
- Follow existing markdown formatting and structural patterns
- Include relevant examples and use cases where applicable
- Ensure all links and references are functional
- Preserve the existing navigation hierarchy

## Repository Structure

```
docs/                          # Source documentation files
├── index.md                   # Documentation homepage
├── core-objectives.md         # Development roadmap
├── nodes/                     # Node documentation
├── tno-cards/                 # TNO Cards documentation
├── tokenomics/                # Tokenomics documentation
├── distribution-framework/    # Distribution mechanisms
├── get-involved/              # Contribution and collaboration
├── additional-information/    # Supplementary resources
└── assets/                    # Images and static resources
mkdocs.yml                     # MkDocs configuration
overrides/                     # Theme customization
site/                          # Generated static site (build output)
```

## Deployment

Documentation is automatically built and deployed via GitHub Actions on each push to the `main` branch. The deployment pipeline publishes to S3 with CloudFront distribution.

## License

This documentation is open source and available under the [MIT License](LICENSE).

## Contact

- **Website:** [explorills.com](https://explorills.com)
- **Email:** support@explorills.com
- **Discord:** [discord.gg/DMSSuPPrTV](https://discord.gg/DMSSuPPrTV)
- **GitHub:** [github.com/explorills](https://github.com/explorills)

For technical support or documentation inquiries, please use the Discord server or email support.
