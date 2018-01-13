#!/usr/bin/env bash

if [ -z $TRAVIS_TAG ]; then
    echo "Not a tagged release, generating commit version for package.json"
    node generateCommitVersion.js
fi

cd dist