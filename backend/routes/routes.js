const express = require('express');
const discuss = require('../model/discuss.js');
const ObjectId = require('mongoose').Types.ObjectId;
const router = express.Router();

// Methods GET, POST , PUT , DELETE
// BaseURL = http://localhost:3000//discussions

// POST
router.post('/', (req, res) => {
    let disc = new discuss({
        name: req.body.name,
        question: req.body.question,
        department: req.body.department
    });

    disc.save((err, doc) => {
        if (err) {
            console.log('data sending error ' + err);
        } else {
            res.send(doc);
        }
    });
});

// GET 
router.get('/', (req, res) => {
    discuss.find((err, doc) => {
        if (err) {
            console.log("get data error " + err);
        } else {
            res.send(doc);
        }
    });
});

// GET :id
router.get('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        discuss.findById((err, doc) => {
            if (err) {
                console.log("get data error " + err);
            } else {
                res.send(doc);
            }
        });
    } else {
        res.status(400).send('data not found for the id ' + req.params.id);
    }
});

// DELETE
router.delete('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        discuss.findByIdAndRemove((err, doc) => {
            if (err) {
                console.log("delete data error " + err);
            } else {
                res.send(doc);
            }
        });
    } else {
        res.status(400).send('data not found for the id ' + req.params.id);
    }
});

// UPDATE

router.put('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {

        let disc = {
            name: req.body.name,
            question: req.body.question,
            department: req.body.department
        };

        discuss.findByIdAndUpdate(req.params.id, {
            $set: disc
        }, {
            new: true
        }, (err, doc) => {
            if (err) {
                console.log("update data error " + err);
            } else {
                res.send(doc);
            }
        });
    } else {
        res.status(400).send('data not found for the id ' + req.params.id);
    }
});

module.exports = router;