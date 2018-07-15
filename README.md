# Mean Stack with Docker and TypeScript

## Getting Started

```sh
docker-compose up
```

Open http://localhost:4200

## Features

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
docker run -it --rm -p 3000:3000 -p 9229:9229 -v $(pwd)/:/usr/src/app/ mean-stack-server:dev npm run start:dev

# Start the server
docker run -it --rm -p 3000:3000 -v $(pwd)/:/usr/src/app/ --name mean-stack-server --network mean-stack mean-stack-server:dev
```

### TypeScript Support

- Angular
- Node/Express
- Mappings
- Debugging Support in Visual Studio Code
