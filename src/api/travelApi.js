import { destinations, hotels, restaurants, activities, reviews } from "../data/travelData";

export const getDestinations = () => Promise.resolve(destinations);
export const getHotels = () => Promise.resolve(hotels);
export const getRestaurants = () => Promise.resolve(restaurants);
export const getActivities = () => Promise.resolve(activities);
export const getReviews = () => Promise.resolve(reviews);