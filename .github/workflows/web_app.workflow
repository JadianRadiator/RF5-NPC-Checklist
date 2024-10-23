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
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Create zip archive
        run: |
          # Define blacklist items
          BLACKLIST=("file1.txt" "folder2")

          # Create archive excluding items in the blacklist
          zip -r release-${GITHUB_SHA::8}.zip . -x "${BLACKLIST[@]}"
      
      - name: Upload release artifact
        uses: actions/upload-artifact@v3
        with:
          name: release-${GITHUB_SHA::8}
          path: release-${GITHUB_SHA::8}.zip