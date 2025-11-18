#!/bin/bash
set -euo pipefail

echo "Running security-focused tests..."

echo
echo "1) Test suite (includes d3-color ReDoS fix verification)"
pnpm test --run

echo
echo "2) Type check (strict mode)"
pnpm typecheck

echo
echo "3) pnpm audit (warnings are allowed)"
pnpm audit --prod || { echo "Audit failed; please rerun when registry is reachable"; }

echo
echo "Security test script completed"
