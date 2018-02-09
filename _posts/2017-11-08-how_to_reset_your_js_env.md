---
title: "How to reset your JS environment"
categories: programming
---

```bash
npm cache clean
rm -rf ~/.npm
yarn cache clean
rm -rf ~/.yarn-cache
rm -rf ~/.npm-pkgr/
rm -rf ~/.npm_lazy
lerna clean --yes
git clean -fx
```
