# Git Command Guideline

This document is a beginner's guide to use Git with Github.

## New Branch for Each Commit

1. Make a new branch.
```bash
git branch name-of-new-branch
```

2. `checkout` into the new branch.
```bash
git checkout name-of-new-branch
```

3. Work on it.

4. [`add` - `commit` - `push`](https://github.com/AmyHong0502/COMP2910-Group9/blob/master/git-command.md#upload-files). Make sure you're on the new branch before adding files.

5. Nevigate to [our repository](https://github.com/AmyHong0502/COMP2910-Group9).

6. Click `New pull request` button on the right side of your branch. [The buttons are here](https://github.com/AmyHong0502/COMP2910-Group9/branches).

7. Check whether there's a version conflict or not. If it exists, fix it. Talk to others if needed.

8. Confirm `pull request`.

You're done!

---

## Upload files

Assume you want to upload files named `website/front-01.html`, `back-04.js`, and `website/images/logo-05.png`.

1. Make sure you're on the right branch, `front-end` or `back-end`.

```bash
git status
```

2. Add files on git.

```bash
git add website/front-01.html
git add back-04.js
git add website/images/logo-05.png
```

3. Make sure the files are added correctly.

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

4. Write commit messages.

```bash
git commit -m "feat: add index page"
```

If you have any trouble with writing commit messages, take a look at [this page](https://seesparkbox.com/foundry/semantic_commit_messages).

5. Make sure the files are committed correctly.

```bash
git status
```

If it was successful, it will not show the files' names anymore.

6. Push the files. (If this is the first time you're using the branch, see [here](https://github.com/AmyHong0502/COMP2910-Group9/blob/master/git-command.md#initial-setup) instead of this step.)

```bash
git push
```

You're done!

### Initial setup

Assume you want to push your files to `back-end` branch for the first time.  
If you try `git push`, Git will recommend you to use the following command.

6. Type this. 

```bash
git push --set-upstream origin back-end
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

## Undo push

> **WARNING**: This is dangerous. It will delete the history and whole changes we made.

If you're not sure about what you're doing, please share the problem through slack so that we can keep each one of our copy and safely find a way to fix the issue.


The following code will completely remove the whole team's history after the revision ID.

i.e. This code will delete all other people's work after the revision ID.

```
git reset --hard <revision_id_of_last_known_good_commit>
git push --force
```

I intentionally don't put what revision_id_of_last_known_good_commit is because I want to help you if you ever need to remove any history. Please share the situation ASAP. Thanks!