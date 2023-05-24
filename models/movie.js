const dynamoose = require("dynamoose");

const genreSchema = new dynamoose.Schema({
    label: String,
    id: String,
    value: String,
});

const movieSchema = new dynamoose.Schema(
    {
        id: String,
        title: String,
        genre: genreSchema,
        numberInStock: Number,
        dailyRentalRate: Number,
        liked: Boolean,
    },
    // {
    //     timestamps: true,
    // }
);

module.exports = dynamoose.model("Movie", movieSchema);
