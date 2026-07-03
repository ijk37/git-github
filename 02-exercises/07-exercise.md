# Exercise 07: Secret Prevention

## Goal

Prevent unsafe files from entering a repository.

## Tasks

1. Create a `.gitignore`.
2. Add patterns for `.env`, `*.key`, `*.pem`, `*.pcap`, and `evidence/`.
3. Create example files that match those patterns.
4. Run `git status`.
5. Confirm ignored files do not appear as untracked changes.

## Reflection

- What should you do if a token was already committed?
- Why is `.gitignore` not enough after a leak?

