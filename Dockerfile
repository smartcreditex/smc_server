FROM node:8-stretch

WORKDIR /
COPY . /smc
WORKDIR /smc

RUN npm install --save
CMD "node" "server.js"