const Movie = require("../models/movie");

function indexRoute(req, res, next) {
    Movie.scan()
        .exec()
        .then((movies) => res.json(movies))
        .catch(next);
}

function createRoute(req, res, next) {
    const movie = new Movie(req.body);
    movie
        .save()
        .then((movie) => res.status(201).json(movie))
        .catch(next);
}

function showRoute(req, res, next) {
    Movie.get(req.params.id)
        .then((movie) => {
            if (!movie) return res.status(404).send();
            res.json(movie);
        })
        .catch(next);
}

function updateRoute(req, res, next) {
    Movie.update({ id: req.params.id }, req.body)
        .then((movie) => res.json(movie))
        .catch(next);
}

function deleteRoute(req, res, next) {
    Movie.delete(req.params.id)
        .then(() => res.status(204).end())
        .catch(next);
}

module.exports = {
    index: indexRoute,
    create: createRoute,
    show: showRoute,
    update: updateRoute,
    delete: deleteRoute,
};
