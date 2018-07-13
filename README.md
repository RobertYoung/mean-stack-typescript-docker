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
# Build the docker image
cd database
docker build -t mean-stack-database:dev .

# Start the database
docker run -d --name mean-stack-database --network mean-stack mean-stack-database:dev
```

#### Client
```sh
# Build the docker image
 docker build -t mean-stack-client:dev -f ./client/Dockerfile .

# Install the dependencies
docker run -it --rm -v $(pwd)/client:/usr/src/app/client mean-stack-client:dev yarn

# Start the development server
docker run -it --rm -v $(pwd)/client:/usr/src/app/client -p 4200:4200 --name mean-stack-client --network mean-stack mean-stack-client:dev

# Build for production
docker run -it --rm -v $(pwd)/client:/usr/src/app/client mean-stack-client:dev npm run build
```

#### Server
```sh
# Build the docker image
docker build -t mean-stack-server:dev -f ./server/Dockerfile .

# Install the dependencies
docker run -it --rm -v $(pwd)/server:/usr/src/app/server mean-stack-server:dev yarn

# Build the server for development
docker run -it --rm -p 3000:3000 -v $(pwd)/server:/usr/src/app/server -v $(pwd)/client/dist:/usr/src/app/client/dist mean-stack-server:dev npm run dev

# Start the server
docker run -it --rm -p 3000:3000 -v $(pwd)/server:/usr/src/app/server -v $(pwd)/client/dist:/usr/src/app/client/dist --name mean-stack-server --network mean-stack mean-stack-server:dev
```

#### Database
```sh
docker build -t mean-stack-database:dev -f ./database/Dockerfile .

docker run -d -p 27017:27017 mean-stack-database:dev
```

### TypeScript Support
- Angular
- Node/Express
- Mappings
