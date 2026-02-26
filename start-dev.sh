#!/bin/bash
# Run this script to start the portfolio dev server (from anywhere).
cd "$(dirname "$0")"
rm -rf .next
echo "Starting dev server at http://localhost:8000 ..."
npm run dev
