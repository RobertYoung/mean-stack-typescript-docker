# Mean Stack with Docker and TypeScript

## Features
### Docker
#### Client
```sh
# Build the docker image
docker build -t mean-stack-client:dev ./client

# Install the dependencies
docker run -it --rm -v $(pwd):/data -w /data/client mean-stack-client:dev yarn

# Start the dev server
docker run -it --rm -v $(pwd):/data -w /data/client -p 4200:4200 mean-stack-client:dev npm start

# Build for production
docker run -it --rm -v $(pwd):/data -w /data/client mean-stack-client:dev npm run build
```
#### Server
```sh
# Build the docker image
docker build -t mean-stack-server:dev ./server

# Install the dependencies
docker run -it --rm -v $(pwd):/data -w /data/server mean-stack-server:dev yarn

# Build
docker run -it --rm -v $(pwd):/data -w /data/server mean-stack-server:dev npm build

# Start
docker run -it --rm -v $(pwd):/data -w /data/server -p 3000:3000 mean-stack-server:dev npm start

# Build for production
# docker run -it --rm -v $(pwd):/data -w /data/server mean-stack-server:dev npm run build
```

### TypeScript Support
- Angular
- Node/Express
- Mappings
