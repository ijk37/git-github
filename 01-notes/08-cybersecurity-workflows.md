# Cybersecurity Workflows

<div align="center" markdown>

![Git and GitHub for Cybersecurity](../assets/banner.svg)

[Home](../index.md) | [Notes](README.md) | [Exercises](../02-exercises/README.md) | [Quiz Hub](../03-quiz/index.html) | [Projects](../04-projects/README.md)

</div>

## Lab Journal Workflow

Use Git to record what you learned:

```text
labs/
  nmap-baseline.md
  linux-hardening.md
  wireshark-dns.md
scripts/
  parse-auth-log.py
notes/
  commands.md
```

Commit each meaningful checkpoint:

```bash
git add labs/nmap-baseline.md
git commit -m "Document Nmap baseline scan"
```

## Incident Notes Workflow

For mock incidents, use branches:

```bash
git switch -c incident/phishing-timeline
```

Track:

- Timeline.
- Indicators.
- Evidence sources.
- Actions taken.
- Open questions.

## Portfolio Workflow

Public GitHub work should show skill without exposing unsafe material:

- Publish sanitized labs and writeups.
- Explain methodology and lessons learned.
- Link to safe screenshots or diagrams.
- Keep raw sensitive data private.

GitHub can become a portfolio, but security judgment matters more than volume.
