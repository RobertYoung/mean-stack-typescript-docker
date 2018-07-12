# Mean Stack with Docker and TypeScript

## Features
### Docker
```sh
# Build the docker images
docker build -t mean-stack-client:dev .

# Install the dependencies
docker run -it --rm -v $(pwd):/data -w /data/client mean-stack-client:dev yarn

# Start the dev server
docker run -it --rm -v $(pwd):/data -w /data/client -p 4200:4200 mean-stack-client:dev npm start

# Build for production
docker run -it --rm -v $(pwd):/data -w /data/client mean-stack-client:dev npm run build
```

### TypeScript Support
- Angular
- Node/Express
- Mappings
