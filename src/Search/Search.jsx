import React from "react";
import { Input, Button } from "antd";

export default function Search({ onSearch }) {
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");

  const handleSearch = () => {
    if (latitude && longitude) {
      // Convert latitude and longitude to numbers before passing them to the parent component
      onSearch({
        lat: Number(latitude),
        long: Number(longitude),
      });
    }
  };

  return (
    <div>
      <Input
        placeholder="Latitude"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
      />
      <Input
        placeholder="Longitude"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
      />
      <Button type="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
}
