#!/usr/bin/env python3
"""Make Markdown navigation safe for the root-based MkDocs build."""
import glob
import os
import re

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(REPO)

BANNER_LINKED = re.compile(r'<a href="[^"]*"><img src="([^"]*banner\.svg)" alt="([^"]*)"[^>]*></a>')
BANNER_PLAIN = re.compile(r'<img src="([^"]*banner\.svg)" alt="([^"]*)"[^>]*>')
BADGE_LINK = re.compile(r'<a href="([^"]+)"><img src="([^"]+)" alt="([^"]*)"></a>')
TEXT_LINK = re.compile(r'<a href="([^"]+)">([^<]+)</a>')

LIVE_SITE_BADGE = (
    "[![View the live site - ijk37.com]"
    "(https://img.shields.io/badge/View_the_Live_Site-IJK37.COM-0FBF3E"
    "?style=for-the-badge&labelColor=063F24)]"
    "(https://ijk37.com/git-github/)"
)


def ensure_live_site_badge(text: str) -> str:
    if "View_the_Live_Site" in text:
        return text
    lines = text.split("\n")
    out = []
    inserted = False
    for line in lines:
        out.append(line)
        if not inserted and "banner.svg" in line:
            out.append("")
            out.append(LIVE_SITE_BADGE)
            inserted = True
    return "\n".join(out) if inserted else text


def convert_nav(text: str) -> str:
    text = BANNER_LINKED.sub(r"![\2](\1)", text)
    text = BANNER_PLAIN.sub(r"![\2](\1)", text)
    text = BADGE_LINK.sub(r"[![\3](\2)](\1)", text)
    text = TEXT_LINK.sub(r"[\2](\1)", text)
    text = text.replace('<div align="center">', '<div align="center" markdown>')
    return text


def fix_file(path: str) -> bool:
    with open(path, encoding="utf-8") as handle:
        text = handle.read()
    original = text
    depth = path.replace("\\", "/").count("/")

    text = convert_nav(text)

    if path.replace("\\", "/").endswith("README.md"):
        text = ensure_live_site_badge(text)

    text = text.replace("](../../03-quiz/README.md)", "](../../03-quiz/index.html)")
    text = text.replace("](../03-quiz/README.md)", "](../03-quiz/index.html)")
    text = text.replace("](03-quiz/README.md)", "](03-quiz/index.html)")

    if depth >= 2:
        text = text.replace("](../../README.md)", "](../../index.md)")
    else:
        text = text.replace("](../README.md)", "](../index.md)")

    if text != original:
        with open(path, "w", encoding="utf-8", newline="\n") as handle:
            handle.write(text)
        return True
    return False


def main() -> None:
    files = (
        glob.glob("01-notes/*.md")
        + glob.glob("02-exercises/*.md")
        + glob.glob("04-projects/*/README.md")
        + ["04-projects/README.md", "05-resources/README.md"]
    )
    changed = sum(fix_file(path) for path in sorted(set(files)) if os.path.exists(path))
    print(f"finalize: fixed {changed} file(s). Now run: python -m mkdocs build")


if __name__ == "__main__":
    main()
