import {express} from 'express';
const router = express.Router();
const schema = require('../favorecidos/favorecidos_schema');

router.get('/', (req, res, next) => {
    schema.FavorecidosModel.find(req.query).lean().exec((e, docs) => {res.json(docs)});
});

router.get('/save', (req, res, next) => {
    const new_date = new Favorecidos(req.query);
    new_date.save((err) => { 
        if (err) {
            res.status(500); 
            res.json();
        } else {
            res.status(200); 
            res.json()
        }  
    });
});

module.exports = router;