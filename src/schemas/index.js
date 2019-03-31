import Data from '../data.json';
import { normalize, schema } from 'normalizr';

const media = new schema.Entity('media', {}, {
    idAttribute: 'id', // Aunque se toma id por defecto
    processStrategy: (value, parent, key) => ({...value, category: parent.id})
});
const category = new schema.Entity('categories', {
    playlist: new schema.Array(media)
});

const categories = { categories: new schema.Array(category) };

const normalizedData = normalize(Data, categories);

export default normalizedData;