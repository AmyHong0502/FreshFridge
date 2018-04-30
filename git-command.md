# Git Command Guideline

This document is a beginner's guide to use Git with Github.

## Upload files

Assume you want to upload files named `website/front-01.html`, `back-04.js`, and `website/images/logo-05.png`.

1. Add files on git.

```bash
git add website/front-01.html
git add app-04.js
git add website/images/logo-05.png
```

2. Make sure the files are added correctly.

```bash
git status
```

This command will show your current git status, including:
- branch
- items on git with status
  - new
  - modified
  - deleted
  - moved

3. Write commit messages.

```bash
git commit -m "feat: add index page"
```

If you have any trouble with writing commit messages, take a look at [this page](https://seesparkbox.com/foundry/semantic_commit_messages).

4. Make sure the files are committed correctly.

```bash
git status
```

If it was successful, it will not show the files' names anymore.

5. Push the files.

```bash
git push
```

You're done!

## Change branch

We have 3 branches: `master`, `front-end`, and `back-end`.  
Assume you want to go from `front-end` to `master`.

1. Double-check what branch you're currently on.

```bash
git status
```

2. Move to the branch `master`.

```bash
git checkout master
```

3. Make sure you're on the right branch.

```bash
git status
```

You're done!

## Merge branches

I would recommend to merge them on [Github](https://github.com/).  
You can find a reference online with pictures. 
