#!/bin/bash
cd home/ec2-user/
mkdir app
sudo yum update -y
sudo amazon-linux-extras install docker -y
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
sudo systemctl start docker
sudo yum install git -y

git clone --branch main https://github.com/arceorg/HellManagerBackend.git
sudo chown -R ec2-user app
cd app/HellManagerBackend
curl -fsSL https://rpm.nodesource.com/setup_16.x | sudo bash -
sudo yum install -y nodejs
npm i
npm run build-prod
npm run start-prod
