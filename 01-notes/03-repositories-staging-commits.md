# Repositories, Staging, Commits

<div align="center" markdown>

![Git and GitHub for Cybersecurity](../assets/banner.svg)

[Home](../index.md) | [Notes](README.md) | [Exercises](../02-exercises/README.md) | [Quiz Hub](../03-quiz/index.html) | [Projects](../04-projects/README.md)

</div>

## Create or Clone

Create a new local repo:

```bash
mkdir security-notes
cd security-notes
git init
```

Clone an existing repo:

```bash
git clone https://github.com/user/repo.git
```

## Stage Intentionally

Use `git status` and `git diff` before committing:

```bash
git status
git diff
git add README.md
git diff --staged
git commit -m "Add lab overview"
```

Staging intentionally is important in cybersecurity because one folder may contain both safe notes and sensitive artifacts.

## Good Commit Messages

Strong messages are short, specific, and action-oriented:

```text
Add SSH hardening checklist
Document Nmap scan methodology
Fix Sigma rule false positive note
```

Avoid vague messages such as `updates`, `stuff`, or `final`.
