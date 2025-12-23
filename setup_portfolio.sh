#!/bin/bash

echo "==========================================="
echo "   Ahmed Portfolio - Setup & Deploy Tool   "
echo "==========================================="

# 1. Check/Install GitHub CLI
if ! command -v gh &> /dev/null; then
    echo "[!] GitHub CLI (gh) is not installed."
    echo "    Please install it first, or wait for the background installation to finish."
    echo "    Try running: gh --version"
    exit 1
fi

# 2. Authenticate
echo ""
echo "[?] You need to login to GitHub."
echo "    Follow the prompts (choose GitHub.com, HTTPS, Yes to login with browser)."
echo "==========================================="
gh auth login
echo "==========================================="

# 3. Create Repository if it doesn't exist
echo ""
echo "[*] Checking repository..."
if gh repo view ahmed-portfolio &> /dev/null; then
    echo "[i] Repository 'ahmed-portfolio' already exists."
else
    echo "[*] Creating repository 'ahmed-portfolio'..."
    gh repo create ahmed-portfolio --public --source=. --remote=origin
fi

# 4. Deploy
echo ""
echo "[*] Deploying to GitHub Pages..."
npm run deploy

echo ""
echo "==========================================="
echo "   SUCCESS! Website deployed."
echo "   Visit: http://ahmedoudah.com"
echo "==========================================="
