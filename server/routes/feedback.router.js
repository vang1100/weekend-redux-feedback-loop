const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
    let newFeedback = req.body;
    console.log('new feedback', newFeedback);

    let sqlQuery =  `
                INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                VALUES 
                ($1, $2, $3, $4);
                    `;
    pool.query(sqlQuery,[ newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
        .then((response) => {
            console.log('database response', response);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error in POST server', error);
            res.sendStatus(500);
        })
});


// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;
