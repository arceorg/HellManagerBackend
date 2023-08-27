#!/bin/bash
cd home/ec2-user/
mkdir app
sudo chown -R ec2-user app
cd app
sudo yum update -y
sudo amazon-linux-extras install docker -y
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo yum install git -y

git clone --branch main https://github.com/arceorg/HellManagerBackend.git
cd HellManagerBackend
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 16.13.0
npm i
npm run build-prod
npm run start-prod
npm run prod
