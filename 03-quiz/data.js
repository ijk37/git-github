const TOPICS = [
  { id: "01", title: "What Git Tracks" },
  { id: "02", title: "Install and Configure" },
  { id: "03", title: "Repositories and Commits" },
  { id: "04", title: "Branches and Merges" },
  { id: "05", title: "GitHub Remotes and Auth" },
  { id: "06", title: "Pull Requests and Collaboration" },
  { id: "07", title: "Security Hygiene and Secrets" },
  { id: "08", title: "Cybersecurity Workflows" },
  { id: "mixed", title: "Mixed Review" }
];

const QUIZ_CONFIG = { defaultAttempt: 5, attempt: { mixed: 16 } };

const QUESTIONS = {
  "01": [
    { q: "What is Git primarily used for?", options: ["Version control", "Packet capture", "Password cracking", "Firewall routing"], answer: 0, explain: "Git records file history as commits so changes can be reviewed and recovered." },
    { q: "Which command shows the current working tree state?", options: ["git status", "git push", "git clone", "git init --bare"], answer: 0, explain: "git status shows tracked, staged, modified, and untracked files." },
    { q: "What is the staging area?", options: ["The selected changes for the next commit", "The GitHub website", "A deleted branch", "A remote server"], answer: 0, explain: "The staging area holds exactly what you plan to save in the next commit." },
    { q: "Why is Git useful for cybersecurity notes?", options: ["It provides a change history", "It encrypts all files automatically", "It blocks all malware", "It replaces backups completely"], answer: 0, explain: "Git helps preserve a traceable record of notes, scripts, and lab documentation." },
    { q: "Which command displays commit history?", options: ["git log", "git add", "git remote", "git switch"], answer: 0, explain: "git log shows previous commits." }
  ],
  "02": [
    { q: "Which setting controls the author name on commits?", options: ["user.name", "core.name", "commit.author", "github.user"], answer: 0, explain: "user.name is the Git config key for the displayed author name." },
    { q: "Which default branch name is commonly used for new repositories?", options: ["main", "primary", "trunk-only", "production"], answer: 0, explain: "main is the common default branch name for modern GitHub repos." },
    { q: "What does pull.ff only help prevent?", options: ["Accidental merge commits during pull", "All network access", "Untracked files", "GitHub issues"], answer: 0, explain: "It allows pulls only when Git can fast-forward the branch." },
    { q: "Why should you choose a public-safe email for public commits?", options: ["Commit metadata can be visible", "Git requires a school email", "GitHub rejects private domains", "It makes commits encrypted"], answer: 0, explain: "Author email can appear in commit metadata." },
    { q: "Which command lists global Git configuration?", options: ["git config --global --list", "git global", "git status --global", "git list config"], answer: 0, explain: "git config --global --list prints global settings." }
  ],
  "03": [
    { q: "Which command creates a new Git repository in the current folder?", options: ["git init", "git start", "git new", "git track"], answer: 0, explain: "git init initializes a repository." },
    { q: "Which command stages a file?", options: ["git add README.md", "git save README.md", "git push README.md", "git stage --remote README.md"], answer: 0, explain: "git add adds changes to the staging area." },
    { q: "Which command shows unstaged file differences?", options: ["git diff", "git remote -v", "git clone", "git branch -d"], answer: 0, explain: "git diff shows changes that are not staged by default." },
    { q: "What makes a good commit message?", options: ["It clearly describes the change", "It is always one word", "It hides the reason", "It includes passwords for context"], answer: 0, explain: "Clear commit messages make history review easier." },
    { q: "Why stage files intentionally?", options: ["To avoid committing unrelated or sensitive files", "To delete history", "To bypass GitHub auth", "To make files private"], answer: 0, explain: "Intentional staging reduces accidental commits." }
  ],
  "04": [
    { q: "What is a Git branch?", options: ["A pointer to a line of work", "A backup service", "A GitHub password", "A file extension"], answer: 0, explain: "A branch points to a commit and moves as work is added." },
    { q: "Which command creates and switches to a branch?", options: ["git switch -c new-branch", "git branch --upload new-branch", "git merge -c new-branch", "git remote add new-branch"], answer: 0, explain: "git switch -c creates a branch and checks it out." },
    { q: "Why use branches for incident notes?", options: ["To isolate draft work", "To expose evidence publicly", "To erase history", "To skip reviews"], answer: 0, explain: "Branches keep work separate until it is ready." },
    { q: "When can a merge conflict occur?", options: ["When changes overlap and Git cannot combine them automatically", "Only when GitHub is offline", "Only when a file is empty", "Whenever a branch is pushed"], answer: 0, explain: "Conflicts happen when Git needs human judgment to combine edits." },
    { q: "Which command shows a compact branch graph?", options: ["git log --oneline --graph --decorate", "git status --graph", "git diff --remote", "git merge --draw"], answer: 0, explain: "This log command is useful for visualizing history." }
  ],
  "05": [
    { q: "What is a Git remote?", options: ["A named link to another repository copy", "A secret scanner", "A commit message", "A local-only branch"], answer: 0, explain: "A remote usually points to GitHub or another shared repo host." },
    { q: "What is the conventional name for the main remote?", options: ["origin", "main", "upstream-main", "server"], answer: 0, explain: "origin is the default conventional remote name." },
    { q: "Which command lists configured remotes?", options: ["git remote -v", "git list origins", "git status --remote-only", "git auth"], answer: 0, explain: "git remote -v prints remote names and URLs." },
    { q: "What does git push -u origin main do?", options: ["Pushes main and sets upstream tracking", "Deletes origin", "Creates a local-only branch", "Disables authentication"], answer: 0, explain: "The -u option sets the upstream so future push and pull are simpler." },
    { q: "How should tokens be treated?", options: ["Like passwords", "Like public usernames", "Like commit messages", "Like branch names"], answer: 0, explain: "Tokens can grant account or repository access." }
  ],
  "06": [
    { q: "What is a pull request?", options: ["A request to review and merge branch changes", "A password reset", "A local commit only", "A clone command"], answer: 0, explain: "Pull requests support review, discussion, and checks before merging." },
    { q: "Which command compares your branch to main?", options: ["git diff main...HEAD", "git push main...HEAD", "git add main...HEAD", "git clone main...HEAD"], answer: 0, explain: "git diff main...HEAD shows changes introduced by your branch." },
    { q: "What should reviewers check in security repos?", options: ["Secrets and sensitive evidence exposure", "Only font size", "Only branch color", "Only commit count"], answer: 0, explain: "Review should include security and privacy risk." },
    { q: "What are GitHub issues useful for?", options: ["Tracking tasks and questions", "Storing API keys", "Replacing commits", "Compiling code"], answer: 0, explain: "Issues help organize work and discussions." },
    { q: "Why run checks before merging?", options: ["To catch mistakes earlier", "To erase commit authors", "To make the repo private", "To skip review"], answer: 0, explain: "Automated checks and human review reduce mistakes." }
  ],
  "07": [
    { q: "Which file can prevent common sensitive files from being added accidentally?", options: [".gitignore", "README.md", "LICENSE", "index.html"], answer: 0, explain: ".gitignore tells Git which untracked files to ignore." },
    { q: "Which item should not be committed to a public repo?", options: ["Private key", "Sanitized README", "Generic checklist", "Learning notes"], answer: 0, explain: "Private keys are sensitive credentials." },
    { q: "Does deleting a secret in a later commit erase it from earlier history?", options: ["No", "Yes", "Only on Windows", "Only if the file was Markdown"], answer: 0, explain: "Earlier commits still contain the deleted content unless history is rewritten." },
    { q: "What is the first response to a real leaked token?", options: ["Revoke or rotate it", "Only rename the file", "Add a badge", "Open a public issue with the token"], answer: 0, explain: "A leaked secret should be treated as compromised." },
    { q: "Which pattern ignores packet captures?", options: ["*.pcap", "*.md", "*.html", "*.svg"], answer: 0, explain: "The *.pcap pattern ignores files ending in .pcap." }
  ],
  "08": [
    { q: "What should a public cybersecurity lab writeup avoid?", options: ["Real credentials and sensitive identifiers", "Goals", "Lessons learned", "Safe commands"], answer: 0, explain: "Public writeups should be sanitized." },
    { q: "Why use Git for a lab journal?", options: ["To track learning over time", "To guarantee anonymity", "To replace all security tools", "To bypass authentication"], answer: 0, explain: "Git records progress and decisions." },
    { q: "What belongs in an incident timeline?", options: ["Events and actions in order", "Random passwords", "Private keys", "Unrelated jokes"], answer: 0, explain: "Timelines should organize evidence and response steps." },
    { q: "What is a portfolio-safe practice?", options: ["Publish sanitized methodology and lessons", "Publish client data", "Publish active exploit targets", "Publish raw secrets"], answer: 0, explain: "A portfolio should show skill without creating risk." },
    { q: "Where should sensitive evidence usually live?", options: ["Private, access-controlled storage", "A public GitHub repo", "A commit message", "A README badge"], answer: 0, explain: "Sensitive evidence needs access control." }
  ]
};

QUESTIONS.mixed = Object.keys(QUESTIONS).flatMap((key) => QUESTIONS[key]);

function attemptSizeFor(topicId, total) {
  const configured = QUIZ_CONFIG.attempt[topicId] || QUIZ_CONFIG.defaultAttempt;
  return Math.min(configured, total);
}

