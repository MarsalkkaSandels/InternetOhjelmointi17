const express = require('express')
const router = express.Router()
const book = require('../models/borrower_model')

router.get('/:id?', function(req, res) {
    if(req.params.id) {
        book.getById(request.params.id, function(err, dbResult) {
            if (err) {
                res.json(err)
            } else {
                res.json(dbResult)
            }
        })
    } else {
        book.getAll(function(err, dbResult) {
            if (err) {
                res.json(err)
            } else {
                res.json(dbResult)
            }
        })
    }
})

router.post('/', function(req, res) {
    book.add(req.body, function(err, dbResult) {
        if (err) {
            res.json(err)
        } else {
            res.json(req.body)
        }
    })
})

router.delete('/:id', function(req, res) {
    book.delete(req.params.id, function(err, dbResult) {
        if (err) {
            res.json(err)
        } else {
            res.json(dbResult)
        }
    })
})

router.put('/:id', function(req, res) {
    book.update(req.params.id, req.body, function(err, dbResult) {
        if (err) {
            res.json(err)
        } else {
            res.json(dbResult)
        }
    })
})