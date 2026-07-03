# GitHub Remotes and Auth

<div align="center" markdown>

![Git and GitHub for Cybersecurity](../assets/banner.svg)

[Home](../index.md) | [Notes](README.md) | [Exercises](../02-exercises/README.md) | [Quiz Hub](../03-quiz/index.html) | [Projects](../04-projects/README.md)

</div>

## Remote Basics

A remote is a named link to another copy of the repository, usually on GitHub.

```bash
git remote -v
git remote add origin https://github.com/ijk37/git-github.git
git push -u origin main
```

After the upstream is set, normal pushes are simple:

```bash
git push
git pull --ff-only
```

## HTTPS and SSH

| Method | Notes |
| --- | --- |
| HTTPS | Common, works well with credential helpers and tokens |
| SSH | Useful for frequent GitHub use and key-based authentication |

## Authentication Habits

- Never paste a personal access token into a repo file.
- Treat tokens like passwords.
- Give tokens the smallest permission scope possible.
- Rotate tokens if a machine is lost, shared, or compromised.
