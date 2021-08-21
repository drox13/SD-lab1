#! /bin/sh
cd ..
rm -rf SD-lab1
git init
git clone --branch main https://github.com/drox13/SD-lab1.git
cd SD-lab1
npm install
node index.js