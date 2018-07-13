import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as http from 'http';

const app = express();

// API file for interacting with MongoDB
const api = require('./routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Angular DIST output folder
app.use(express.static(path.join(process.cwd(), '../client/dist')));

// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), '../client/dist/index.html'));
});

// Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
