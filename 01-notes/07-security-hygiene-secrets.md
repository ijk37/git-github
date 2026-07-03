# Security Hygiene and Secrets

<div align="center" markdown>

![Git and GitHub for Cybersecurity](../assets/banner.svg)

[Home](../index.md) | [Notes](README.md) | [Exercises](../02-exercises/README.md) | [Quiz Hub](../03-quiz/index.html) | [Projects](../04-projects/README.md)

</div>

## What Not to Commit

Do not commit:

- API keys, tokens, passwords, private keys, or recovery codes.
- `.env` files with real credentials.
- Packet captures from sensitive networks.
- Client data, internal IP lists, or vulnerable target details.
- Malware samples or exploit code in a public repo.

## Use `.gitignore`

Create ignore rules early:

```gitignore
.env
*.key
*.pem
*.pcap
*.pcapng
reports/private/
evidence/
```

`.gitignore` prevents untracked files from being added accidentally. It does not remove secrets already committed.

## If a Secret Was Committed

1. Revoke or rotate the secret immediately.
2. Remove the secret from the current files.
3. Decide whether history rewrite is needed.
4. Notify anyone who may be affected.
5. Add prevention rules and review the process.

> [!WARNING]
> Deleting a file in a later commit does not erase it from earlier Git history.
