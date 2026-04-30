#!/bin/bash
# ── Chandrakala Portfolio — Dev Server Launcher ────────────────────────────
# Double-click this file in Finder to start the portfolio at http://localhost:3000

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo ""
echo "  ▲ Chandrakala Portfolio"
echo "  ─────────────────────────────────────"
echo ""

# Install deps if node_modules missing
if [ ! -d "node_modules" ]; then
  echo "  → Installing dependencies..."
  npm install
  echo ""
fi

echo "  → Starting dev server at http://localhost:3000"
echo "  → Press Ctrl+C to stop"
echo ""

npm run dev
