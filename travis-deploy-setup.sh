#!/usr/bin/env bash

if [ -z $TRAVIS_TAG ]; then
    echo "Not a tagged release, generating commit version for package.json"
    npm version patch
    node generateCommitVersion.js
    cat dist/package.json
fi

cd dist