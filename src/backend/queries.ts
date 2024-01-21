import type { Restaurant } from './types';

const demoTimeout = 1000;

// Your SQL queries here, ideally you'd be using ORM or some other safe method.
export const searchRestaurants = async (searchTerm: string): Promise<Restaurant[]> => {
    console.log(`Searching for restaurants with the term "${searchTerm}"...`);
    await new Promise(resolve => setTimeout(resolve, demoTimeout));
    return [];
};

export const createRestaurant = async (restaurant: Restaurant): Promise<Restaurant> => {
    console.log(`Creating restaurant "${restaurant.name}"...`);
    await new Promise(resolve => setTimeout(resolve, demoTimeout));
    return restaurant;
};

export const updateRestaurant = async (restaurant: Restaurant): Promise<Restaurant> => {
    console.log(`Updating restaurant "${restaurant.name}"...`);
    await new Promise(resolve => setTimeout(resolve, demoTimeout));
    return restaurant;
};

export const deleteRestaurant = async (restaurantId: number): Promise<void> => {
    console.log(`Deleting restaurant with ID "${restaurantId}"...`);
    await new Promise(resolve => setTimeout(resolve, demoTimeout));
    return;
};