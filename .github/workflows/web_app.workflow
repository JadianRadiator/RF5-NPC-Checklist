name: Create Release Artifact

on:
  push:
    branches:
      - main

jobs:
  create_release:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'

      - name: Install dependencies
        run: npm install

      - name: Create zip archive
        run: |
          # Define blacklist items
          BLACKLIST=("file1.txt" "folder2")

          # Create archive excluding items in the blacklist
          zip -r release-${GITHUB_SHA::8}.zip . -x "${BLACKLIST[@]}"
      
      - name: Upload release artifact
        uses: actions/upload-artifact@v2
        with:
          name: release-${GITHUB_SHA::8}
          path: release-${GITHUB_SHA::8}.zip