// Monadic result type you'll find in functional languages and frameworks.
export type Result<T, E> = Readonly<{
    value?: T;
    error?: E;
}>;

export type Restaurant = Readonly<{
    id: number;
    name: string;
    description: string;
    rating: number;
    cuisineType: string;
    imageUrl: URL;
}>;

export const validateRestaurant = (value: unknown): Result<boolean, string> => {
    const restaurant = value as Restaurant;
    
    // The super lame and tedious way to validate the data.

    if (typeof restaurant.id !== 'number') {
        return { error: 'Invalid restaurant ID.' };
    }

    if (typeof restaurant.name !== 'string') {
        return { error: 'Invalid restaurant name.' };
    }

    if (typeof restaurant.description !== 'string') {
        return { error: 'Invalid restaurant description.' };
    }

    if (restaurant.name.length < 1 || restaurant.name.length > 50) {
        return { error: 'Invalid restaurant name length.' };
    }

    if (typeof restaurant.rating !== 'number') {
        return { error: 'Invalid restaurant rating.' };
    }

    if (typeof restaurant.cuisineType !== 'string') {
        return { error: 'Invalid restaurant cuisine type.' };
    }

    return { value: true };
};