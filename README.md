# Mean Stack Boilerplate

## Features

- **M**ongoDB
- **E**xpress (Nest.js) 5.x
- **A**ngular 6.x
- **N**ode 8.x
- Docker
- NGXS
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

- Nest.js server on port [3000](http://localhost:3000)
- MongoDb on port [27017](http://localhost:27017)
- Seed data in MongoDb

Open http://localhost:3000

## Help

### Docker

### Compose

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

### VSCode

If you are running the server outside of docker-compose, you will need to add an entry to your hosts file so it knows where to connect to the MongoDb instance

```sh
# Add '127.0.0.1 mean-stack-database' to your hosts file
sudo nano /etc/hosts
```
