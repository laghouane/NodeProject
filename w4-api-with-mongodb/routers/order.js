const express = require('express');
const Order = require('../models/order');

const router = express.Router()

const orders = []

// GET /api/v1/orders?txt => order.name.contains(q)
router.get('/', (req, res) => {
    Order.find().exec()
    .then(orders => res.send(orders))
    .catch(err => res.status(400).send())
})

// POST /api/v1/orders
router.post('/', (req, res) => {
    const order = Order.create(req.body)
    // TODO: Add validation logic
    // Save to database
    .then(r => res.send(r))
    .catch(err => res.status(400).send(err))
})

// GET /api/v1/orders/64387b18e058add6564a03d2
router.get('/:id', (req, res) => {
    Order.findById(req.params.id).populate("owner").exec()
    .then(order => {
        if (order == null) res.status(404).send()
        else { res.send(order) }
    })
    .catch(err => res.status(400).send(err))
})

// PUT /api/v1/orders/1
router.put('/:id', (req, res) => {
    let order = orders.find(i => i.id==req.params.id)
    if (order) {
        // Update logic
        order.updatedAt = new Date().toISOString()
        order.name = req.body
    }
    res.status(404).json({'error':1})
})

// DELETE /api/v1/orders/2
router.delete('/:id', (req, res) => {
    Order.findByIdAndDelete(req.params.id).exec()
    .then(result => res.status(204).send())
    .catch(err => res.status(404).json(err))
})

// PATCH /api/v1/orders
router.patch('/:id', (req, res) => {
    let order = orders.findById(req.params.id)
    if (order) {
        // Update logic
        order.status = req.body
    }
    res.status(404).json({'error':1})
  });
let unit = "aaa"

module.exports = router