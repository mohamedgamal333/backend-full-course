# backend-full-course

My hands-on journey learning backend development with Node.js and the technologies around it.

This repository documents my progress chapter by chapter, including what I learn, what I build, the problems I face, and how I solve them.

The goal is not only to follow the course, but to understand the concepts, solve problems independently, and develop real software engineering habits.

Challenges & Solutions

One of the most important parts of this repository is documenting real problems I encounter during the learning process.

For example:

NVM Installation — Chapter 3

While setting up the development environment, I encountered an issue with the installation method used in the course.

Instead of simply copying another solution, I researched:

What NVM is
Why Node.js version management is useful
How NVM works on Windows
Why the original approach didn't work in my environment
What alternative solutions were available

I then implemented an alternative solution and verified the environment.

nvm -v

nvm list
node -v
Lesson

A tutorial provides one possible path.

Real-world development requires understanding the problem and finding an appropriate solution when that path doesn't work.



Another something that make me search why we use --watch instead of nodemon in package.json, as we know nodemon is famous and older than --watch but the nodemon is a package out of node we need to download and add to dependency but NodeJS provides --watch inside it.


--env-fiel=.env when i searched about it and why we use in the past dotenv was used and need to install and add dependency but now NodeJs support --enc-file=.env we didn't need to install packages for just reading .env file.

we add type module in package json file as it help you and terminal to understand that we use ESModules instead of CommandJS    

