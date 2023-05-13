const express = require('express');
const User = require('../models/user');
const { mongoose } = require('mongoose');

const router = express.Router()

// GET /api/v1/users
router.get("/", (req, res) => {
    User.find({usernname: { $in: req.params.q }}).exec()
    .then(result => res.send(result))
    .catch(err => res.status(400).send(err))
})

// POST /api/v1/users
router.post("/", (req, res) => {
    User.create(req.body)
    .then(result => res.status(201).send(result))
    .catch(err => {
        // validation error
        if (err.properties) res.status(400).send(err.properties)
        // else
        else res.status(400).send(err)
    })
})

// GET /api/v1/users/:id
router.get("/:id", (req, res) => {
    User.findById(req.params.id).exec()
    .then(result => res.send(result))
    .catch(err => res.status(400).send(err))
})

// PUT /api/v1/users/:id
router.put("/:id", (req, res) => {
    User.findOneAndUpdate({id : req.params.id}, req.body, {
        new: true
      }).exec()
    .then(result => res.status(203).send(result))
    .catch(err => {
        // validation error
        if (err.properties) res.status(400).send(err.properties)
        // else
        else res.status(404).send(err)
    })
})

// DELETE /api/v1/users/:id
router.delete("/:id", (req, res) => {
    User.findByIdAndDelete(req.params.id).exec()
    .then(result => res.status(204).send(result))
    .catch(err => {
        // validation error
        res.status(404).send(err)
    })
})

module.exports = router;