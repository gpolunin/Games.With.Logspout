FROM node:latest

COPY ./ /usr/log_collector/

WORKDIR /usr/log_collector/
RUN npm install

EXPOSE 3000 3001

ENTRYPOINT node /usr/log_collector/src/run.js