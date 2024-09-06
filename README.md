echo "# terrence-matte-multi-page-u19o74yobg184ym3roqiynqo0z6lbvqa305h" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Kelevra82/terrence-matte-multi-page-u19o74yobg184ym3roqiynqo0z6lbvqa305h.git
curl -sS https://webi.sh/gh | sh
gh auth login
git push -u origin main

//RENAMES THE CURRENT BRANCH TO MAIN
git branch -M main

//GET THE CURRENT VERSION OF IT
