# Branches and Merges

<div align="center" markdown>

![Git and GitHub for Cybersecurity](../assets/banner.svg)

[Home](../index.md) | [Notes](README.md) | [Exercises](../02-exercises/README.md) | [Quiz Hub](../03-quiz/index.html) | [Projects](../04-projects/README.md)

</div>

## Branches

A branch is a movable pointer to a line of work. Use branches to isolate changes before they become part of `main`.

```bash
git switch -c add-linux-hardening-notes
git status
```

Common branch names:

- `notes/ssh-hardening`
- `lab/nmap-baseline`
- `fix/broken-link`
- `incident/timeline-draft`

## Merge

After work is reviewed or ready:

```bash
git switch main
git pull --ff-only
git merge add-linux-hardening-notes
```

## Conflicts

A conflict happens when Git cannot automatically combine changes. Resolve it by:

1. Opening the conflicted file.
2. Choosing the correct final content.
3. Removing conflict markers.
4. Staging and committing the resolution.

> [!NOTE]
> In security documentation, preserve evidence chronology. Do not "clean up" a conflict by deleting useful investigation notes unless you are sure they are duplicated elsewhere.
