export const searchWorldLocations = async (query) => {
  if (!query || query.trim().length < 2) return [];

  const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=8&q=${encodeURIComponent(
    query
  )}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Location search failed");
  }

  return response.json();
};

export const getNearbyBestPlaces = async (lat, lon) => {
  const url = `https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gscoord=${lat}|${lon}&gsradius=10000&gslimit=12&format=json&origin=*`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Nearby places failed");
  }

  const data = await response.json();
  return data.query.geosearch;
};