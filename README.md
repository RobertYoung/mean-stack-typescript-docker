# Mean Stack Boilerplate

## Features

- **M**ongoDB
- **E**xpress - Nest.js
- **A**ngular 6.x
- **N**ode 8.x
- Docker
- NGXS
- Nodemon
- Yarn
- TypeScript Path Mappings
- TSLint
- Prettier
- Debugging Support in Visual Studio Code

## Getting Started

The quickest way to get going is to run:

```sh
docker-compose up
```

This will start

- Angular Dev Server on port [4200](http://localhost:4200)
- Nest.js server on port [3000](http://localhost:3000)
- MongoDb on port [27017](http://localhost:27017)
- Seed data in MongoDb

Open http://localhost:4200

## Help

### Docker

#### Network

```sh
docker network create mean-stack
```

#### Database

```sh
# Build the docker image for seeding the database
cd database
docker build -t mean-stack-database-seed:dev .

# Start the database
docker run -d --rm -p 27017:27017 --name mean-stack-database --network mean-stack mongo

# Seed the database
docker run -it --rm --name mean-stack-database-seed --network mean-stack mean-stack-database-seed:dev
```

#### Client

```sh
# Build the docker image
 docker build -t mean-stack-client:dev -f ./client/Dockerfile .

# Install the dependencies
docker run -it --rm -v $(pwd)/:/usr/src/app/ mean-stack-client:dev yarn

# Start the development server
docker run -it --rm -v $(pwd)/:/usr/src/app/ -p 4200:4200 --name mean-stack-client --network mean-stack mean-stack-client:dev

# Build for production
docker run -it --rm -v $(pwd)/:/usr/src/app/ mean-stack-client:dev npm run build
```

#### Server

```sh
# Build the docker image
docker build -t mean-stack-server:dev -f ./server/Dockerfile .

# Install the dependencies
docker run -it --rm -v $(pwd)/server:/usr/src/app/server mean-stack-server:dev yarn

# Build the server for development
docker run -it --rm -p 3000:3000 -p 9229:9229 -v $(pwd)/:/usr/src/app/ --name mean-stack-server --network mean-stack mean-stack-server:dev npm run start:dev

# Start the server
docker run -it --rm -p 3000:3000 -v $(pwd)/:/usr/src/app/ --name mean-stack-server --network mean-stack mean-stack-server:dev
```

### VSCode

If you are running the server outside of docker-compose, you will need to add an entry to your hosts file so it knows where to connect to the MongoDb instance

```sh
# Add '127.0.0.1 mean-stack-database' to your hosts file
sudo nano /etc/hosts
```
