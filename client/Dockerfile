FROM node:8.11.3-alpine

EXPOSE 4200

RUN mkdir -p /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY client/package.json /usr/src/app/client/package.json

COPY client/yarn.lock /usr/src/app/client/yarn.lock

WORKDIR /usr/src/app/client

RUN yarn

COPY . /usr/src/app

CMD ["npm", "start"]
