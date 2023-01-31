const Author = require('../models/author.model');
module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
}

module.exports.getAllAuthors = (req, res) => {
    Author.find({})
        .then(author => res.json(author))
        .catch(err => res.json(err))
}

module.exports.getOneAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json(err))
}

module.exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then((updatedAuthor) => res.json(updatedAuthor))
        .catch((err) => res.json(err));
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id })
        .then((deletedAuthor) => res.json(deletedAuthor))
        .catch((err) => console.log(err));
}