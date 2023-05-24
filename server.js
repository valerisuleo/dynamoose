const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { DynamoDB } = require('@aws-sdk/client-dynamodb');
const dynamoose = require('dynamoose');
const { port, env, dbURI } = require('./config/environment');
const routes = require('./config/routes');
const errorHandler = require('./lib/errorHandler');
const customResponses = require('./lib/customResponses');

const app = express();
app.use(cors());
app.use(express.static(`${__dirname}/public`));

if (env !== 'test') app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(customResponses);
app.use(routes);
// app.use(errorHandler);

// Create an instance of the DynamoDB client
const dynamoDB = new DynamoDB({ region: 'eu-west-2' });

// Set AWS SDK globally in Dynamoose
dynamoose.aws.sdk = dynamoDB;

// Set Dynamoose promise implementation
dynamoose.Promise = require('bluebird');

// Set the DynamoDB client instance in the Dynamoose configuration
dynamoose.aws.ddb.set(dynamoDB);

// Assign port
app.listen(port, () => console.log(`Express is listening to port ${port}`));
