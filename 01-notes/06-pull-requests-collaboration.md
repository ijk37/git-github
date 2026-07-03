# Pull Requests and Collaboration

<div align="center" markdown>

![Git and GitHub for Cybersecurity](../assets/banner.svg)

[Home](../index.md) | [Notes](README.md) | [Exercises](../02-exercises/README.md) | [Quiz Hub](../03-quiz/index.html) | [Projects](../04-projects/README.md)

</div>

## Pull Request Purpose

A pull request asks to merge one branch into another. It gives collaborators a place to review diffs, discuss risks, and run checks.

Security teams use pull requests for:

- Detection rule reviews.
- Infrastructure-as-code changes.
- Incident report edits.
- Script and tooling updates.
- Documentation changes that need peer review.

## Review Checklist

Before opening a pull request:

```bash
git status
git diff main...HEAD
git log --oneline main..HEAD
```

Reviewers should ask:

- Does the change match the stated purpose?
- Are secrets, internal hostnames, or sensitive evidence exposed?
- Are commands reproducible?
- Are assumptions documented?

## Issues

GitHub issues are useful for tracking tasks, bugs, research questions, and lab TODOs. Keep issue titles specific:

```text
Document SSH key setup for Windows
Add .gitignore pattern for packet captures
Review secret scanning options
```
