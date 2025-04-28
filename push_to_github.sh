#!/bin/bash

echo "This script will push your Calcart website to GitHub"
echo "======================================================"

# Set your GitHub username and repository name
USERNAME="alexxbrunner"
REPO="calcart-website"

# Check if token is provided as argument
if [ -z "$1" ]; then
  echo "Error: Personal access token is required."
  echo "Usage: ./push_to_github.sh YOUR_GITHUB_TOKEN"
  exit 1
fi

TOKEN="$1"

echo "Step 1: Setting up remote repository..."
git remote remove origin 2>/dev/null
git remote add origin https://${USERNAME}:${TOKEN}@github.com/${USERNAME}/${REPO}.git

echo "Step 2: Checking remote repository..."
if git ls-remote --exit-code --heads origin >/dev/null 2>&1; then
  echo "  Remote repository exists and is accessible."
else
  echo "  Warning: Could not access remote repository. This might be a permission issue or the repository doesn't exist."
  echo "  We'll try to push anyway..."
fi

echo "Step 3: Pushing to GitHub..."
git push -u origin main

# Check if push was successful
if [ $? -eq 0 ]; then
  echo "======================================================"
  echo "✅ Success! Your code has been pushed to GitHub."
  echo "View your repository at: https://github.com/${USERNAME}/${REPO}"
else
  echo "======================================================"
  echo "❌ Error: Failed to push to GitHub. Check the error message above."
  echo "Common issues:"
  echo "  - Invalid or expired token"
  echo "  - Repository already exists with content"
  echo "  - Network connectivity problems"
fi 