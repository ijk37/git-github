# Install and Configure

<div align="center" markdown>

![Git and GitHub for Cybersecurity](../assets/banner.svg)

[Home](../index.md) | [Notes](README.md) | [Exercises](../02-exercises/README.md) | [Quiz Hub](../03-quiz/index.html) | [Projects](../04-projects/README.md)

</div>

## First-time Setup

After installing Git, configure your identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
```

Check the result:

```bash
git config --global --list
```

## Useful Defaults

```bash
git config --global core.autocrlf true
git config --global pull.ff only
git config --global fetch.prune true
```

| Setting | Why It Helps |
| --- | --- |
| `init.defaultBranch main` | Creates new repos with a modern default branch |
| `pull.ff only` | Avoids accidental merge commits when pulling |
| `fetch.prune true` | Cleans up remote branch references that were deleted |

## Security-minded Setup

- Use an email address you are comfortable showing publicly.
- Do not store tokens in command history or repo files.
- Use GitHub authentication methods recommended by your organization.
- Keep one identity for school/public work and another for employer/client work if needed.
