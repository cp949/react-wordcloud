#!/bin/bash
set -euo pipefail

echo "Starting comprehensive verification..."

echo
echo "1. Type check"
pnpm typecheck

echo
echo "2. Tests with coverage"
pnpm test --coverage --run

echo
echo "3. Build"
pnpm build

echo
echo "4. Bundle size"
SIZE=$(du -sh dist/ | awk '{print $1}')
echo "Bundle size: $SIZE"

echo
echo "5. Audit"
pnpm audit --prod || { echo "Audit failed; check or rerun when registry reachable"; }

echo
echo "6. Demo build"
cd ../../packages/demo && pnpm build
cd -

echo
echo "Verify-all complete"
echo "  bundle size: $SIZE"
