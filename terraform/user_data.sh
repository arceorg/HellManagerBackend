#!/bin/bash
git clone --branch main https://github.com/HellManagerBackend.git
cd HellManagerBackend
npm i
npm run build-prod
npm run start-prod
