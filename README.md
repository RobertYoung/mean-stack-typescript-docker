# Mean Stack Boilerplate

## Getting Started

The quickest way to get going is to run:

```sh
docker-compose up --build
```

This will start

- Nest.js server on port [3000](http://localhost:3000)
- MongoDb on port [27017](http://localhost:27017)
- Seed data in MongoDb

Open http://localhost:3000

### Development Build

```sh
# Install client dependencies locally
docker run -it --rm -v ${PWD}/client:/usr/src/app/client -w /usr/src/app/client mean-stack yarn

# Install server dependencies locally
docker run -it --rm -v ${PWD}/server:/usr/src/app/server -w /usr/src/app/server mean-stack yarn

# Start the services
docker-compose -f docker-compose.debug.yml up --build
```

Aswell as starting Node & MongoDB, it will also start the Angular dev server on port [4200](http://localhost:4200)

## Help

### Docker Commands

```sh
# Stop all running containers
docker stop $(docker ps -aq)

# Remove all containers
docker rm $(docker ps -aq)

# Remove all images
docker rmi $(docker images -q)

# Install dependencies locally
docker run -it --rm -v ${PWD}:/usr/src/app open-access /bin/sh ./tools/scripts/install-dependencies.sh

# Execute commands using the mongo shell (nb: the container name may differ)
docker exec -it mean-stack-typescript-docker_mean-stack-database_1 mongo
```

### Docker Compose

```sh
### Prod ###
# Start all services
docker-compose -f docker-compose.yml up --build

# Start web server only
docker-compose -f docker-compose.yml up --build mean-stack

# Start database only
docker-compose -f docker-compose.yml up --build -d mean-stack-database

# Seed the database
docker-compose -f docker-compose.yml up --build mean-stack-database-seed

### Dev ###
# Start all services
docker-compose -f docker-compose.debug.yml up --build

# Start web server only
docker-compose -f docker-compose.debug.yml up --build mean-stack

# Start database only
docker-compose -f docker-compose.debug.yml up -d --build mean-stack-database

# Seed the database
docker-compose -f docker-compose.debug.yml up --build mean-stack-database-seed
```

### Testing

```sh
# Client
docker run -it --rm -v ${PWD}/:/usr/src/app/ -w /usr/src/app/client mean-stack npm run test

# Server
docker run -it --rm -v ${PWD}/:/usr/src/app/ -w /usr/src/app/server mean-stack npm run test
```

### VSCode

If you are running the server outside of docker-compose, you will need to add an entry to your hosts file so it knows where to connect to the MongoDb instance

```sh
# Add '127.0.0.1 mean-stack-database' to your hosts file
sudo nano /etc/hosts
```
