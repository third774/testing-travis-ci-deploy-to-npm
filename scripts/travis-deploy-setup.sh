#!/usr/bin/env bash

if [ -z $TRAVIS_TAG ]; then
    echo "Not a tagged release, generating commit version for package.json"
    node ./scripts/generateCommitVersion.js
    cat dist/package.json
fi
