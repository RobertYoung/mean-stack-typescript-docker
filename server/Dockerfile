FROM node:8.11.3-alpine

EXPOSE 3000

RUN mkdir -p /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY server/package.json /usr/src/app/server/package.json

COPY server/yarn.lock /usr/src/app/server/yarn.lock

WORKDIR /usr/src/app/server

RUN yarn

COPY . /usr/src/app

RUN npm run build

CMD ["npm", "start"]
