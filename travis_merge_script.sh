#!/bin/bash

git config --global user.email 'full3right@gmail.com'
git config --global user.name 'Full Bright'
git remote set-branches --add origin master
git fetch
git reset --hard
git checkout master
git merge --ff-only "$TRAVIS_COMMIT"
git push git+ssh://git@github.com/${TRAVIS_REPO_SLUG}.git master
