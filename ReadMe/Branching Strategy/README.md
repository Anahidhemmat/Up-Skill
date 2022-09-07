# Branching Strategy

1. The main branches with an infinite lifetime:

- master
- develop

2. Supporting branches , these branches always have a limited life time, since they will be removed eventually.

- Feature branches
- Release branches
- Hotfix branches

---

#### `origin/master branch`

origin/master considered to be the main branch where the source code of HEAD always reflects a production-ready state.

---

#### `develop branch`

The main branch where the source code of HEAD always reflects a state with the latest delivered development changes for the next release.

---

#### `feature branches`

Feature branches are used to develop new features for the upcoming or a distant future release.

---

#### `release branches`

Release branches support preparation of a new production release.

---

#### `hotfix branches`

When a critical bug in a production version must be resolved immediately, we use **hotfix** branches.

---

[Documentation that I read for this part](https://nvie.com/posts/a-successful-git-branching-model/ "visit the website")
