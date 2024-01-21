import { test, expect } from 'vitest';
import { validateRestaurant } from './types';

// Demonstration of unit testing with Node, TypeScript, and Vitest.

test('validating valid restaurant returns true', () => {
    const restaurant = {
        id: 1,
        name: 'Restaurant',
        description: 'Description',
        rating: 5,
        cuisineType: 'Cuisine Type',
        imageUrl: new URL('https://example.com/image.jpg'),
    };

    const result = validateRestaurant(restaurant);
    expect(result.value).toBe(true);
});

test('validating invalid restaurant returns error with message', () => {
    const restaurant = {
        id: 1,
        name: '',
        description: 'Description',
        rating: 5,
        cuisineType: 'Cuisine Type',
        imageUrl: new URL('https://example.com/image.jpg'),
    };

    const result = validateRestaurant(restaurant);
    expect(result.error).toBe('Invalid restaurant name length.');
});