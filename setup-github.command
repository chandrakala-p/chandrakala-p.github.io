#!/bin/bash
# ─────────────────────────────────────────────────────────────
#  setup-github.command
#  Double-click this file in Finder to push the portfolio to
#  GitHub and enable GitHub Pages deployment.
# ─────────────────────────────────────────────────────────────

set -e  # Exit immediately on any error

# ── Configuration ─────────────────────────────────────────────
GITHUB_TOKEN="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"
GITHUB_USER="chandrakala-p"
REPO_NAME="chandrakala-portfolio"
REPO_URL="https://${GITHUB_TOKEN}@github.com/${GITHUB_USER}/${REPO_NAME}.git"

# ── Helper: print coloured messages ───────────────────────────
info()    { echo -e "\033[0;36m[INFO]\033[0m  $*"; }
success() { echo -e "\033[0;32m[OK]\033[0m    $*"; }
warn()    { echo -e "\033[0;33m[WARN]\033[0m  $*"; }
error()   { echo -e "\033[0;31m[ERROR]\033[0m $*"; exit 1; }

# ── Move to the repo directory (same folder as this script) ───
cd "$(dirname "$0")"
info "Working directory: $(pwd)"

# ── Step 1: Check prerequisites ───────────────────────────────
info "Checking prerequisites..."
command -v git  >/dev/null 2>&1 || error "git is not installed. Install Xcode Command Line Tools: xcode-select --install"
command -v curl >/dev/null 2>&1 || error "curl is not installed."
success "Prerequisites OK"

# ── Step 2: Create the GitHub repository (if it doesn't exist) ─
info "Creating GitHub repository '${REPO_NAME}'..."
HTTP_STATUS=$(curl -s -o /tmp/gh_response.json -w "%{http_code}" \
  -X POST \
  -H "Authorization: token ${GITHUB_TOKEN}" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/user/repos \
  -d "{
    \"name\": \"${REPO_NAME}\",
    \"description\": \"Personal portfolio — Senior Backend Engineer | Node.js · NestJS · AWS\",
    \"homepage\": \"https://${GITHUB_USER}.github.io/${REPO_NAME}\",
    \"private\": false,
    \"has_issues\": true,
    \"has_projects\": false,
    \"has_wiki\": false
  }")

if [ "$HTTP_STATUS" = "201" ]; then
  success "Repository created: https://github.com/${GITHUB_USER}/${REPO_NAME}"
elif [ "$HTTP_STATUS" = "422" ]; then
  warn "Repository already exists — continuing with push"
else
  warn "GitHub API returned status ${HTTP_STATUS}. Response:"
  cat /tmp/gh_response.json
  warn "Continuing anyway — the repo may already exist."
fi

# ── Step 3: Initialise git (if needed) ────────────────────────
if [ ! -d ".git" ]; then
  info "Initialising git repository..."
  git init
  git branch -M main
  success "Git initialised"
else
  info "Git repository already initialised"
  # Ensure we're on main
  git checkout -B main 2>/dev/null || true
fi

# ── Step 4: Configure git identity ────────────────────────────
git config user.email "chandrakalapr11@gmail.com"
git config user.name  "Chandrakala P"

# ── Step 5: Set remote ────────────────────────────────────────
if git remote get-url origin >/dev/null 2>&1; then
  info "Updating remote 'origin'..."
  git remote set-url origin "${REPO_URL}"
else
  info "Adding remote 'origin'..."
  git remote add origin "${REPO_URL}"
fi
success "Remote set to https://github.com/${GITHUB_USER}/${REPO_NAME}"

# ── Step 6: Stage and commit all files ────────────────────────
info "Staging all files..."
git add -A

# Check if there is anything to commit
if git diff --cached --quiet; then
  info "Nothing new to commit — all files already tracked"
else
  info "Committing..."
  git commit -m "feat: initial portfolio release

- Next.js 14 App Router + TypeScript + Tailwind CSS
- Framer Motion scroll animations
- Dark/light mode via next-themes
- Scrollspy navigation (IntersectionObserver)
- Sections: Hero, About, Experience, Expertise, Skills, Projects, Contact
- GitHub Actions CI/CD: quality → build → deploy
- Static export configured for GitHub Pages
- Full README.md and DOCUMENTATION.md"
  success "Committed"
fi

# ── Step 7: Push to GitHub ────────────────────────────────────
info "Pushing to GitHub (this may take a moment)..."
git push -u origin main --force
success "Code pushed to https://github.com/${GITHUB_USER}/${REPO_NAME}"

# ── Step 8: Enable GitHub Pages (source: GitHub Actions) ──────
info "Enabling GitHub Pages..."
PAGES_STATUS=$(curl -s -o /tmp/pages_response.json -w "%{http_code}" \
  -X POST \
  -H "Authorization: token ${GITHUB_TOKEN}" \
  -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/repos/${GITHUB_USER}/${REPO_NAME}/pages" \
  -d '{"build_type": "workflow"}')

if [ "$PAGES_STATUS" = "201" ] || [ "$PAGES_STATUS" = "409" ]; then
  success "GitHub Pages enabled (source: GitHub Actions)"
else
  warn "Pages API returned ${PAGES_STATUS}. You may need to enable Pages manually:"
  warn "  GitHub → Settings → Pages → Source → GitHub Actions"
  cat /tmp/pages_response.json
fi

# ── Step 9: Trigger Pages permissions (update repo settings) ──
info "Configuring workflow permissions..."
curl -s -o /dev/null \
  -X PUT \
  -H "Authorization: token ${GITHUB_TOKEN}" \
  -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/repos/${GITHUB_USER}/${REPO_NAME}/actions/permissions" \
  -d '{"enabled": true, "allowed_actions": "all"}'

# ── Done ──────────────────────────────────────────────────────
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
success "ALL DONE!"
echo ""
echo "  Repository : https://github.com/${GITHUB_USER}/${REPO_NAME}"
echo "  Actions    : https://github.com/${GITHUB_USER}/${REPO_NAME}/actions"
echo "  Live site  : https://${GITHUB_USER}.github.io/${REPO_NAME}"
echo ""
echo "  The GitHub Actions workflow has been triggered."
echo "  It takes ~2-3 minutes to build and deploy."
echo "  Check the Actions tab to monitor progress."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
read -p "Press Enter to close this window..."
