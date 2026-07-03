# What Git Tracks

<div align="center" markdown>

![Git and GitHub for Cybersecurity](../assets/banner.svg)

[Home](../index.md) | [Notes](README.md) | [Exercises](../02-exercises/README.md) | [Quiz Hub](../03-quiz/index.html) | [Projects](../04-projects/README.md)

</div>

## Core Idea

Git is a local version control system. It records snapshots of files over time so you can understand what changed, when it changed, and why.

For cybersecurity learning, Git is useful because it gives you an audit trail for notes, scripts, detections, writeups, lab configs, and project documentation.

## Working Tree, Staging Area, Repository

| Area | Meaning | Common Command |
| --- | --- | --- |
| Working tree | Files you are editing now | `git status` |
| Staging area | Changes selected for the next snapshot | `git add` |
| Repository | Saved commits and history | `git log` |

The daily loop is:

```bash
git status
git add file.md
git commit -m "Describe the change"
```

## Why It Matters in Security

Security work depends on evidence. Git helps you keep a clean record of:

- Lab steps and commands you ran.
- Detection rules and why they changed.
- Incident notes without overwriting earlier observations.
- Scripts used for scanning, parsing, or reporting.

> [!TIP]
> A good commit message should explain the reason for the change, not only the file name.
