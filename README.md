# HellManagerBackend
# How to run this project?

### Install docker and docker-compose ###
[Here](https://docs.docker.com/compose/install/) You can download it depending on your operative system.
### Install node and nvm ###

[Here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) you can check how to install node.

### Clone this repository ###

    git clone https://github.com/arceorg/HellManagerBackend.git

### Build the app ###

    npm run build-app

### Start the app ###

    npm run start-app

### Check it is running ###

Go to http://localhost:3000/ and check that you can see this message:

    {"message":"App is healthy!","success":true}

### Automation with Jira ###
In such a way that the Jira tickets move automatically, we are going to do the following, every time we want to upload code to a repository we are going to have the main branch where we have all the main production code, to this branch we cannot push directly, we have to create a branch and make a pull request, the name of the branch must be the same identifier of jira.

To add code the process would be as follows. being in my local machine in the main branch I run the command:

    git checkout -b TICKET-IDENTIFICATION

For example for this task:


   <img width="370" alt="image" src="https://github.com/arceorg/HellManagerBackend/assets/49419461/f0d7d8a9-c7f9-4017-962f-5b5c0208831d">

Would be:


  <img width="370" alt="image" src="https://github.com/arceorg/HellManagerBackend/assets/49419461/d3c77dc7-71f9-4a4b-8a63-765a2dfa6870">


    git checkout -b SF-13

And then I do all my things in that branch and push

    git push origin SF-13

And create a pull request that you can merge yourself:

   <img width="370" alt="image" src="https://github.com/arceorg/HellManagerBackend/assets/49419461/46db0492-54fb-470c-b18a-b7f9984a7e33">

