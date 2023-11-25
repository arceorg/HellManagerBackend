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

cd app
git clone --branch main https://github.com/arceorg/HellManagerBackend.git
sudo chown -R ec2-user ../app
cd HellManagerBackend
sudo su
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
nvm install
npm i
npm run build-prod
npm run start-prod
