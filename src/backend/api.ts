import express from 'express';

import { type Restaurant, validateRestaurant } from './types';
import { createRestaurant } from './queries';

const configuration = {
    port: 3000,
};

const application = express();

application.use(express.json());
application.use((request, _, next) => {
    console.log(`${request.method} ${request.url}`);
    next();
});

application.get('/', (_, response) => {
    response.send('Hello World!');
});

application.post('/restaurant', async (request, response) => {
    const restaurant: Restaurant = request.body;
    const valid = validateRestaurant(restaurant);

    if (valid.error) {
        response.status(400).send(valid.error);
        return;
    }

    const createdRestaurant = await createRestaurant(restaurant);
    response.send(createdRestaurant);
});

application.listen(configuration.port, () => {
    console.log('Application started.');
});