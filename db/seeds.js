const dynamoose = require("dynamoose");
dynamoose.Promise = require("bluebird");
const Movie = require("../models/movie");
const uuid = require("uuid");

const { DynamoDB } = require("@aws-sdk/client-dynamodb");

// Create an instance of the DynamoDB client
const dynamoDB = new DynamoDB({ region: "eu-west-2" }); // Use your actual region

// Set AWS SDK globally in Dynamoose
dynamoose.aws.sdk = dynamoDB;

// Set the DynamoDB client instance in the Dynamoose configuration
dynamoose.aws.ddb.set(dynamoDB);

const moviesData = [
    {
        id: uuid.v4(),
        title: "Terminator",
        genre: {
            id: "5b21ca3eeb7f6fbccd471818",
            label: "Action",
            value: "actionsModern",
        },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        liked: false,
    },
    {
        id: uuid.v4(),
        title: "Die Hard",
        genre: {
            id: "5b21ca3eeb7f6fbccd471818",
            label: "Action",
            value: "actionsModern",
        },
        numberInStock: 5,
        dailyRentalRate: 2.5,
        liked: false,
    },
    {
        id: uuid.v4(),
        title: "Get Out",
        genre: {
            id: "5b21ca3eeb7f6fbccd471820",
            label: "Thriller",
            value: "thrillerJackson",
        },
        numberInStock: 8,
        dailyRentalRate: 3.5,
        liked: false,
    },
    {
        id: uuid.v4(),
        title: "Trip to Italy",
        genre: {
            id: "5b21ca3eeb7f6fbccd471814",
            label: "Comedy",
            value: "comedyLab",
        },
        numberInStock: 7,
        dailyRentalRate: 3.5,
        liked: false,
    },
    {
        id: uuid.v4(),
        title: "Airplane",
        genre: {
            id: "5b21ca3eeb7f6fbccd471814",
            label: "Comedy",
            value: "comedyLab",
        },
        numberInStock: 7,
        dailyRentalRate: 3.5,
        liked: false,
    },
    {
        id: uuid.v4(),
        title: "Wedding Crashers",
        genre: {
            id: "5b21ca3eeb7f6fbccd471814",
            label: "Comedy",
            value: "comedyLab",
        },
        numberInStock: 7,
        dailyRentalRate: 3.5,
        liked: false,
    },
    {
        id: uuid.v4(),
        title: "Gone Girl",
        genre: {
            id: "5b21ca3eeb7f6fbccd471820",
            label: "Thriller",
            value: "thrillerJackson",
        },
        numberInStock: 7,
        dailyRentalRate: 4.5,
        liked: false,
    },
    {
        id: uuid.v4(),
        title: "The Sixth Sense",
        genre: {
            id: "5b21ca3eeb7f6fbccd471820",
            label: "Thriller",
            value: "thrillerJackson",
        },
        numberInStock: 4,
        dailyRentalRate: 3.5,
        liked: false,
    },
    {
        id: uuid.v4(),
        title: "The Avengers",
        genre: {
            id: "5b21ca3eeb7f6fbccd471818",
            label: "Action",
            value: "actionsModern",
        },
        numberInStock: 7,
        dailyRentalRate: 3.5,
        liked: false,
    },
];


// Movie.scan()
//     .exec()
//     .then(async (records) => {
//         if (records && records.length) {
//             dbDrop();
//             const movies = await Movie.scan().exec();
//             if (movies) {
//                 console.log("coddio", movies);
//             }
//         }
//     });

Movie.batchPut(moviesData);
