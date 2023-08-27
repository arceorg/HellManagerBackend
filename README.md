# HellManagerBackend
# How to run this project?

### Install docker and docker compose ###
[Here](https://docs.docker.com/compose/install/) you can download it depending your operative system.
### Install node and nvm ###

[Here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) you can check how to install node.

### Clone this repository ###

    git clone https://github.com/arceorg/HellManagerBackend.git

### Build the app ###

    npm run build-app

### Start the app ###

    npm run start-app

### Check it is runing ###

Go to http://localhost:3000/ and check that you can see this message:

    {"message":"App is healthy!","success":true}

### Automation with Jira ###
in such a way that the jira tickets move automatically, we are going to do the following, every time we want to upload code to a repository we are going to have the main branch where we have all the main production code, to this branch we cannot push directly , we have to create a branch and make a pull request, the name of the branch must be the same identifier of jira.

To add code the process would be as follows. being in my local machine in the main branch I run the command:

    git checkout -b TICKET-IDENTIFICATION

For example for this task:

Would be:

    git checkout -b SF-12

And then i do all my things in that branch and push

    git push origin SF-12

And create a pull request which you can merge yourself
