FROM node:8-stretch

WORKDIR /

WORKDIR /smc
COPY package.json .
RUN npm install
COPY . /smc

CMD "node" "server.js"