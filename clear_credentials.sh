#!/bin/bash

echo "Clearing GitHub credentials..."
printf "protocol=https\nhost=github.com\n" | git credential reject

echo "Removing current remote..."
git remote remove origin

# For macOS users (Keychain Access)
echo "Do you want to open Keychain Access to manually delete GitHub credentials? (y/n)"
read answer
if [ "$answer" = "y" ]; then
  open /Applications/Utilities/Keychain\ Access.app
  echo "In Keychain Access:"
  echo "1. Search for 'github'"
  echo "2. Find any entries for 'barteraiofficial' or github.com"
  echo "3. Delete those entries"
  echo "4. Close Keychain Access when done"
  echo "Press Enter when you've completed this step..."
  read
fi

echo "Credentials cleared. Now add your repository with a personal token:"
echo "git remote add origin https://alexxbrunner:<TOKEN>@github.com/alexxbrunner/calcart-website.git"
echo "git push -u origin main" 