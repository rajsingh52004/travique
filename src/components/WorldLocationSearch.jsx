import { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaSearch,
  FaSpinner,
  FaStar,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  searchWorldLocations,
  getNearbyBestPlaces,
} from "../api/locationApi";
import "../styles/WorldLocationSearch.css";

function WorldLocationSearch() {
  const [query, setQuery] = useState("");
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [bestPlaces, setBestPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [placesLoading, setPlacesLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.trim().length < 2) {
        setLocations([]);
        return;
      }

      try {
        setLoading(true);
        const data = await searchWorldLocations(query);
        setLocations(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }, 700);

    return () => clearTimeout(timer);
  }, [query]);

  const handleLocationClick = async (place) => {
    setSelectedLocation(place);
    setLocations([]);
    setQuery(place.display_name);

    try {
      setPlacesLoading(true);
      const data = await getNearbyBestPlaces(place.lat, place.lon);
      setBestPlaces(data);
    } catch (error) {
      console.log(error);
    } finally {
      setPlacesLoading(false);
    }
  };

  return (
    <div className="world-search-box">
      <div className="world-search-input">
        <FaSearch />

        <input
          type="text"
          placeholder="Search any city, country, monument, place..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {loading && <FaSpinner className="spin" />}
      </div>

      {locations.length > 0 && (
        <div className="world-results">
          {locations.map((place) => (
            <div
              className="world-result-card"
              key={place.place_id}
              onClick={() => handleLocationClick(place)}
            >
              <FaMapMarkerAlt />
              <div>
                <h4>{place.name || place.display_name.split(",")[0]}</h4>
                <p>{place.display_name}</p>
                <small>
                  Lat: {Number(place.lat).toFixed(4)} | Lon:{" "}
                  {Number(place.lon).toFixed(4)}
                </small>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedLocation && (
        <div className="location-details-box">
          <div className="location-main-card">
            <h2>{selectedLocation.name || selectedLocation.display_name.split(",")[0]}</h2>
            <p>{selectedLocation.display_name}</p>

            <div className="location-meta">
              <span>Latitude: {Number(selectedLocation.lat).toFixed(4)}</span>
              <span>Longitude: {Number(selectedLocation.lon).toFixed(4)}</span>
            </div>
          </div>

          <div className="best-places-section">
            <h3>Best places near this location</h3>

            {placesLoading ? (
              <p className="loading-text">Finding best places...</p>
            ) : bestPlaces.length === 0 ? (
              <p className="loading-text">No famous places found nearby.</p>
            ) : (
              <div className="best-places-grid">
                {bestPlaces.map((place) => (
                  <div className="best-place-card" key={place.pageid}>
                    <span className="place-icon">
                      <FaStar />
                    </span>

                    <h4>{place.title}</h4>

                    <p>
                      Approx distance:{" "}
                      {(place.dist / 1000).toFixed(1)} km
                    </p>

                    <a
                      href={`https://en.wikipedia.org/?curid=${place.pageid}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View details <FaExternalLinkAlt />
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default WorldLocationSearch;