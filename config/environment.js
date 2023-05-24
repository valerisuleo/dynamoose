const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
const dbURI = process.env.DYNAMODB_URI || 'http://localhost:8000'; // Update the default DynamoDB URI if needed

module.exports = { port, env, dbURI }; // -> require in server.js
