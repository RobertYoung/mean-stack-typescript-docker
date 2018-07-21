# Client App
FROM node:8.11-alpine as mean-stack-client
RUN mkdir -p /usr/src/app
ENV PATH /usr/src/app/client/node_modules/.bin:$PATH
COPY client/package.json /usr/src/app/client/package.json
COPY client/yarn.lock /usr/src/app/client/yarn.lock
WORKDIR /usr/src/app/client
RUN yarn
COPY /client /usr/src/app/client
COPY /shared /usr/src/app/shared
RUN ng build --prod

# Node server
FROM node:8.11-alpine as mean-stack-server
RUN mkdir -p /usr/src/app
ENV PATH /usr/src/app/server/node_modules/.bin:$PATH
COPY server/package.json /usr/src/app/server/package.json
COPY server/yarn.lock /usr/src/app/server/yarn.lock
WORKDIR /usr/src/app/server
RUN yarn
COPY server /usr/src/app/server
COPY shared /usr/src/app/shared

# Final image
FROM node:8.11-alpine
WORKDIR /usr/src/app
COPY --from=mean-stack-server /usr/src /usr/src
COPY --from=mean-stack-client /usr/src/app/client/dist /usr/src/app/client/dist
EXPOSE 3000
CMD ["npm", "start"]
