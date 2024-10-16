# GIT COMMANDS

### INSTALL GIT BASH

1. Run the command `git --version` to check if git is installed.
2. If there's an error, install [Git Bash](https://git-scm.com/)
3. Choose default options, but override the branch name with main.
4. Reload VS Code to apply changes.

### INSTALL GITHUB CLI

1. Run the command `gh --version` to check if gh is installed.
2. If there's an error, install [GitHub CLI](https://cli.github.com/)
3. Choose default options.
4. Reload VS Code to apply changes.

### CONFIGURE USER NAME

1. `git init`
2. Run the command `git config user.name`
3. If it's not correct, run the command `git config user.name "Your Name"`
4. To set it as default, run the command `git config --global user.name "Your Name"`

### CONFIGURE USER EMAIL

1. `git init`
2. Run the command `git config user.email`
3. If it's not correct, run the command `git config user.email "Your Email"`
4. To set it as default, run the command `git config --global user.email "Your Email"`

### COPY THE REPOSITORY URL

1. OpenGitHub
2. Open the repository
3. Click on the green Code button
4. Copy the HTTPS URL

### PULL FROM GITHUB

```
git init
git remote add origin https://github.com/YourName/YourRepo.git
git pull origin main
```

### DELETE UNUSED FILES

1. If there are files that VS Code doesn't need (like Glitch files), delete them.

### CREATE A NEW REPOSITORY IN GITHUB

1. Click on the cat icon at the top left.
2. Click on the green 'New' button to create a new repository.
3. Enter a name for the repository.
4. Click on the green 'Create repository' button.
5. Do not change the default settings.

### PUSH TO GITHUB FOR THE FIRST TIME

Run these first 2 commands first if not pulling from GitHub:

- `git init`
- `git remote add origin https://github.com/YourName/YourRepo.git`


```
gh auth login
git remote set-url origin https://github.com/YourName/YourRepo.git
git add .
git commit -m "added files"
git push --set-upstream origin main
```

### PUSH TO GITHUB REGULARLY

```
git add .
git commit -m "the changes I made"
git push
```

### RENAME DEFAULT BRANCH TO MAIN

`git branch -M main`

### SET DEFAULT BRANCH TO MAIN

`git config --global init.defaultBranch main`

### DELETE SOURCE CONTROL

`ls -a` - list all folders and files in a directory including hidden files  
`rm -rf .git` - force delete the .git folder  
`rf` - recursive force

### VIEW BRANCHES

`git branch` - list all branches

### CREATE A BRANCH

`git branch branchName` - create a new branch

### SWITCH TO A BRANCH

`git switch branchName` - switch to a branch

### SWITCH TO A BRANCH ON GLITCH

`git checkout branchName` - switch to a branch on Glitch

### MERGE CHANGES TO A BRANCH

1. Switch to the branch that will absorb the changes.  
example - `git switch main`

1. Merge the changes from other branch.  
example - `git merge branchName`

###  

### COMMAND DESCRIPTIONS

1. `git init`
   - Initialize the repository
2. `git pull origin main`
   - Copies files from the origin
3. `gh auth login`
   - Grants authorization to push to your repository
4. `git remote set-url origin`
   - Sets the origin
5. `git push --set-upstream origin main`
   - Pushes files to GitHub and makes origin and main the default options

---

### MERGE TEST

1. `git init` - initialize the repository
2. `git config user.name "Your Name"` - configure user name
3. `git config user.email "Your Email"` - configure user email
4. `touch index.html` - create index.html
5. `git add .` - add the changes
6. `git commit -m "added index.html"` - commit the changes
7. Create a GitHub repository called merge-test
8. `git remote add origin https://github.com/YourName/merge-test.git`
9. `git push --set-upstream origin main` - push to GitHub
10. `git branch myBranch` - create a new branch
11. `git switch myBranch` - switch to myBranch
12. Add `<p>Hello World</p>` to index.html
13. Save the changes CTRL + S
14. `git add .` - add the changes
15. `git commit -m "updated file"` - commit the changes
16. `git switch main` - switch to main
17. Change the history from `Auto` to `All`
18. `git merge myBranch` - merge myBranch to main
19. `git push` - push to GitHub
20. `git switch myBranch` - switch to myBranch
21. Add `<p>Amazing World!</p>` to index.html
22. Save the changes CTRL + S
23. `git add .` - add the changes
24. `git commit -m "updated file"` - commit the changes
25. `git switch main` - switch to main
26. `touch about.html` - create about.html
27. `git add .` - add the changes
28. `git commit -m "added about.html"` - commit the changes
29. `git merge myBranch` - merge myBranch to main
30. `git rebase myBranch` - rebase myBranch to main
31. `git push` - push to GitHub
32. `git switch myBranch` - switch to myBranch
33. `git rebase main` - rebase main to myBranch

### FIX A MERGE CONFLICT

34. Add `<h1>About Page</h1>` to about.html
35. Save the changes CTRL + S
36. `git add .` - add the changes
37. `git commit -m "added heading"` - commit the changes
38. `git switch main` - switch to main
39. Add `<h2>About Page</h2>` to about.html
40. Save the changes CTRL + S
41. `git add .` - add the changes
42. `git commit -m "added heading"` - commit the changes
43. `git merge myBranch` - merge myBranch to main
44. Select a resolution.
45. Save the changes CTRL + S
46. `git add .` - add the changes
47. `git commit -m "merged changes"` - commit the changes
48. `git push` - push to GitHub

### FIX A REBASE CONFLICT

49. `git rebase myBranch` - rebase myBranch to main
50. Select a resolution.
51. Save the changes CTRL + S
52. `git add .` - add the changes
53. `git rebase --continue` - rebase myBranch to main
54. `git push` - will cause an error. push to GitHub
55. `git push --force` - force push to GitHub

### RESTORE A SAVE POINT

56. Select a commit to restore.
57. Copy it's id
58. `git reset --hard <commit id>` - input id w/o <> to restore a save point.
59. `git push` - will cause an error. push to GitHub
60. `git push --force` - force push to GitHub

### PUSH A BRANCH TO GITHUB

61. `git push origin myBranch` - push myBranch to GitHub

### DELETE A BRANCH

62. `git branch --delete myBranch` - will result in error
63. `git branch -D myBranch` - delete myBranch
64. `git branch` - list branches

### RESTORE A BRANCH FROM GITHUB

65. `git branch myBranch origin/myBranch`
66. `git branch` - list branches