# Explorills Documentation

Official documentation for **Explorills** - a decentralized, node-based ecosystem powered by the $EXPL token.

## 🌐 Live Documentation

Visit the live documentation at: **[docs.explorills.com](https://docs.explorills.com)**

## 🛠️ Development

This documentation is built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).

### Prerequisites

- Python 3.x
- pip

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/explorills/docs.git
   cd docs
   ```

2. **Install dependencies**
   ```bash
   pip install mkdocs-material
   ```

3. **Run local development server**
   ```bash
   mkdocs serve
   ```
   
   The documentation will be available at `http://localhost:8000`

### Building

To build the static site:

```bash
mkdocs build
```

The built site will be in the `./site/` directory.

## 🤝 Contributing

We welcome contributions to improve the documentation!

### How to Contribute

1. Fork the repository
2. Create a new branch for your changes
3. Make your edits in the `docs/` directory
4. Test locally with `mkdocs serve`
5. Submit a pull request

### Content Guidelines

- Write in clear, concise language
- Use proper markdown formatting
- Include code examples where appropriate
- Keep technical accuracy as top priority
- Follow the existing documentation structure

## 📁 Repository Structure

```
docs/                  # Documentation source files
├── assets/           # Images, logos, and other assets
│   └── images/       # Image files
├── index.md          # Homepage
└── ...               # Other documentation pages
mkdocs.yml            # MkDocs configuration
.github/              # GitHub Actions workflows
```

## 🚀 Deployment

Documentation is automatically deployed to S3 + CloudFront on every push to `main` branch via GitHub Actions.

## 📝 License

This documentation is licensed under the [MIT License](LICENSE).

## 💬 Support

- **Email**: support@explorills.com
- **Discord**: [Join our community](https://discord.gg/DMSSuPPrTV)
  - For inquiries, mention Admin User `orb.8888` in General Chat or use Support Tickets

---

**Explorills** | Building the next-generation decentralized internet
