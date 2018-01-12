const db = require('../db');
const favorecidosSchema = new db.mongoose.Schema({
    id: String,
    userId: String,
    featureName: String,
    featureGroup: String,
    featureMetadata: Object,
    datCreation: Date,
    datUpdate: Date
}, { collection: 'favorecido' });

const FavorecidosModel = db.mongoose.model('favorecido', favorecidosSchema, 'favorecido');

module.exports = {favorecidosSchema, FavorecidosModel};