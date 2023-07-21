import { useEffect, useState } from "react";
import Search from "./Search/Search";

export default function App() {
  const [favoriteLocations, setFavoriteLocations] = useState([]); // (NOT USED RN) favorite locations of the user
  const [currentLocation, setCurrentLocation] = useState({
    lat: null,
    long: null,
  }); // current location of the user
  const [searchedWeather, setSearchedWeather] = useState(null); // weather of the searched location (NOT USED RN)
  const [searchedLocation, setSearchedLocation] = useState({
    lat: null,
    long: null,
  }); // location that the user searched for

  useEffect(() => {
    // do not fetch weather if the location is not set
    if (searchedLocation.lat === null || searchedLocation.long === null) {
      return;
    }

    const weatherApiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const URL = `${import.meta.env.VITE_OPENWEATHER_API_URL}?lat=${
      searchedLocation.lat
    }&lon=${searchedLocation.long}&APPID=${weatherApiKey}`;

    console.log(URL);

    async function fetchWeather() {
      try {
        const res = await fetch(URL);
        const result = await res.json();
        setSearchedWeather(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }, [searchedLocation]);

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      searchedLocation({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    });
  }

  function handleAddFavorite(location) {
    setFavoriteLocations((prevFavorites) => [...prevFavorites, location]);
  }

  function handleRemoveFavorite(location) {
    setFavoriteLocations((prevFavorites) =>
      prevFavorites.filter((favLocation) => favLocation !== location)
    );
  }

  function handleSearch(location) {
    setSearchedLocation(location);
  }

  return <Search onSearch={handleSearch} />;
}
