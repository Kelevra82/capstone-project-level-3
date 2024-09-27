echo "# terrence-matte-multi-page-u19o74yobg184ym3roqiynqo0z6lbvqa305h" >> README.md
git init
git add README.md
git config user.name "kelevra82"
git config user.email "tdmatte82@gmail.com"
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Kelevra82/terrence-matte-multi-page-u19o74yobg184ym3roqiynqo0z6lbvqa305h.git
curl -sS https://webi.sh/gh | sh
gh auth login
git push --set-upstream origin main





//PUSHES CHANGES TO THE ORIGIN'S MAIN BRANCH AND SAVES THE PARAMETERS
git

//ADD CHANGES THAT WERE MADE TO THE README FILE
git add README.md

//ADD CHANGES THAT WERE MADE IN ALL FILES AND FOLDERS
git add .

//CREATE A SAVE POINT AND ATTACH A MEMO TO IT
git commit -m "I added user info to readme"

//SYNC CHANGES TO GITHUB
git push

//COPY THE FILES FROM GITHUB
git pull --set-upstream origin main

//COPY THE FILES FROM GITHUB WITH THE DEFAULT PARAMETERS
git pull

//VIEW THE VALUE OF ORIGIN
git remote -v

//ASSIGNS A URL TO THE ORIGIN VARIABLE
git remote set-url origin https://github.com/Kelevra82/terrence-matte-multi-page-u19o74yobg184ym3roqiynqo0z6lbvqa305h.git

//RENAMES THE CURRENT BRANCH TO MAIN
git branch -M main

//GET THE CURRENT VERSION OF GIT
git --version
